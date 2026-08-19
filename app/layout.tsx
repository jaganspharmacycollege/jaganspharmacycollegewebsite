import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
//import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import PreFooter from "@/components/layout/PreFooter";
import Footer from "@/components/layout/Footer";

// Load Google Sora Font
const sora = Sora({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-sora",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Jagan's College of Pharmacy",
    description: "Approved by PCI & Affiliated to JNTUA",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sora.variable}>
            <body className="antialiased bg-[#FAF8F5] min-h-screen flex flex-col justify-between">
                <div>
                    {/* <TopBar /> */}
                    <Header />
                    <main>{children}</main>
                </div>
                <div>
                    <PreFooter />
                    <Footer />
                </div>
            </body>
        </html>
    );
}