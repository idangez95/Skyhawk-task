import styles from './statistics.module.css';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { useStatisticsPageServices } from './statisticsPage.services';

Chart.register(CategoryScale);

export const StatisticsPage = () => {
  const { chartData } = useStatisticsPageServices();

  return (
    <div className={styles.pageRoot}>
      <h2 className={styles.pageHeader}>Countries Pie Chart</h2>
      <div style={{ width: 800, height: 800 }}>
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Legends',
              },
            },
            responsive: true,
          }}
        />
      </div>
    </div>
  );
};
