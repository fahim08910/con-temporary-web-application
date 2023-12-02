"use server"
import Database from 'better-sqlite3';

async function createSong(prevState, formData) {
    const db = new Database(`${process.cwd()}/resources/wadsongs.db`);

    // Check for empty fields
    if (Object.values(formData).some(value => value === "")) {
        return { status: "Blank Data" };
    }

    const stmt = db.prepare("INSERT INTO wadsongs (title, artist, year, downloads, price, quantity) VALUES (?, ?, ?, ?, ?, ?)");
    const info = stmt.run([formData.get('title'), formData.get('artist'), formData.get('year'), formData.get('downloads'), formData.get('price'), formData.get('quantity')]);

    return { status: "OK", id: info.lastInsertRowid };
}

export default createSong;
