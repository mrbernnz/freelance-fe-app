import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { PropoalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    DocumentsComponent,
    PropoalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
