import IActivity from "../../../interfaces/IActivity";
import IGithubEvent from "../../../interfaces/IGithubEvent";
import IYoutubeSearch from "../../../interfaces/IYoutubeSearch";
import cachedFetch from "../../../utils/cachedFetch";
import { mapGithubEventToActivity, mapYoutubeItemToActivity } from "./maps";

const fetchGithubActivity = async (profile: string): Promise<IActivity[]> => {
  const events = await cachedFetch<IGithubEvent[]>(
    `https://api.github.com/users/${profile}/events`
  );

  if (events) {
    return events.map(mapGithubEventToActivity);
  } else {
    throw new Error("Could not retrieve github events");
  }
};

const fetchYoutubeVideos = async (channelId: string) => {
  const videos = await cachedFetch<IYoutubeSearch>(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=25&key=${
      process.env.REACT_APP_GOOGLE_API_KEY
    }`
  );

  if (videos) {
    const items = videos.items.filter(x => x.id.kind === "youtube#video");
    return items.map(mapYoutubeItemToActivity);
  } else {
    throw new Error("Could not retrieve youtube search");
  }
};

export { fetchGithubActivity, fetchYoutubeVideos };
