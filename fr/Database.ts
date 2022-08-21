const sql: any | object = import('sqlite3')
const readable: any = sql.verbose()
let database: any | object = new sql.Database(":memory:");

export class ColorData
{
    public ColorSave = database.serialize ((color: string) =>
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