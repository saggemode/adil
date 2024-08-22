import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    const product = await prisma.brand.create({
      data: {
        name,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[Category]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
