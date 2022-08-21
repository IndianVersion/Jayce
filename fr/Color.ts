export class Color
{
    constructor(r?: string, g?: string, b?: string)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

export const get_rgb_channel = (c_color: string | undefined, rgb_channel: any): any | object =>
{
    /* banned colors - due to negative connotations */
    let white = '(255,255,255)';
    let pink = '(255,192,203)';
    let brown = '(165,42,42)';

    /* rgb */
    const NULL_COLORS: string[] = [white, pink, brown]; // mitigate lewd drawings
    NULL_COLORS.forEach(i =>
    {
        if (c_color != NULL_COLORS[i])
        {
            const c = new Color(rgb_channel);
            let nums_split = c_color.split(",");
            let left_split = nums_split.split("(");
            let final_right_split = left_split.split(")");
            // split color channels
            c.r = final_right_split[0];
            c.g = final_right_split[1];
            c.b = final_right_split[2];
            return c;
        }else
        {
            console.log("contains inappropriate color schema; try different colors besided");
            return [""];
        }
    });
}