import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentsService {
  getAll() {
    return [
      {
        id: 1,
        name: 'Document 1',
        path: '/documents/document-1',
      },
      {
        id: 2,
        name: 'Document 2',
        path: '/documents/document-2',
      },
      {
        id: 3,
        name: 'Document 3',
        path: '/documents/document-3',
      },
      {
        id: 4,
        name: 'Document 4',
        path: '/documents/document-4',
      },
    ];
  }

  get(id: number) {
    return this.getAll().find((document) => document.id === id);
  }
}
