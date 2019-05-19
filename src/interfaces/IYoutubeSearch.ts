interface IYoutubePageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface IYoutubeItemId {
  kind: "youtube#channel" | "youtube#video";
  channelId: string;
  videoId: string;
}

interface IYoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}

interface IYoutubeItemThumbnails {
  default: IYoutubeThumbnail;
  medium: IYoutubeThumbnail;
  high: IYoutubeThumbnail;
}

interface IYoutubeItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IYoutubeItemThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface IYoutubeSearchItem {
  kind: "youtube#searchResult" | string;
  etag: string;
  id: IYoutubeItemId;
  snippet: IYoutubeItemSnippet;
}

export default interface IYoutubeSearch {
  kind: "youtube#searchListResponse" | string;
  etag: string;
  regionCode: string;
  pageInfo: IYoutubePageInfo;
  items: IYoutubeSearchItem[];
}
