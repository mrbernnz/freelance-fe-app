import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
/*
 * import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 * import { MatButtonModule, MatCheckboxModule } from '@angular/material';
 */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { PropoalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { ProposalService } from './proposal/proposal.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    /*
     * BrowserAnimationsModule,
     * MatButtonModule,
     * MatCheckboxModule,
     */
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    DocumentsComponent,
    PropoalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  providers: [
    DocumentService,
    ProposalService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
