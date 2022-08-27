import {TryUsername, TryPassword} from "./RollA.js";

const reg_btn: any = document.getElementById("reg-btn");
const cr_username: any = document.getElementById("inp-username");
const cr_password: any = document.getElementById("inp-password");

export interface InternalUserInfo
{
    id: number;
    username: any;
    password: any;
}

export class Register implements InternalUserInfo
{
    private usrInfo: string = cr_username.innerText;
    private passInfo: string = cr_password.innerText;

    assume_username = (): void =>
    {
        reg_btn.addEventListener("click", () =>
        {
            if (this.usrInfo !== "")
            {
                this.username = TryUsername();
                console.log(this.username);
            }
        });
    }

    assume_password = (): void =>
    {
        reg_btn.addEventListener("click", () =>
        {
            if (this.passInfo)
            {
                this.password = TryPassword();
            }
        });
    }

    id: number;
    username: any;
    password: any;
}

const r: any = new Register();
r.assume_username();