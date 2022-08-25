"use strict";
exports.__esModule = true;
exports.Register = void 0;
var RollA_1 = require("./RollA");
var reg_btn = document.getElementById("reg-btn");
var cr_username = document.getElementById("inp-username");
var cr_password = document.getElementById("inp-password");
var Register = /** @class */ (function () {
    function Register() {
        var _this = this;
        this.usrInfo = cr_username.innerText;
        this.passInfo = cr_password.innerText;
        this.assume_username = function () {
            reg_btn.addEventListener("click", function () {
                if (_this.usrInfo !== "") {
                    _this.username = (0, RollA_1.TryUsername)();
                    console.log(_this.username);
                }
            });
        };
        this.assume_password = function () {
            return;
        };
    }
    return Register;
}());
exports.Register = Register;
var r = new Register();
r.assume_username();
