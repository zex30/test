

export interface IChannelResponse {
  total: number;
  channelDetails: Channel[];
}

export class Channel {
  backgrounds: string[] | null;
  channelBlackWhites: string[] | null;
  name: string;
  introduce: string;

  constructor(source: any) {
    if (!source) {
      return;
    }

    const isPictureExist = 'picture' in source;

    this.backgrounds = isPictureExist && 'backgrounds' in source.picture && Array.isArray(source.picture.backgrounds) ?
      source.picture.backgrounds.slice() : null;

    this.channelBlackWhites = isPictureExist &&
                                'channelBlackWhites' in source.picture &&
                                    Array.isArray( source.picture.channelBlackWhites) ?
                                      source.picture.channelBlackWhites.slice() : null;

    this.name = 'name' in source ? source.name : null;
    this.introduce = 'introduce' in source ? source.introduce : null;
  }
}
