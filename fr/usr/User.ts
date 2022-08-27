import {PlayerData} from "./Player.js"

class UserInfo
{
    private lvl: number;
    private games_lost: number;
    private games_won: number;

    constructor(lvl?: number, games_lost?: number, games_won?: number)
    {
        this.lvl = lvl;
        this.games_lost = games_lost;
        this.games_won = games_won;
    }
}

class User
{
    public get_level = (player_id: number) =>
    {
        const UInfo: any = new UserInfo();
        const PData: any = new PlayerData();
        if (player_id !== 0 || null)
        {
            if (PData.get_player_data_via_id(player_id)) {

            }
        }
    }
}

const u: any = new UserInfo(5*901, 0, 0);
console.log(u)