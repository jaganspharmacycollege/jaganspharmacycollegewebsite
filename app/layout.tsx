import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import PreFooter from "@/components/layout/PreFooter";
import Footer from "@/components/layout/Footer";

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
        <html lang="en">
            <body className="antialiased bg-[#FAF8F5] min-h-screen flex flex-col justify-between">
                <div>
                    <TopBar />
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