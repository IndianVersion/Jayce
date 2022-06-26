/* imcorporates user lvl & things */

"use strict"

import {get_player_data_via_id} from "./Player.js"

class UserInfo
{
    constructor(lvl, games_lost, games_won)
    {
        this.lvl = lvl;
        this.games_lost = games_lost;
        this.games_won = games_won;
    }
}

class User
{
    get_level = (player_id) =>
    {
        const UInfo = new UserInfo();
        if (player_id != 0 || null)
        {
            if (get_player_data_via_id(player_id)) {

            }
        }
    }
}

const u = new UserInfo(5*901, 0, 0);
console.log(new User().get_level());
console.log(u.lvl) ? u.lvl != undefined || null : console.log(0);