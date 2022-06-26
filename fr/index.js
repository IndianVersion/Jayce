var click = document.getElementById("click");
var inp = document.getElementById("inp");

import {ColorData} from "./Database.js";
import {Color, get_rgb_channel} from "./Color.js";

function click_button()
{
    var get_btn_color = click.style.backgroundColor = 'blue';
    let conv_to_rgb = this.getComputedStyle(click).backgroundColor;
    click.addEventListener("click", (event) =>
    {
        try
        {
            /* edge case */
            var click_color = get_btn_color;
            console.log(`selected: ${click_color}`);
            let pbsd = paint_block_with_saved_data(click_color);
            let cd = new ColorData();
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

var paint_block_with_saved_data = (direct_color) => {
    inp.addEventListener("click", () => {
        inp.style.backgroundColor = direct_color;
        // get_rgb_channel(direct_color, rgb_channel);
        if (direct_color != 'white') { // check if its colored
            var save = [];
            save.push(direct_color)
            for (var x=0;x<save.length;x++) {
                console.log(save[x]);
                return save[x];
            }
        }
    })
}