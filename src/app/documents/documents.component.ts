import { Component } from '@angular/core'
import { Document } from './documents'

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard'

  documents: Document[] = [
    {
      title: 'My first doc',
      description: 'Foo bar',
      file_url: '/path/to/file',
      updated_at: 'some date',
      image_url: 'some image'
    },
    {
      title: 'My second doc',
      description: 'Foo bar',
      file_url: '/path/to/file',
      updated_at: 'some date',
      image_url: 'some image'
    },
    {
      title: 'My third doc',
      description: 'Foo bar',
      file_url: '/path/to/file',
      updated_at: 'some date',
      image_url: 'some image'
    }
  ]
}
