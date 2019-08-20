import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcademicComponent } from './applications/academic/academic.component';
import { EnterpriseComponent } from './applications/enterprise/enterprise.component';
import { HealthcareComponent } from './applications/healthcare/healthcare.component';
import { ResearchComponent } from './research/research.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'academic', component: AcademicComponent },
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'healthcare', component: HealthcareComponent },
  { path: 'research', component: ResearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
