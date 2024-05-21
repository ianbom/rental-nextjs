import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { error } from "console";
import * as z from 'zod';


// DEfine a schema user

const userSchema = z.object({ 
    username: z.string().min(1, 'username required').max(100), 
    email: z.string().email(), 
    password: z.string().min(8, 'password required 8 character').max(100), 
})

export async function POST(req: Request) {
  try {
    const requestData = await req.json().catch((error) => { 
        console.error("Error parsing JSON data:", error);
        return NextResponse.json(
            { user: null, message: "Invalid JSON data" },
            { status: 400 }); 
    });

    // Validasi data yang diterima
    if (!requestData || typeof requestData !== "object" || Array.isArray(requestData)) {
      return NextResponse.json(
        { user: null, message: "Invalid request data" },
        { status: 400 }
      );
    }

    const { email, username, password } = userSchema.parse(requestData);

    // Validasi data yang diperlukan
    if (!email || !username || !password) {
      return NextResponse.json(
        { user: null, message: "Email, username, and password are required" },
        { status: 400 }
      );
    }

    const existingUserByEmail = await db.user.findUnique({ where: { email } });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Email already exists" },
        { status: 409 }
      );
    }

    const existingUserByUsername = await db.user.findUnique({ where: { username } });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "Username already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 6);
    const newUser = await db.user.create({
      data: { username, email, password: hashedPassword },
    });

    const { password: newUserPassword, ...rest} = newUser;

    return NextResponse.json(
      { user: rest, message: "User successfully created" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { user: null, message: "An error occurred" },
      { status: 500 }
    );
  }
}

