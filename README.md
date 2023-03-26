# Micro-Nest, simple microservices architecure using K8s and Nest.js

This Project provides a simple overview of how to use Kubernetes and Nest.js. 

### How to run

Project use (turborepo)[https://turbo.build/repo] for microservices and packages, so when you will run `npm install` it will run automatically for all services.

First, is required to have a local cluster of kubernetes, you can use (minikube)[https://minikube.sigs.k8s.io/docs/].
After you can start the project using (tilt)[https://tilt.dev/].   
All you need to do is run `tilt up`.
