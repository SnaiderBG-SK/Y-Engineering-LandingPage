import "./globals.css";
import { ReactNode } from "react";
import MainLayout from "@/layout/MainLayout";
import { ViewTransitions } from 'next-view-transitions';

/**
 * Props
 */
type Props = {
  children: ReactNode;
  params: { 
    locale: "en" | "es_MX" 
  };
};

/**
* Functional component for Layout - MainLayout
* @param param0 
* @returns 
*/
export default function Layout({ children, params }: Props) {
  return (
    <ViewTransitions>
        <MainLayout locale={params.locale}>
            {children}
        </MainLayout>
    </ViewTransitions>
  )
} 