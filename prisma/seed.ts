import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  const passwordHash = hashSync(adminPassword, 10);

  await prisma.admin.upsert({
    where: { username: "admin" },
    update: {},
    create: { username: "admin", passwordHash },
  });

  console.log("Admin user created/updated");

  const products = [
    { name: "HP Pavilion Laptop", category: "Laptops", price: "Starting ₹45,000", description: "Powerful performance for everyday computing with HP Pavilion series.", specs: ["Intel Core i5/i7", "8GB/16GB RAM", "512GB SSD", "15.6\" FHD Display"], badge: "Best Seller" },
    { name: "Dell Inspiron Desktop", category: "Desktops", price: "Starting ₹35,000", description: "Reliable desktop solutions for home and office use.", specs: ["Intel Core i3/i5", "8GB RAM", "1TB HDD + 256GB SSD", "Windows 11"], badge: "Popular" },
    { name: "Custom Gaming PC", category: "Gaming Systems", price: "Starting ₹85,000", description: "High-performance custom gaming builds with premium components.", specs: ["Intel Core i7/i9 or AMD Ryzen", "16GB/32GB RAM", "RTX 4060/4070", "1TB NVMe SSD"], badge: "Premium" },
    { name: "HP LaserJet Printer", category: "Printers", price: "Starting ₹12,000", description: "Fast and efficient laser printing for offices and businesses.", specs: ["Print Speed: 28ppm", "Auto Duplex", "WiFi & USB", "HP Smart App"], badge: null },
    { name: "TP-Link Router", category: "Networking Equipment", price: "Starting ₹2,500", description: "High-speed wireless routers for seamless connectivity.", specs: ["Dual Band WiFi 6", "Up to 1500 Mbps", "4 x LAN Ports", "Easy Setup"], badge: null },
    { name: "Samsung 1TB SSD", category: "SSDs & Storage", price: "Starting ₹6,500", description: "Lightning-fast storage upgrade for your computer.", specs: ["1TB Capacity", "560 MB/s Read", "530 MB/s Write", "SATA III"], badge: "Fast" },
    { name: "Corsair 16GB RAM", category: "RAM & Components", price: "Starting ₹4,500", description: "Premium memory modules for enhanced multitasking.", specs: ["16GB DDR4", "3200MHz Speed", "Low Profile", "Heat Spreader"], badge: null },
    { name: "LG 24\" Monitor", category: "Monitors", price: "Starting ₹12,000", description: "Crystal-clear display for work and entertainment.", specs: ["24-inch IPS Panel", "Full HD 1080p", "75Hz Refresh Rate", "HDMI + VGA"], badge: null },
    { name: "Hikvision CCTV Kit", category: "CCTV Products", price: "Starting ₹8,000", description: "Complete security solution with professional installation.", specs: ["4 Camera Kit", "2MP Full HD", "Night Vision", "Mobile Viewing"], badge: "Installed" },
    { name: "Logitech Keyboard & Mouse", category: "Computer Accessories", price: "Starting ₹1,200", description: "Ergonomic peripherals for comfortable daily use.", specs: ["Wireless Combo", "Full Size Keyboard", "1000 DPI Mouse", "Plug & Play"], badge: null },
    { name: "Lenovo ThinkPad", category: "Laptops", price: "Starting ₹55,000", description: "Business-class laptop built for reliability and performance.", specs: ["Intel Core i5/i7", "8GB/16GB RAM", "512GB SSD", "14\" FHD Anti-glare"], badge: "Business" },
    { name: "Dell 27\" Monitor", category: "Monitors", price: "Starting ₹18,000", description: "Large-screen monitor for productivity and multitasking.", specs: ["27-inch IPS", "QHD 1440p", "75Hz Refresh", "USB-C Hub"], badge: null },
  ];

  for (const product of products) {
    const existing = await prisma.product.findFirst({ where: { name: product.name } });
    if (!existing) {
      await prisma.product.create({ data: product });
    }
  }

  console.log("Products seeded");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
