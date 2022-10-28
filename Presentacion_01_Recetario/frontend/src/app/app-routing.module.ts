import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: "", component: ListComponent},
  {path: "createUpdate", component: CreateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
