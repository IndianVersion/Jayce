"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_js_1 = require("./Player.js");
class UserInfo {
    constructor(lvl, games_lost, games_won) {
        this.lvl = lvl;
        this.games_lost = games_lost;
        this.games_won = games_won;
    }
}
class User {
    constructor() {
        this.get_level = (player_id) => {
            const UInfo = new UserInfo();
            const PData = new Player_js_1.PlayerData();
            if (player_id !== 0 || null) {
                if (PData.get_player_data_via_id(player_id)) {
                }
            }
        };
    }
}
const u = new UserInfo(5 * 901, 0, 0);
console.log(u);
//# sourceMappingURL=User.js.map