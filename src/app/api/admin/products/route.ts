import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

async function checkAuth(req: NextRequest) {
  const token = req.cookies.get("admin-token")?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function GET(req: NextRequest) {
  const auth = await checkAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ products });
  } catch {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const auth = await checkAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const { name, category, price, description, specs, badge, image } = body;

    if (!name || !category || !price) {
      return NextResponse.json({ error: "Name, category, and price are required" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        category,
        price,
        description: description || "",
        specs: specs || [],
        badge: badge || null,
        image: image || null,
      },
    });

    return NextResponse.json({ success: true, product });
  } catch {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
