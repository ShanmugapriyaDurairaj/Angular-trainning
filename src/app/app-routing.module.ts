import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExCustomPipesComponent } from './compoent/ex-custom-pipes/ex-custom-pipes.component';
import { ExRoutingParamsComponent } from './compoent/ex-routing-params/ex-routing-params.component';
import { OverviewComponent } from './compoent/overview/overview.component';
import { SpecsComponent } from './compoent/specs/specs.component';

const routes: Routes = [
  { path: '', component: ExCustomPipesComponent },
  { path: 'users', component: ExCustomPipesComponent },
  { path: 'user-details/:id', component: ExRoutingParamsComponent,
      children: [
        { path: 'overview', redirectTo: 'overview', pathMatch: 'full' }, //routing cgild
        { path: 'overview', component: OverviewComponent },
        { path: 'specs', component: SpecsComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
