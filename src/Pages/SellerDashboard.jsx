/* eslint-disable no-unused-vars */
import ImageAdd from '../Components/Seller/ImageAdd';
import DashboardSidebar from './../Components/DashboardSidebar';
import DashboardHeader from '../Components/DashboardHeader';

const SellerDashboard = () => {
  return (
    <>
    <div className='flex items:center flex-row'>
      <DashboardSidebar />
      <div className='flex flex-col'>
      <DashboardHeader />
      <ImageAdd />
      </div>
      </div>
    </>
  )
}

export default SellerDashboard
