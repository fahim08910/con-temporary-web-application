import Database from 'better-sqlite3';
import SongDetails from 'app/ui/songdetails';

function SearchResults({ artist }) {
    const db = new Database(`${process.cwd()}/resources/wadsongs.db`);
    const stmt = db.prepare("SELECT * FROM wadsongs WHERE artist = ?");
    const results = stmt.all(artist);

    const output = results.map(song => <SongDetails key={song.id} song={song} />);

    return <div>{output}</div>;
}

export default SearchResults;
