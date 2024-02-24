import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel'
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
