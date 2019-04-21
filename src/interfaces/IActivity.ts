import moment from "moment";

export default interface IActivity {
  origin: "github" | "linkedin" | "youtube";
  content: string;
  url: string;
  timestamp: moment.Moment;
}
