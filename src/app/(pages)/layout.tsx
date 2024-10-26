import "./../globals.css";
import { ReactNode } from "react";
import PageLayout from "@/layout/PageLayout";

/**
 * Props
 */
type Props = {
  children: ReactNode;
};

/**
* Functional component for Layout - MainLayout
* @param param0 
* @returns 
*/
export default function Layout({ children }: Props) {
  return (
      <PageLayout>
          {children}
      </PageLayout>
  )
} 