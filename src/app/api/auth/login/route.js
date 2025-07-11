/*import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/utils/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id , firstName: user.firstName , middleName: user.middleName , lastName: user.lastName, email: user.email , }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}*/

// app/api/auth/login.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/utils/db";
import User from "@/models/User";


export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    // Check if JWT secret is set
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT Secret is missing");
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        userId: user._id,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  } catch (error) {
    console.error("Authentication Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
