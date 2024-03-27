import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { ReadingsComponent } from './readings/readings.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'assignments', component: AssignmentsComponent},
  { path: 'assignment1', component: Assignment1Component},
  { path: 'assignment2', component: Assignment2Component},
  { path: 'assignment3', component: Assignment3Component},
  { path: 'syllabus', component: SyllabusComponent},
  { path: 'readings', component: ReadingsComponent},
  { path: 'calendar', component: CalendarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
