import { parseString } from "xml2js";
import { traverse} from "./traverse";

export const parseXML = (xmlString) => {
  parseString(xmlString, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    traverse(result);
  });
};