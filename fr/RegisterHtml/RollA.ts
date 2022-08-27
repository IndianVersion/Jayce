import {Usernames} from "../app/Internal/Defaults.json";

let random_username: any = document.getElementById("randomize-username");
let random_password: any = document.getElementById("randomize-password");

export const TryUsername = (): undefined | string =>
{
    let chosenName: undefined | string;

    random_username.addEventListener("click", () =>
    {
        const mod_usernames_length: any | number = (Math.min(Usernames.length)/Usernames.length)*100;
        const randChoose: any | number = Math.floor(Math.random()*Math.min(mod_usernames_length)-Math.max(mod_usernames_length)+mod_usernames_length);
        console.log(randChoose);
        if (Usernames[randChoose])
        {
            // add numbers to end of username
            chosenName = Usernames[randChoose];
            chosenName += Math.random().toString();
            console.log(chosenName);
        }
    });
    return chosenName;
}

export const TryPassword = (): any =>
{
    random_password.addEventListener("click", () =>
    {

    });
    return "";
}