"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_rgb_channel = exports.Color = void 0;
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}
exports.Color = Color;
const get_rgb_channel = (c_color, rgb_channel) => {
    /* banned colors - due to negative connotations */
    let white = '(255,255,255)';
    let pink = '(255,192,203)';
    let brown = '(165,42,42)';
    /* rgb */
    const NULL_COLORS = [white, pink, brown]; // mitigate lewd drawings
    NULL_COLORS.forEach(i => {
        console.log(i);
        if (c_color != NULL_COLORS[i]) {
            console.log(rgb_channel);
            let nums_split = c_color.split(",");
            let left_split = nums_split[0].split("(");
            let final_right_split = left_split[0].split(")");
            const c = new Color(final_right_split[0], final_right_split[1], final_right_split[2]);
            return c;
        }
        else {
            console.log(`contains inappropriate color schema; try colors other than: ${NULL_COLORS}`);
            return [""];
        }
    });
};
exports.get_rgb_channel = get_rgb_channel;
(0, exports.get_rgb_channel)("red", "");
const c = new Color(4, 2, 1);
console.log(c.r);
//# sourceMappingURL=Color.js.map