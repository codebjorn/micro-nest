# -*- mode: Python -*-

"""
* gateway
  * Language: JavaScript/TypeScript
  * Other notes: Uses npm. Does a `npm install` for package dependencies if they have changed.
* auth
  * Language: JavaScript/TypeScript
  * Other notes: Uses npm. Does a `npm install` for package dependencies if they have changed.
* documents
  * Language: JavaScript/TypeScript
  * Other notes: Uses npm. Does a `npm install` for package dependencies if they have changed.
* users
  * Language: JavaScript/TypeScript
  * Other notes: Uses npm. Does a `npm install` for package dependencies if they have changed.
"""
apps = ['gateway', 'auth', 'documents', 'users']

k8s_yaml([
    'k8s/namespace.yml',
    'k8s/secrets.yml',
    'k8s/services/gateway.yml',
    'k8s/services/auth.yml',
    'k8s/services/documents.yml',
    'k8s/services/users.yml'
])

# Port-forward services so you can hit it them locally -- e.g. you
# can access the 'fe' service in your browser at http://localhost:8000
k8s_resource('gateway-deploy', port_forwards='3000')

# For all services, tell Tilt how to build the docker image, and how to Live Update
# that service -- i.e. how to update a running container in place for faster iteration.
# See docs: https://docs.tilt.dev/live_update_tutorial.html
# This function will define a docker build step for the provided application.

# Service: gateway
docker_build(
    ref='micro-nest/gateway', 
    context='.',
    build_args={
        'service': 'gateway',
        'port': '3000'
    },
    dockerfile='k8s/docker/dev.Dockerfile',
    only=['./services/gateway', './packages', 'package.json', 'package-lock.json', 'turbo.json'],
    live_update=[sync('./services/gateway', '/app/services/gateway'),]
)

# Service: auth
docker_build(
    ref='micro-nest/auth', 
    context='.',
    build_args={
        'service': 'auth',
        'port': '4000'
    },
    dockerfile='k8s/docker/dev.Dockerfile',
    only=['./services/auth', './packages', 'package.json', 'package-lock.json', 'turbo.json'],
    live_update=[sync('./services/auth', '/app/services/auth'),]
)

# Service: documents
docker_build(
    ref='micro-nest/documents', 
    context='.',
    build_args={
        'service': 'documents',
        'port': '5000'
    },
    dockerfile='k8s/docker/dev.Dockerfile',
    only=['./services/documents', './packages', 'package.json', 'package-lock.json', 'turbo.json'],
    live_update=[sync('./services/documents', '/app/services/documents'),]
)

# Service: users
docker_build(
    ref='micro-nest/users', 
    context='.',
    build_args={
        'service': 'users',
        'port': '6000'
    },
    dockerfile='k8s/docker/dev.Dockerfile',
    only=['./services/users', './packages', 'package.json', 'package-lock.json', 'turbo.json'],
    live_update=[sync('./services/users', '/app/services/users'),]
)