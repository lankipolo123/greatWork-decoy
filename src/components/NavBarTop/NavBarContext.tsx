import  { createContext, useContext, useState } from 'react';

const NavbarContext = createContext<any>(null);

export const NavbarProvider = ({ children }: any) => {
  const [navbarTitle, setNavbarTitle] = useState('Dashboard'); // Default title

  return (
    <NavbarContext.Provider value={{ navbarTitle, setNavbarTitle }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
