import { Metadata } from "next";

const companyUrl = "https://yengineering.io"
/**
 * Function to generate the metadata for the website pages
 * @param openGraphTitle 
 * @returns 
 */
export const GetMetadata = (openGraphTitle: string, pageLocation: string, keywords: string[]): Metadata => {
    const metadata: Metadata = {
        title: `Y Engineering - ${pageLocation}`,
        description: "Discover how Y Engineering can propel your biomedical projects forward.",
        icons: `${companyUrl}/favicon.ico`,
        applicationName: "Y Engineering Landing Page",
        keywords: [
          ...keywords,
          "Y Engineering",
          "Biomedical Engineering",
          "Innovation",
          "Empowering Innovation",
          "Engineering Impact",
          "Biomedical Projects",
          "Health",
          "Technology",
          "Silicon Valley",
        ],
        authors: [{ name: "Ramsés Ramírez Vallejo", url: "https://ramsesramva.com" }],
        generator: "Next.js",
        referrer: "origin",
        metadataBase: new URL(companyUrl),
        openGraph: {
          type: "website",
          url: companyUrl,
          title: openGraphTitle,
          description: "At Y Engineering, we prioritize solutions over setbacks. While many firms may focus on the hurdles, we dedicate our efforts to overcoming them.",
          siteName: "Y Engineering",
          images: [
            { url: `${companyUrl}/img/footerIcon.webp`, alt: "Y Engineering Logo" },
            { url: `${companyUrl}/img/home/aboutCardImg.webp`, alt: "Y Engineering Team" },
            { url: `${companyUrl}/img/home/reviewsCardImg.webp`, alt: "Y Engineering Team Worker at the Lab" }
          ],
        },
      };
    return metadata;
}