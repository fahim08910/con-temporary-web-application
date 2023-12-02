// app/actions/buyAction.js
"use server";

import Database from 'better-sqlite3';

function buyAction(id) {
    const db = new Database(`${process.cwd()}/resources/wadsongs.db`);

    if (id && id >= 1) {
        const updateStmt = db.prepare("UPDATE wadsongs SET quantity = quantity - 1 WHERE id=?");
        const updateResult = updateStmt.run(id);

        if (updateResult.changes > 0) {
            const selectStmt = db.prepare("SELECT quantity FROM wadsongs WHERE id=?");
            const row = selectStmt.get(id);
            return { status: "Purchase successful", quantity: row.quantity };
        } else {
            return { status: `Song with ID ${id} not found` };
        }
    } else {
        return { status: "Invalid ID" };
    }
}

export default buyAction;
