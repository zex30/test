import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Channel} from "../../../services/models";

@Component({
  selector: 'channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelCardComponent implements OnInit {
  @Input() channel: Channel = null;

  constructor() { }

  ngOnInit(): void {
  }

}
