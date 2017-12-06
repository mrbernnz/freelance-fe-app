import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { HomePageComponent } from './homepage/homepage.component'
import { DocumentsComponent } from './documents/documents.component'
import { PropoalListComponent } from './proposal/proposal-list.component'
import { ProposalNewComponent } from './proposal/proposal-new.component'
import { ProposalShowComponent } from './proposal/proposal-show.component'

const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'proposals', component: PropoalListComponent },
  { path: 'proposals-new', component: ProposalNewComponent },
  { path: 'proposal/:id', component: ProposalShowComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
