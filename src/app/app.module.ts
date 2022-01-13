import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DatePickerComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    MatProgressBarModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
   

    RouterModule.forRoot([
      {path: 'form', component: FormComponent}
    ]),
 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
