import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PaperComponent } from './paper/paper.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ReadingsComponent } from './readings/readings.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CalendarComponent,
    PaperComponent,
    AssignmentsComponent,
    ReadingsComponent,
    AppComponent,
    SyllabusComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
