import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Features | IEEE BIT",
  description: "Features of the club",
};

const FeaturesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Features Page" />

      <Features />
    </>
  );
};

export default FeaturesPage;