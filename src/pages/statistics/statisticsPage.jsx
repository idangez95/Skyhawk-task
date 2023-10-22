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
      <h1 className={styles.pageHeader}>Countries Pie Chart</h1>
      <div className={styles.chart}>
        <Pie
          data={chartData}
          options={{
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  padding: 50,
                  color: '#fff',
                  font: {
                    size: 20,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
