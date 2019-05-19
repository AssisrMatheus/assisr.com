import IActivity from "../../../interfaces/IActivity";
import IGithubEvent from "../../../interfaces/IGithubEvent";
import { IYoutubeSearchItem } from "../../../interfaces/IYoutubeSearch";

const mapGithubEventToActivity = (event: IGithubEvent): IActivity => {
  let activity: IActivity = {
    content: "",
    origin: "github",
    timestamp: new Date(event.created_at),
    url: ""
  };

  if (event.type === "PushEvent") {
    const commits = event.payload.commits;
    const commit = commits[commits.length - 1];

    const url = `https://github.com/${event.repo.name}/commit/${commit.sha}`;

    activity = {
      ...activity,
      content: `Committed at ${event.repo.name}: ${commit.message}`,
      url
    };
  } else if (event.type === "WatchEvent") {
    const action =
      event.payload.action.substr(0, 1).toLocaleUpperCase() +
      event.payload.action.substr(1, event.payload.action.length);

    activity = {
      ...activity,
      content: `${action} watching ${event.repo.name}`,
      url: event.repo.url
    };
  } else if (event.type === "CreateEvent") {
    activity = {
      ...activity,
      content: `Created ${event.payload.ref ? event.payload.ref : ""} ${
        event.payload.ref_type
      } at ${event.repo.name}(${event.payload.description})`,
      url: `https://github.com/${event.repo.name}`
    };
  } else if (event.type === "IssuesEvent") {
    const action =
      event.payload.action.substr(0, 1).toLocaleUpperCase() +
      event.payload.action.substr(1, event.payload.action.length);
    activity = {
      ...activity,
      content: `${action} issue ${event.payload.issue.title}`,
      url: event.payload.issue.html_url
    };
  }

  return activity;
};

const mapYoutubeItemToActivity = (item: IYoutubeSearchItem): IActivity => {
  return {
    content: `Published: ${item.snippet.title}`,
    origin: "youtube",
    timestamp: new Date(item.snippet.publishedAt),
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`
  };
};

const mapBeatSaberHtmlToList = (html: string): HTMLElement[] => {
  const parser = new DOMParser();
  const page = parser.parseFromString(html, "text/html");
  const rankingLines = page.querySelectorAll(
    "body > div > div > div > div.box.has-shadow.has-text-centered > div.ranking.songs > table > tbody > tr"
  );

  return [...(rankingLines as any)];
};

const mapBeatSaberRankingListToActivity = (
  row: HTMLElement,
  userId: string
): IActivity => {
  // The rank number on the song
  const rank: HTMLElement | null = row.querySelector("th.rank");

  // The song href tag
  const link: HTMLElement | null = row.querySelector(
    "th.song > div > div:nth-child(2) > a"
  );

  // The song title and the scored difficulty
  const songAndDifficulty: HTMLElement | null = link
    ? link.querySelector("span.songTop.pp")
    : null;

  // The scored difficulty
  const difficulty: HTMLElement | null = songAndDifficulty
    ? songAndDifficulty.querySelector("span")
    : null;

  // When the score happened
  const timestamp: HTMLElement | null = row.querySelector(
    "th.song > div > div:nth-child(2) > .time"
  );

  // The pp gained
  const ppScore: HTMLElement | null = row.querySelector(
    "th.score > span.scoreTop.ppValue"
  );

  // The additional score info
  const additionalScore: HTMLElement | null = row.querySelector(
    "th.score > span.scoreBottom"
  );

  const songAndDifficultyString = songAndDifficulty
    ? songAndDifficulty.innerText
    : "";

  const difficultyString = difficulty ? difficulty.innerText : "";

  const songName = songAndDifficultyString.replace(difficultyString, "");

  const content = `Scored ${rank ? rank.innerText.trim() : ""}: ${
    songName ? songName : "a song"
  }${difficultyString ? `on ${difficultyString} ` : ""}[${
    ppScore ? `${ppScore.innerText}pp` : ""
  }${additionalScore ? ` - ${additionalScore.innerText}` : ""}]`;

  return {
    content,
    origin: "beatSaber",
    timestamp: new Date(timestamp ? timestamp.title : Date.now()),
    url: `https://scoresaber.com/u/${userId}`
  };
};

export {
  mapGithubEventToActivity,
  mapYoutubeItemToActivity,
  mapBeatSaberHtmlToList,
  mapBeatSaberRankingListToActivity
};
