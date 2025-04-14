import { useEffect } from 'react';
import { useNavbar } from '@/components/NavBarTop/NavBarContext';
import { PieChartComponent } from '@/app-pages/dashboard/piechart'; // Adjust path as needed
import { CompactBarChart } from './barchart';
import { AreaChartComponent } from './areachart'; // Adjust path as needed
import { RadarComponent } from './raderchart';
import { BigChartExample } from './bigchart';
import { TableInfo } from './tablesinfo';

const Dashboard = () => {
  const { setNavbarTitle } = useNavbar();

  useEffect(() => {
    setNavbarTitle("Dashboard");
  }, [setNavbarTitle]);

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 bg-gray-50 p-3">
      <div className="p-2 rounded-lg">
        <CompactBarChart />
      </div>

      {/* Chart inside this grid box */}
      <div className="p-1 rounded-lg">
        <PieChartComponent />
      </div>

      {/* Area Chart inside this grid box */}
      <div className="col-start-1 row-start-2 p-1 rounded-lg">
        <AreaChartComponent /> {/* Add your desired chart here */}
      </div>

      {/* Radar Chart inside this grid box */}
      <div className="col-start-2 row-start-2 p-1 rounded-lg">
        <RadarComponent />
      </div>

      {/* Placeholder cards */}
      <div className="col-span-3 row-span-2 col-start-3 row-start-1 p-4 rounded-lg">
        <BigChartExample  /> {/* Ensure it takes up the full space */}
      </div>

      <div className="col-span-5 row-span-3 row-start-3 p-4 rounded-lg">
        <TableInfo /> {/* Ensure it takes up the full space */}
      </div>
    </div>
  )
};

export default Dashboard;
