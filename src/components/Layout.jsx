import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
import { ToastContainer, toast } from "react-toastify";

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px" }}>
      <ToastContainer />
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
