import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";

const routes: Routes=[
    {path: 'student-details', component:StudentDetailsComponent},
    {path: 'studentlist', component:StudentListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {};

export const myRoutings=[
    StudentListComponent,
    StudentDetailsComponent
];