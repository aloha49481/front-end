import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { UsersComponent } from 'app/users/users.component';
import { SurveyComponent } from 'app/survey/survey.component';
import { SurveyFormComponent } from 'app/common/survey-form/survey-form.component';
import { SearchResultsComponent } from 'app/common/search-results/search-results.component';
import { OrganizationProfileComponent } from 'app/organization-profile/organization-profile.component';
import { ContactComponent } from 'app/contact/contact.component';
import { AboutComponent } from 'app/about/about.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'request', loadChildren:'./request/request.module#RequestModule'},
  { path: 'users', component: UsersComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'survey-form', component: SurveyFormComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'organization-profile', component: OrganizationProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
