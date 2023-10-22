import { useRecoilValue } from 'recoil';
import styles from './statistics.module.css';
import Chart from 'chart.js/auto';
import { usersDataState } from '../../state/atoms/userDataState';
import { Pie } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { useState, useEffect } from 'react';
import { generateRandomColors, quantifyPeopleByCountry } from './utils'; // Import utility functions from utils.js
import { useStatisticsPageServices } from './statisticsPage.services';

Chart.register(CategoryScale);

const StatisticsPage = () => {
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
          }}
        />
      </div>
    </div>
  );
};

export default StatisticsPage;

// legend: {
//   labels: {
//     fontSize: 50,
//   },
// },
