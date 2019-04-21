import moment from "moment";
import IActivity from "../../../interfaces/IActivity";
import IGithubEvent from "../../../interfaces/IGithubEvent";

const mapGithubEventToActivity = (event: IGithubEvent): IActivity => {
  let activity: IActivity = {
    content: "",
    origin: "github",
    timestamp: moment(event.created_at),
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

export { mapGithubEventToActivity };
