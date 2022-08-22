import {Usernames} from "../app/Internal/Defaults.json"

const reg_btn: any = document.getElementById("reg-btn");
const cr_username: any = document.getElementById("inp-username");
const cr_password: any = document.getElementById("inp-password");

interface SavedUserInfo
{
    id: number;
    default_username: string;
    default_password: string;
}

// make default
export class Register
{
    private usrInfo: string = cr_username.innerText;
    private passInfo: string = cr_password.innerText;

    public set_username = (): void =>
    {
        reg_btn.addEventListener("click", () =>
        {
            if (this.usrInfo !== "")
            {
                let RI: object = Usernames;
                console.log(RI);
                let info: string = JSON.stringify(RI);
                let result: any[] = JSON.parse(info);
                result.forEach(i =>
                {
                    console.log(i);
                });
            }
            // else
        });
    }

    public set_password = (): void =>
    {

    }
}

new Register().set_username();