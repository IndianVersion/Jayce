var sql = require('sqlite3').verbose();
var database = new sql.Database(":memory:");

export class ColorData
{
    ColorSave = database.serialize ((color) =>
    {
        database.run("CREATE TABLE colors (c str)");
        database.prepare(`INSERT INTO colors VALUES (${color})`);
        database.finalize();
        database.each("SELECT * FROM colors", (id, expr) =>
        {
            return (id + " " + expr);
        });
        database.close();
    });
}