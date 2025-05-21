import type { RequestHandler } from "@sveltejs/kit";
import bcrypt from "bcryptjs";

export const POST: RequestHandler = async ({ request }) => {
    try {
      const { name, password } = await request.json();
  
      const db = await getDb();
  
      const [rows] = await db.query('SELECT * FROM Users WHERE name = ?', [name]) as [any[], any];
  
      if (rows.length === 0) {
        return new Response(JSON.stringify({ success: false, message: 'User not found' }), { status: 401 });
      }
  
      const user = rows[0];
      const match = await bcrypt.compare(password, user.password); // Compare provided password with stored hash
 // Replace with actual password check
  
      if (!match) {
        return new Response(JSON.stringify({ success: false, message: 'Incorrect password' }), { status: 401 });
      }
  
      return new Response(JSON.stringify({ success: true, message: 'Logged in!' }));
    } catch (error) {
      console.error('Login error:', error); // Logg feilen
      return new Response(JSON.stringify({ success: false, message: 'Server error', error: error.message }), { status: 500 });
    }
  };

import mysql from 'mysql2/promise';

async function getDb() {
    const connection = await mysql.createPool({
        host: 'localhost', // Replace with your database host
        user: 'root',      // Replace with your database user
        password: 'password', // Replace with your database password
        database: 'vin_nettside' // Replace with your database name
    });
    return connection;
}
