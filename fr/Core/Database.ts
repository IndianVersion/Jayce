import * as sqlite3 from "sqlite3"

let db: any = new sqlite3.Database(':memory:')

export class ColorData
{
    public stmt: any;

    public ColorSave = (color: string): any | string =>
    {
        db.serialize(() =>
        {
            db.run("CREATE TABLE saved_colors (_color str)");
            this.stmt = db.prepare("INSERT INTO saved_colors VALUES ()");
            this.stmt(color);
            db.finalize;
        });
        return (db.each("SELECT * FROM saved_colors ()"), (err, row) =>
        {
           row._color;
        });
    }

}