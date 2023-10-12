import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SachinComponent } from './sachin/sachin.component';
import { GangulyComponent } from './ganguly/ganguly.component';


const routes: Routes = [
  { path: 'sachin', component: SachinComponent },
  { path: 'ganguly', component: GangulyComponent },

  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
