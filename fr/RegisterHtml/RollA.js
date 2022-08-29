"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryPassword = exports.TryUsername = void 0;
const Defaults_json_1 = require("../app/Internal/Defaults.json");
let random_username = document.getElementById("randomize-username");
let random_password = document.getElementById("randomize-password");
const get_floating_numbers = (floating_point_ind) => {
    let op = floating_point_ind.toString();
    let result = op.split(".");
    return result[1];
};
const TryUsername = () => {
    let chosenName;
    random_username.addEventListener("click", () => {
        const mod_usernames_length = (Math.min(Defaults_json_1.Usernames.length) / Defaults_json_1.Usernames.length) * 100;
        const randChoose = Math.floor(Math.random() * Math.min(mod_usernames_length) - Math.max(mod_usernames_length) + mod_usernames_length);
        console.log(randChoose);
        if (Defaults_json_1.Usernames[randChoose]) {
            // add numbers to end of username
            chosenName = Defaults_json_1.Usernames[randChoose];
            const numbers = Math.abs(get_floating_numbers(Math.random()));
            chosenName += numbers.toString();
            console.log(chosenName);
        }
    });
    return chosenName;
};
exports.TryUsername = TryUsername;
console.log((0, exports.TryUsername)());
const TryPassword = () => {
    random_password.addEventListener("click", () => {
    });
    return "";
};
exports.TryPassword = TryPassword;
//# sourceMappingURL=RollA.js.map