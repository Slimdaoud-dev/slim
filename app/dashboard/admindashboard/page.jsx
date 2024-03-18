
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';
import Widget from '../../../components/widget/Widget';
import DailyTraffic from './components/DailyTraffic';
import WeeklyRevenue from './components/WeeklyRevenue';
import TotalSpent from './components/TotalSpent';
import PieChartCard from './components/PieChartCard';



const DashboardPage = () => {
  return (
    <>
      {/* Card widget */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget icon={<MdBarChart className="h-7 w-7" />} title={'Total Doctors'} subtitle={'30'} />
        <Widget icon={<IoDocuments className="h-6 w-6" />} title={'Total Patient'} subtitle={'100'} />
        <Widget icon={<MdBarChart className="h-7 w-7" />} title={'New Patient'} subtitle={'+50'} />
        <Widget icon={<MdDashboard className="h-6 w-6" />} title={'Hospital Eearning'} subtitle={'$340.5'} />
        <Widget icon={<MdBarChart className="h-7 w-7" />} title={'Departement'} subtitle={'10'} />
        <Widget icon={<IoMdHome className="h-6 w-6" />} title={'Total '} subtitle={'$2433'} />
      </div>

      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Traffic chart & Pie Chart */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
          
        </div>
      </div>
      
    </>
  );
};

export default DashboardPage;
