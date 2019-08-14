import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
// let current_language = 'ru';
import { RU_TRANS } from './messages.ru';
import { AcademicComponent } from './applications/academic/academic.component';
import { EnterpriseComponent } from './applications/enterprise/enterprise.component';
import { HealthcareComponent } from './applications/healthcare/healthcare.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '/translation.json');
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'academic', component: AcademicComponent },
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'healthcare', component: HealthcareComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, BlogComponent, AcademicComponent, EnterpriseComponent, HealthcareComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: TRANSLATIONS, useValue: RU_TRANS },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
    // { provide: LOCALE_ID, useValue: this.current_language }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
