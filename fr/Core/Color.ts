export class Color
{
    public r: any | number;
    public g: any | number;
    public b: any | number;

    constructor(r?: any | number, g?: any | number, b?: any | number)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

export const get_rgb_channel = (c_color: undefined | string, rgb_channel: any): any | object =>
{
    /* banned colors - due to negative connotations */
    let white = '(255,255,255)';
    let pink = '(255,192,203)';
    let brown = '(165,42,42)';

    /* rgb */
    const NULL_COLORS: string[] = [white, pink, brown]; // mitigate lewd drawings
    NULL_COLORS.forEach(i =>
    {
        console.log(i)
        if (c_color != NULL_COLORS[i])
        {
            console.log(rgb_channel);
            let nums_split: string[] = c_color.split(",");
            let left_split: string[] = nums_split[0].split("(");
            let final_right_split: string[] = left_split[0].split(")");
            const c: any = new Color(final_right_split[0], final_right_split[1], final_right_split[2]);
            return c;
        }else
        {
            console.log(`contains inappropriate color schema; try colors other than: ${NULL_COLORS}`);
            return [""];
        }
    });
}

get_rgb_channel("red", "");
const c: any = new Color(4,2,1);
console.log(c.r);