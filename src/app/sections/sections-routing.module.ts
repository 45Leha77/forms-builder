import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from './sections.component';

const sectionsRoutes: Routes = [{ path: '', component: SectionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(sectionsRoutes)],
  exports: [RouterModule],
})
export class SectionsRoutingModule {}
