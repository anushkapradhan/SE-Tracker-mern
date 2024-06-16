import React from 'react'
import { Link } from 'react-router-dom'
import useStore from '../redux/index.js'
import NavBar from '../components/trackerDashboardComponents/NavBar';
import Info from '../components/trackerDashboardComponents/Info';
import Stats from '../components/trackerDashboardComponents/Stats';
import Chart from '../components/trackerDashboardComponents/Chart';
import DoughnutChart from '../components/trackerDashboardComponents/DoughnutChart';
import Transactions from '../components/trackerDashboardComponents/Transactions';
import Accounts from '../components/trackerDashboardComponents/Accounts';


export default function TrackerDashboard
() {
  const theme = useStore((state) => state.theme);
  return (
    <main className={theme}>
      <div className='w-full px-6 md:px-6 bg-white dark:bg-slate-900 rounded'>
       <NavBar />
       <div className='px-0 md:px-5 2xl:px-20'>
        <Info title='Dashboard' subTitle='Monitor your financial activities' />
        <Stats />

        <div className='w-full flex flex-col-reverse md:flex-row items-center gap-10'>
          <Chart />
          <DoughnutChart />
        </div>

        <div className='flex flex-col-reverse md:flex-row gap-0 md:gap-10 2xl:gap-20'>
          <Transactions />
          <Accounts />
        </div>
       </div>
      </div>
      <div className=''>
       <Link to={'/'}>Go Home</Link>
     </div>
    </main>
  )
}
