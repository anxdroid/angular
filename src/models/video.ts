export interface Video {
    id?: string;
    description: string;
    title: string;
    coverUrl?: string;
}

export class YoutubeVideo implements Video {
  id? : string;
  description: string;
  title: string;
  coverUrl: string;

  constructor(item: any) {
    this.id = item.id;
    this.description = item.snippet.description;
    this.title = item.snippet.title;
    this.coverUrl = item.snippet.thumbnails.high.url;
  }
}
