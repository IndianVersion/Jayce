const click: object = document.getElementById("click");
const inp: object = document.getElementById("inp");

console.log(typeof(click))

import {ColorData} from "./Database";
import {Color, get_rgb_channel} from "./Color";

function click_button()
{
    let get_btn_color: any = click.style.backgroundColor = 'blue';
    click.addEventListener("click", (event) =>
    {
        try
        {
            /* edge case */
            let conv_to_rgb: any | null = this.getComputedStyle(click).backgroundColor;
            let click_color: any = get_btn_color;
            console.log(`selected: ${click_color}`);
            let pbsd: any | string= paint_block_with_saved_data(click_color);
            let cd: any = new ColorData();
            cd.ColorSave(pbsd);
            get_rgb_channel(click_color, conv_to_rgb);
        }
        catch(e)
        {
            console.log(`Variable: click_color does not equate to the color "blue" or got ${click_color} ${e}`)
        }
    })
}

click_button();

const paint_block_with_saved_data = (direct_color: any): any | string => {
    inp.addEventListener("click", () => {
        inp.style.backgroundColor = direct_color;
        // get_rgb_channel(direct_color, rgb_channel);
        if (direct_color != 'white') { // check if its colored
            const save: any[] = [];
            save.push(direct_color);
            save.forEach(x =>
            {
                console.log(save[x]);
                return save[x];
            })
        }
    })
}