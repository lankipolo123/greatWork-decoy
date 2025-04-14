import  { useEffect } from 'react';
import { useNavbar } from '@/components/NavBarTop/NavBarContext';

const PaymentPage = () => {
  const { setNavbarTitle } = useNavbar(); // Get the function to set the title

  useEffect(() => {
    setNavbarTitle("Payment"); // Set dynamic title on page load
  }, [setNavbarTitle]);

  return (
    <div className="bg-gray-50">
      <>test</>
    </div>
  );
};

export default PaymentPage;
