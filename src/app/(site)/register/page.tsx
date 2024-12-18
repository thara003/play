import Breadcrumb from "@/components/Common/Breadcrumb";
import Register from "@/components/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Register",
  description: "This is contact page description",
};

const RegisterPage = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Register" /> */}

      <Register />
    </>
  );
};

export default RegisterPage;
