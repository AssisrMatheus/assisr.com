export default interface IActivity {
  origin: "github" | "linkedin" | "youtube";
  url: string;
  content: string;
  timestamp: Date;
}
