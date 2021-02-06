import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ChannelsService} from "../../services/channels.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-channels-page',
  templateUrl: './channels-page.component.html',
  styleUrls: ['./channels-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelsPageComponent implements OnInit {
  channels$ = this.channelsService.loadData();

  constructor(private channelsService: ChannelsService) { }

  ngOnInit(): void {
  }

}
