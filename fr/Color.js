export class Color
{
    constructor(r, g, b)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

export const get_rgb_channel = (c_color, rgb_channel) =>
{
    /* banned colors - due to negative connotations */
    let white = '(255,255,255)';
    let pink = '(255,192,203)';
    let brown = '(165,42,42)';

    /* rgb */
    var unavailabeColors = [white, pink, brown]; // mitigate lewd drawings
    for (var i=0;i<unavailabeColors.length;i++)
    {
        if (c_color != unavailabeColors[i])
        {
            const c = new Color(rgb_channel);
            let nums_split = c_color.split(",");
            let left_split = nums_split.split("(");
            /* use this to get color channels */
            let final_right_split = left_split.split(")");
            c.r = final_right_split[0];
            c.g = final_right_split[1];
            c.b = final_right_split[2];
            return c;
        }else
        {
            console.log("contains innapropriate color schema; try different colors");
            return [""];
        }
    }
}