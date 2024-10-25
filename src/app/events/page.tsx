import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import ToggleableDemo from "@/components/Toggledemo/Toggledemo";

export const metadata: Metadata = {
  title:
    "Events | IEEE BIT",
  description: "Events held by the IEEE student branch at Bangalore Institute of Technology",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Events Page" />
      <ToggleableDemo />

    </>
  );
};

export default PricingPage;
