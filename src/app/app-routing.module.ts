import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { HomePageComponent } from './homepage/homepage.component'

const appRoutes = [
  // { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'home', component: HomePageComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
