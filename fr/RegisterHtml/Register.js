"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const RollA_js_1 = require("./RollA.js");
const reg_btn = document.getElementById("reg-btn");
const cr_username = document.getElementById("inp-username");
const cr_password = document.getElementById("inp-password");
class Register {
    constructor() {
        this.usrInfo = cr_username.innerText;
        this.passInfo = cr_password.innerText;
        this.assume_username = () => {
            reg_btn.addEventListener("click", () => {
                if (this.usrInfo !== "") {
                    this.username = (0, RollA_js_1.TryUsername)();
                    console.log(this.username);
                }
            });
        };
        this.assume_password = () => {
            reg_btn.addEventListener("click", () => {
                if (this.passInfo) {
                    this.password = (0, RollA_js_1.TryPassword)();
                }
            });
        };
    }
}
exports.Register = Register;
//# sourceMappingURL=Register.js.map