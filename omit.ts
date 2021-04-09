import { profile } from "./profile";
import omit from "lodash.omit";

const address = omit(profile, ["name", "twitter", "github"]);

console.log(address);
