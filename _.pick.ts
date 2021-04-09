import { profile } from "./profile";
import _ from "lodash";

const sns = _.pick(profile, ["twitter", "github"]);

console.log(sns);
