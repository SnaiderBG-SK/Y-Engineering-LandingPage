import { HeroPageCard } from "@/components/card/HeroPageCard";
import { MainFooter } from "@/components/footer/MainFooter";
import ImgBackground from "@/components/general/ImgBackground";
import dynamic from "next/dynamic";
import Head from "next/head";
const MainNavbar = dynamic(() => import("@/components/navbar/MainNavbar"), { ssr: false });
/**
 * PageLayoutProps
 */
interface PageLayoutProps {
  children?: React.ReactNode;
}
/**
 * Functional component for PageLayout
 * @param param0
 * @returns
 */
const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preload" href="/img/home/hero/1.webp" fetchPriority="high" as="image" />
      </Head>
      <ImgBackground 
        imgSrc="/img/home/hero/1.webp"
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          className="h-full w-full"
        >
          {/* Navbar */}
          <MainNavbar className="mb-20" />
          <HeroPageCard />
        </div>
      </ImgBackground>
      {children}
      {/* Footer */}
      <MainFooter />
    </>
  );
};

export default PageLayout;
