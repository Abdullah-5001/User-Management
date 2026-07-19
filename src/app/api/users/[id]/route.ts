import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(
    { response: user, message: "User found" },
    {
      status: 200,
    },
  );
};

export const PUT = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const body = await request.json();
    const { id } = await params;
    const updatedData = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: body,
    });
    return NextResponse.json(
      {
        data: updatedData,
        message: "You record has been updated successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      },
    );
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({
    status: 204,
  });
};
