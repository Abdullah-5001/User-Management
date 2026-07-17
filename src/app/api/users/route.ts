import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        age: body.age,
      },
    });
    return NextResponse.json(
      {
        data: user,
        message: "User has been Created Successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { response: error },
      {
        status: 500,
      },
    );
  }
};

export const getUsers = async () => {
  const data = await prisma.user.findMany();
  return NextResponse.json(
    { response: data, message: "All Users has been fetched Successfully" },
    {
      status: 200,
    },
  );
};
