import IGithubEvent, { IGithubPayload } from "./IGithubEvent";

interface IGithubContent {
  commitMessage?: string;
  repositoryPath?: string;
  description?: string;
  issueTitle?: string;
  issueNumber?: number;
  branchName?: string;
  comment?: string;
  actionType?: IGithubPayload["action"];
}

interface IYoutubeContent {
  videoTitle?: string;
  actionType?: string;
}

interface IBeatSaberContent {
  rank?: string;
  songTitle?: string;
  difficulty?: string;
  ppScore?: string;
  additionalInfo?: string;
  actionType?: string;
}

export default interface IActivity {
  origin: "GitHub" | "LinkedIn" | "Youtube" | "BeatSaber";
  event: IGithubEvent["type"] | "PublishEvent" | "ScoredEvent";
  url?: string;
  content?: IGithubContent | IYoutubeContent | IBeatSaberContent;
  timestamp: Date;
}
