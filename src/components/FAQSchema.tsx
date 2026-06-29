const faqData = [
  {
    question: "What products does Sancheti Computers sell?",
    answer: "We sell laptops, desktops, gaming PCs, printers, monitors, SSDs, networking equipment, CCTV cameras, and computer accessories from top brands like HP, Dell, Lenovo, Acer, ASUS, and more.",
  },
  {
    question: "Does Sancheti Computers provide IT services?",
    answer: "Yes, we provide computer repair, laptop servicing, networking solutions, CCTV installation, IT infrastructure setup, Wi-Fi setup, and annual maintenance contracts (AMC) for homes and businesses.",
  },
  {
    question: "Where is Sancheti Computers located?",
    answer: "We are located on SP Road, Bengaluru, Karnataka — one of the most trusted IT hardware hubs in the city. Our store has been serving customers since 2012.",
  },
  {
    question: "Does Sancheti Computers supply to businesses and government (GEM)?",
    answer: "Yes, we serve B2B clients, corporate buyers, and government agencies through the Government e-Marketplace (GEM). We offer bulk pricing and enterprise procurement solutions.",
  },
  {
    question: "How can I get a quote for bulk orders?",
    answer: "You can request a free quote through our website at /quote, call us at +91 80507 73494, or WhatsApp us with your requirements. We respond within 24 hours.",
  },
  {
    question: "What brands does Sancheti Computers deal in?",
    answer: "We are authorized dealers for HP, Dell, Lenovo, Acer, ASUS, Samsung, Western Digital, Logitech, D-Link, TP-Link, and many more leading IT brands.",
  },
];

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
