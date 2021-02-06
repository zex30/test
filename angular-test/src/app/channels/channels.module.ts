import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChannelCardComponent} from "./components/channel-card/channel-card.component";
import {ChannelsRoutingModule} from "./channels-routing.module";
import {ChannelsPageComponent} from "./channels-page/channels-page.component";


@NgModule({
  declarations: [
    ChannelCardComponent,
    ChannelsPageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ]
})
export class ChannelsModule {
}
