import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedtasksPage } from './completedtasks.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedtasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedtasksPageRoutingModule {}
