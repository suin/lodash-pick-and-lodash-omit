import { profile } from "./profile";
import pick from "lodash.pick";

const sns = pick(profile, ["twitter", "github"]);

console.log(sns);
