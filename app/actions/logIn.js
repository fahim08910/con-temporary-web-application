"use server";

import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { cookieName, password } from 'app/sharedData.js';
import Database from 'better-sqlite3';

async function logIn(formData) {
    const db = new Database(`${process.cwd()}/resources/wadsongs.db`);
    const session = await getIronSession(cookies(), { password, cookieName });

    const username = formData.username;
    const userPassword = formData.password;

    const stmt = db.prepare("SELECT * FROM ht_users WHERE username = ? AND password = ?");
    const user = stmt.get(username, userPassword);

    if (user && user.loggedin) {
        session.username = username;
        await session.save();
        return { status: "LoggedIn", user: username, message: "Login successful!" };
    } else {
        return { status: "Invalid Credentials", message: "Invalid username or password" };
    }
}

export default logIn;
