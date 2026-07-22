import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://accredian.com"),
  title: {
    default: "Accredian — Enterprise Learning Platform | IIT & IIM Certified Programs",
    template: "%s | Accredian",
  },
  description:
    "India's leading enterprise learning platform. Upskill your workforce with IIT, IIM, XLRI & SP Jain certified programs in AI, Data Science, Product Management & Leadership. 10,000+ professionals trained.",
  keywords: [
    "enterprise learning platform",
    "corporate training India",
    "IIT IIM certification programs",
    "AI ML courses India",
    "data science certification",
    "product management program",
    "leadership development",
    "workforce upskilling",
    "CAT framework",
    "online professional certification",
    "XLRI executive program",
  ],
  authors: [{ name: "Accredian" }],
  creator: "Accredian",
  publisher: "Accredian",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://accredian.com",
    siteName: "Accredian",
    title: "Accredian — Enterprise Learning Platform | IIT & IIM Certified Programs",
    description:
      "India's leading enterprise learning platform. Upskill your workforce with IIT, IIM & XLRI certified programs. 10,000+ professionals trained.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@accredianedu",
    creator: "@accredianedu",
    title: "Accredian — Enterprise Learning Platform",
    description:
      "India's leading enterprise learning platform. IIT, IIM & XLRI certified programs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://accredian.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Accredian",
  url: "https://accredian.com",
  logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp",
  description:
    "India's leading enterprise learning platform offering IIT, IIM, XLRI certified professional programs.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, Plot No. 250, Udyog Vihar, Phase IV",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122015",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/accredianedu/",
    "https://twitter.com/accredianedu",
    "https://www.instagram.com/accredian_edu",
    "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
  ],
  numberOfStudents: {
    "@type": "QuantitativeValue",
    value: 10000,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
