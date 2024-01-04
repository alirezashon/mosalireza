import { useState, useEffect } from 'react';
import MobileNav from './Mobile';
import DesktopNav from './PC';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 777) {
      setIsMobile(true)
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 777);
    };

    handleResize(); // set initial state based on window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav style={{ marginBottom: `${isMobile && '9vh' }`}}>
      {isMobile ? <MobileNav  /> : <DesktopNav />}
    </nav>
  );
};

export default Navbar;