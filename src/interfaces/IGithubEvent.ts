interface IGithubActor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

interface IGithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User";
  site_admin: boolean;
}

interface IGithubRepo {
  id: number;
  name: string;
  url: string;
}

interface IGithubCommits {
  sha: string;
  author: { email: string; name: string };
  message: string;
  distinct: boolean;
  url: string;
}

interface IGithubIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: IGithubUser;
  labels: string[];
  state: "open";
  locked: boolean;
  assignee: null;
  assignees: any[];
  milestone: any;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  author_association: string;
  body: string;
}

interface IGithubPayload {
  ref: string;
  action: string;

  // PushEvent
  push_id: number;
  size: number;
  distinct_size: number;
  head: string;
  before: string;
  commits: IGithubCommits[];

  // Create event
  ref_type: "branch" | "repository";
  master_branch: string;
  description: string;
  pusher_type: "user";

  // Issues Event
  issue: IGithubIssue;
}

interface IGithubOrg {
  id: number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export default interface IGithubEvent {
  id: string;
  type: "PushEvent" | "WatchEvent" | "CreateEvent" | "IssuesEvent";
  actor: IGithubActor;
  repo: IGithubRepo;
  payload: IGithubPayload;
  public: boolean;
  created_at: string;
  org: IGithubOrg;
}
