import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;
