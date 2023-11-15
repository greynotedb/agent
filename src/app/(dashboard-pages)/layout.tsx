import { FC } from 'react'
import SidebarNav from '@/components/navigation/SidebarNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({children}) => {
  return <SidebarNav>{children}</SidebarNav>;
}

export default DashboardLayout