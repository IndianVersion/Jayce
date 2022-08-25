import {TryUsername} from "./RollA";

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

    private assume_username = (): void =>
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

    private assume_password = (): void =>
    {
        return;
    }

    id: number;
    username: any;
    password: any;
}

const r: any = new Register();
r.assume_username();