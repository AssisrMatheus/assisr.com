export default interface IActivity {
  origin: "github" | "linkedin" | "youtube" | "beatSaber";
  url: string;
  content: string;
  timestamp: Date;
}
