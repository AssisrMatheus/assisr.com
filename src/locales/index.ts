import en from "./en.json";
import pt from "./pt.json";

interface IMessages {
  [key: string]: { [key: string]: string };
}

const messages: IMessages = {
  en,
  pt
};

export default messages;
