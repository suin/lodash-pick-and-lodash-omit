import { profile } from "./profile";
import _ from "lodash";

const address = _.omit(profile, ["name", "twitter", "github"]);

console.log(address);
