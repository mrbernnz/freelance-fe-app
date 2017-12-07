import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Document } from './document'
import { DocumentService } from './document.service'

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  providers: [ DocumentService ]
})

export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard'
  documents: Document[]
  errorMessage: string
  mode = 'Observable'

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    let timer = Observable.timer(0,5000)
    timer.subscribe(() => this.getDocuments())
  }

  getDocuments() {
    this
      .documentService
      .getDocument()
      .subscribe(
        documents => this.documents = documents,
        error => this.errorMessage = <any>error
      )
  }
}
