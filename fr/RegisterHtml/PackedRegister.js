(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.Register = void 0;
var RollA_js_1 = require("./RollA.js");
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
                    _this.username = (0, RollA_js_1.TryUsername)();
                    console.log(_this.username);
                }
            });
        };
        this.assume_password = function () {
            reg_btn.addEventListener("click", function () {
                if (_this.passInfo) {
                    _this.password = (0, RollA_js_1.TryPassword)();
                }
            });
        };
    }
    return Register;
}());
exports.Register = Register;
var r = new Register();
r.assume_username();

},{"./RollA.js":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.TryPassword = exports.TryUsername = void 0;
var Defaults_json_1 = require("../app/Internal/Defaults.json");
var random_username = document.getElementById("randomize-username");
var random_password = document.getElementById("randomize-password");
var get_floating_numbers = function (floating_point_ind) {
    var op = floating_point_ind.toString();
    var result = op.split(".");
    return result[1];
};
var TryUsername = function () {
    var chosenName;
    random_username.addEventListener("click", function () {
        var mod_usernames_length = (Math.min(Defaults_json_1.Usernames.length) / Defaults_json_1.Usernames.length) * 100;
        var randChoose = Math.floor(Math.random() * Math.min(mod_usernames_length) - Math.max(mod_usernames_length) + mod_usernames_length);
        console.log(randChoose);
        if (Defaults_json_1.Usernames[randChoose]) {
            // add numbers to end of username
            chosenName = Defaults_json_1.Usernames[randChoose];
            chosenName += (get_floating_numbers(Math.random()) / 10).toString();
            console.log(chosenName);
        }
    });
    return chosenName;
};
exports.TryUsername = TryUsername;
console.log((0, exports.TryUsername)());
var TryPassword = function () {
    random_password.addEventListener("click", function () {
    });
    return "";
};
exports.TryPassword = TryPassword;

},{"../app/Internal/Defaults.json":3}],3:[function(require,module,exports){
module.exports={
  "Usernames": [
    "submissivekickball",
    "trainingeighty",
    "leggingsworldcup",
    "explodemeniscus",
    "manchesterstrut",
    "impishbeneficent",
    "chairthird",
    "ashworthresist",
    "wainscotroyal",
    "gymvisitor",
    "episodebashful",
    "volunteerexcuse",
    "lateenfortress",
    "versedmurder",
    "impalatubby",
    "scrapesaffron",
    "alertunderwing",
    "kiltpeppered",
    "wenthere",
    "photocostume",
    "absurdbullfinche",
    "studioushellish",
    "appeargambler",
    "blushingpsychotic",
    "covenseaweed",
    "admitburied",
    "cleatsinstead",
    "operatingdish",
    "rindrelatively",
    "phewbarely",
    "irritatingglug",
    "earsjoker",
    "anymorethree",
    "bewilderedclothe",
    "regulationassured",
    "livelyfund",
    "favorabletomato",
    "portlyapprove",
    "realitymutant",
    "slenderstarry",
    "sourdoughmorose",
    "heinekenbeacon",
    "compasshollow",
    "grinchknew",
    "partlyconscious",
    "discretepufferfish",
    "brickyogurt",
    "bisonintrigue",
    "revealspend",
    "lotssticky"
  ]
}
},{}]},{},[1]);
