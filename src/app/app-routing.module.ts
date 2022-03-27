import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component: UserComponent},
  { path: 'users', component: UserComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'students', component: StudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
