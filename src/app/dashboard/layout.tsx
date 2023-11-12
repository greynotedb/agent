import { FC } from "react";
import SidebarNav from "@/components/navigation/SidebarNav";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return <SidebarNav>{children}</SidebarNav>;
};

export default layout;
