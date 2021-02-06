import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ChannelsPageComponent} from "./channels-page/channels-page.component";

const routes: Routes = [
  {
    path: '',
    component: ChannelsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
