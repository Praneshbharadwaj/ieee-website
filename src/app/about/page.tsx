import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | IEEE BIT",
  description: "About the team members of IEEE student branch at Bangalore Institute of Technology",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />

      <Team />
    </main>
  );
};

export default AboutPage;
