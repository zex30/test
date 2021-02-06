import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Channel, IChannelResponse} from "./models";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  constructor(private _http: HttpClient) {
  }

  loadData(): Observable<IChannelResponse> {
    return this._http.get<IChannelResponse>('./assets/channels.json')
      .pipe(map(this.mapChannels));
  }

  mapChannels(data: IChannelResponse): IChannelResponse | null {
    if (!data) {
      return null;
    }

    return {
      total: data.total,
      channelDetails: data.channelDetails && data.channelDetails.map(channel => new Channel(channel)) || []
    }
  }
}
