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
