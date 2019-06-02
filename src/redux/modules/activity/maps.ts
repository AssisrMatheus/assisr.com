import retext from "retext";
import emoji from "retext-emoji";
import IActivity from "../../../interfaces/IActivity";
import IGithubEvent from "../../../interfaces/IGithubEvent";
import { IYoutubeSearchItem } from "../../../interfaces/IYoutubeSearch";

const retextEmoji = retext().use(emoji, { convert: "encode" });

const mapGithubEventToActivity = (event: IGithubEvent): IActivity => {
  const activity: IActivity = {
    event: event.type,
    origin: "GitHub",
    timestamp: new Date(event.created_at)
  };

  if (event.type === "PushEvent") {
    const commits = event.payload.commits;
    const commit = commits[commits.length - 1];

    return {
      ...activity,
      content: {
        commitMessage: retextEmoji.processSync(commit.message).toString(),
        repositoryPath: event.repo.name
      },
      url: `https://github.com/${event.repo.name}/commit/${commit.sha}`
    };
  } else if (event.type === "WatchEvent") {
    return {
      ...activity,
      content: {
        actionType: event.payload.action,
        repositoryPath: event.repo.name
      },
      url: `https://github.com/${event.repo.name}`
    };
  } else if (event.type === "CreateEvent") {
    return {
      ...activity,
      content: {
        actionType: event.payload.ref_type,
        branchName: event.payload.ref,
        description: retextEmoji
          .processSync(event.payload.description)
          .toString(),
        repositoryPath: event.repo.name
      },
      url: `https://github.com/${event.repo.name}`
    };
  } else if (event.type === "IssuesEvent") {
    return {
      ...activity,
      content: {
        actionType: event.payload.action,
        issueNumber: event.payload.issue.number,
        issueTitle: event.payload.issue.title
      },
      url: event.payload.issue.html_url
    };
  } else if (event.type === "IssueCommentEvent") {
    return {
      ...activity,
      content: {
        actionType: event.payload.action,
        comment: retextEmoji
          .processSync(event.payload.comment.body.substr(0, 20))
          .toString(),
        issueNumber: event.payload.issue.number,
        issueTitle: event.payload.issue.title
      },
      url: event.payload.comment.html_url
    };
  } else {
    return activity;
  }
};

const mapYoutubeItemToActivity = (item: IYoutubeSearchItem): IActivity => {
  return {
    content: { videoTitle: item.snippet.title },
    event: "PublishEvent",
    origin: "Youtube",
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
  userId: string,
  sorting: number = 1
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

  return {
    content: {
      additionalInfo: additionalScore ? additionalScore.innerText : "",
      difficulty: difficultyString ? difficultyString : "",
      ppScore: ppScore ? `${ppScore.innerText}pp` : "",
      rank: rank ? rank.innerText.trim() : "",
      songTitle: songName ? songName : "a song"
    },
    event: "ScoredEvent",
    origin: "BeatSaber",
    timestamp: new Date(timestamp ? timestamp.title : Date.now()),
    url: `https://scoresaber.com/u/${userId}&sort=${sorting}`
  };
};

export {
  mapGithubEventToActivity,
  mapYoutubeItemToActivity,
  mapBeatSaberHtmlToList,
  mapBeatSaberRankingListToActivity
};
