import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, product, category, message, source } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        phone,
        email: email || null,
        product: product || null,
        category: category || null,
        message: message || null,
        source: source || "contact",
      },
    });

    const whatsappMessage = encodeURIComponent(
      `New Enquiry from ${source || "website"}:\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "N/A"}\nProduct: ${product || "N/A"}\nCategory: ${category || "N/A"}\nMessage: ${message || "N/A"}`
    );
    const whatsappUrl = `https://wa.me/918050773494?text=${whatsappMessage}`;

    return NextResponse.json({ success: true, id: enquiry.id, whatsappUrl });
  } catch {
    return NextResponse.json({ error: "Failed to save enquiry" }, { status: 500 });
  }
}
