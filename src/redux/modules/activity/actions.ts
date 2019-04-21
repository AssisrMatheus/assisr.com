import IActivity from "../../../interfaces/IActivity";
import IGithubEvent from "../../../interfaces/IGithubEvent";
import cachedFetch from "../../../utils/cachedFetch";
import { mapGithubEventToActivity } from "./maps";

const fetchGithubActivity = async (profile: string): Promise<IActivity[]> => {
  const events = await cachedFetch<IGithubEvent[]>(
    `https://api.github.com/users/${profile}/events`
  );

  if (events) {
    return events.map(mapGithubEventToActivity);
  } else {
    console.error(events);
    throw new Error("Could not retrieve events");
  }
};

export { fetchGithubActivity };
