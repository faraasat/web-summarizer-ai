import { ThemeProvider } from "@/contexts/ThemeContext";
import Footer from "./footer";
import Navbar from "./navbar";

const _Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default _Layout;
