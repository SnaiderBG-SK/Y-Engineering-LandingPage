"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Functional component for HeroPageCard
 * @returns 
 */
export const HeroPageCard: React.FC = () => {
  //#region variables
  const pathname = usePathname();
  const [heroTitle, setHeroTitle] = useState<string>("");

  //#region functions
  /**
   * Function to remove the locale from the pathname
   * @param pathname
   */
  const formatPathname = (pathname: string) => {
    return pathname.substring(1)
  };
  /**
   * Function to get the hero text
   * @param pathname
   * @param locale
   */
  const getHeroTitle = (pathname: string) => {
    switch (pathname) {
      case "about-us":
        setHeroTitle('About Us');
        break;
      case "contact-us":
        setHeroTitle('Contact Us');
        break;
      case "portfolio":
        setHeroTitle('Portfolio');
        break;
      default:
        if (pathname.includes("services")) {
          setHeroTitle('Services');
        }
        return "404 Not Found";
    }
  };
  //   switch (pathname) {
  //     case "about-us":
  //       return (
  //         <>
  //           <Link href={`/`}>
  //             <span className="text-white font-semibold mr-5">
  //               {'Home'}
  //             </span>
  //           </Link>
  //           <span>
  //             <i className="fa-solid fa-chevron-right text-secondary-color mr-5"></i>
  //           </span>
  //           <span className="text-white font-semibold mr-5">
  //             {'About Us'}
  //           </span>
  //         </>
  //       );
  //     case "contact-us":
  //       return (
  //         <>
  //           <Link href={`/`}>
  //             <span className="text-white font-semibold mr-5">
  //               {'Home'}
  //             </span>
  //           </Link>
  //           <span>
  //             <i className="fa-solid fa-chevron-right text-secondary-color mr-5"></i>
  //           </span>
  //           <span className="text-white font-semibold mr-5">
  //             {'Contact Us'}
  //           </span>
  //         </>
  //       );
  //     case "portfolio":
  //       return (
  //         <>
  //           <Link href={`/`}>
  //             <span className="text-white font-semibold mr-5">
  //               {'Home'}
  //             </span>
  //           </Link>
  //           <span>
  //             <i className="fa-solid fa-chevron-right text-secondary-color mr-5"></i>
  //           </span>
  //           <span className="text-white font-semibold mr-5">
  //             {'Services'}
  //           </span>
  //         </>
  //       );
  //     default:
  //       if (pathname.includes("services")) {
  //         return (
  //           <>
  //             <Link href={`/`}>
  //               <span className="text-white font-semibold mr-5">
  //                 {'Home'}
  //               </span>
  //             </Link>
  //             <span>
  //               <i className="fa-solid fa-chevron-right text-secondary-color mr-5"></i>
  //             </span>
  //             <span className="text-white font-semibold mr-5">
  //               {'Services'}
  //             </span>
  //             <span>
  //               <i className="fa-solid fa-chevron-right text-secondary-color mr-5"></i>
  //             </span>
  //             <span className="text-white font-semibold mr-5">
  //               {handleShowServiceName(pathname.split("/")[1])}
  //             </span>
  //           </>
  //         )
  //       };
  //       return "404 Not Found";
  //   }
  // };

  useEffect(() => {
    getHeroTitle(formatPathname(pathname) || "");
  }, [pathname, heroTitle]);
  //#endregion functions
  return (
    <>
      {/* Page Title */}
      <div className="text-center">
        <span className="text-white text-4xl font-bold">{heroTitle}</span>
      </div>
    </>
  );
};
