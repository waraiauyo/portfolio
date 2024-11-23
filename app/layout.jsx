import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import MainWrapper from "@/components/wrappers/main-wrapper";
import Navbar from "@/components/navigation/navbar";
import ThemeToggle from "@/components/theme/theme-toggle";
import Breadcrumb from "@/components/navigation/breadcrumb";
import Disclaimer from "@/components/dialogs/disclaimer";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
    title: "Portfolio - Valentin Arnould",
    description: "Portfolio de Valentin ARNOULD, étudiant en 2ème de BUT MMI.",
};

export default function RootLayout({ children }){
    return (
        <html lang="fr">
            <body>
                <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                >
                    <MainWrapper>
                        <Navbar/>
                        <Breadcrumb/>
                        {children}
                        <ThemeToggle/>
                        <Disclaimer/>
                        <Toaster/>
                    </MainWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
