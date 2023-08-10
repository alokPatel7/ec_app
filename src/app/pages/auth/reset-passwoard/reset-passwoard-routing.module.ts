import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswoardPage } from './reset-passwoard.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswoardPageRoutingModule {}
