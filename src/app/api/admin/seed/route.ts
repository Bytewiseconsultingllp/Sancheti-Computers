import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashSync } from "bcryptjs";

export async function POST() {
  try {
    const admin = await prisma.admin.findUnique({ where: { username: "admin" } });
    if (admin) {
      return NextResponse.json({ message: "Admin already exists" });
    }

    const password = process.env.ADMIN_PASSWORD || "admin123";
    const passwordHash = hashSync(password, 10);

    await prisma.admin.create({
      data: { username: "admin", passwordHash },
    });

    return NextResponse.json({ success: true, message: "Admin user created" });
  } catch {
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}
