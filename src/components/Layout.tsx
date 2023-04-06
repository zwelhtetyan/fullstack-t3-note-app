import { useSession } from "next-auth/react";
import { ChildrenProp } from "~/types";
import Spinner from "./Spinner";

const Layout = ({ children }: ChildrenProp) => {
  const { data: sessionData, status } = useSession();

  if (status.toString() === "loading") {
    return <Spinner classes="mt-60" />;
  }

  if (!sessionData?.user) {
    return (
      <div className="flex min-h-[calc(100vh-66px)] w-full justify-center pt-60">
        You must login to take note.
      </div>
    );
  }

  return (
    <div className="mx-auto grid min-h-[calc(100vh-66px)] max-w-7xl grid-cols-3">
      {children}
    </div>
  );
};

export default Layout;
