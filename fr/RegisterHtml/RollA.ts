import {Usernames} from "../app/Internal/Defaults.json";
import {InternalUserInfo} from "./Register";

export * from "./RollA";

export const TryUsername = (): string =>
{
    const mod_usernames_length: any | number = Math.min(Usernames.length)/Math.max(Usernames.length)*100;
    const randChoose: any | number = Math.floor(Math.random()*Math.min(mod_usernames_length)-Math.max(mod_usernames_length)+mod_usernames_length);
    console.log(randChoose);
    return Usernames[randChoose];
}