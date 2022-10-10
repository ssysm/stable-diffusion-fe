import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Txt2imgComponent} from "./pages/txt2img/txt2img.component";
import {SettingsComponent} from "./pages/settings/settings.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'txt2img' },
  { path: 'txt2img', component: Txt2imgComponent },
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
