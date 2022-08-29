"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorData = void 0;
const sqlite3 = __importStar(require("sqlite3"));
let db = new sqlite3.Database(':memory:');
class ColorData {
    constructor() {
        this.ColorSave = (color) => {
            db.serialize(() => {
                db.run("CREATE TABLE saved_colors (_color str)");
                this.stmt = db.prepare("INSERT INTO saved_colors VALUES ()");
                this.stmt(color);
                db.finalize;
            });
            return (db.each("SELECT * FROM saved_colors ()"), (err, row) => {
                row._color;
            });
        };
    }
}
exports.ColorData = ColorData;
//# sourceMappingURL=Database.js.map