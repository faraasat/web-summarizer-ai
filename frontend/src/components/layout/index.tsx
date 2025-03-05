import { Toaster } from "../ui/sonner";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import Footer from "./footer";
import Navbar from "./navbar";
import { themeList } from "@/data/theme";

const _Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextThemeProvider
        attribute="class"
        defaultTheme="classic"
        themes={themeList}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </NextThemeProvider>
      <Toaster />
    </>
  );
};

export default _Layout;
