import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/global/theme";
import { ThemeProvider } from "@mui/material/styles";
import toast, { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Aya Ahmed Portfolio",
  description:
    "Full-stack Engineer, graduated from Cairo university faculty of Engineering , computer department",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>
            <Toaster
            toastOptions={{
              duration: 3000, // 3 seconds
              style: {
                fontSize:'1.8rem'
              },
            }}
            position="top-center" reverseOrder={false} />
            <NavBar />

            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
