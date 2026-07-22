import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        },
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        { message: "User Already exists with this email" },
        {
          status: 409,
        },
      );
    }
    const genSalt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, genSalt);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return NextResponse.json(
      {
        message: "User registered Successfully",
        data: user,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Internal server occur ${error}` },
      {
        status: 500,
      },
    );
  }
};
