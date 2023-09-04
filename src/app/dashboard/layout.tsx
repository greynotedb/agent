'use client'
import React, { ReactNode } from 'react';
import SidebarNav from '@/components/navigation/SidebarNav';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Your layout content */}
      <SidebarNav>
      {children}
      </SidebarNav>
    </div>
  );
};

export default Layout;