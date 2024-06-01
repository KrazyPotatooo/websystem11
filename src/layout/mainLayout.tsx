import React from 'react';
import { ReactNode } from 'react';
import Header from '@/components/navbar';
import '../app/globals.css';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="w-1/2 flex min-h-96 items-center">
        {children}
      </div>
    </main>
  );
};

export default Main;
