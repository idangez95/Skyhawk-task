import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import StatisticsPage from './pages/statistics/StatisticsPage';
import UsersPage from './pages/users/UsersPage';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { usersDataState } from './state/atoms/userDataState';
import initialUsersData from './data/initialUsersData.json';

function App() {
  const setUsersData = useSetRecoilState(usersDataState);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      // You can load data from an API here if needed
      setUsersData(initialUsersData);
    };
    loadData();
  }, [setUsersData]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<StatisticsPage />} />
        <Route path="users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
