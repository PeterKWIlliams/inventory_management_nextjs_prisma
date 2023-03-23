import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import Sidebar from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="relative min-h-screen">
      <Sidebar />
      <div className={`${isLargeScreen ? 'ml-64' : 'ml-0'} p-4`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
