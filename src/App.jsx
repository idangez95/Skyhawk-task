import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import { StatisticsPage } from './pages/statistics/statisticsPage';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { usersDataState } from './state/atoms/userDataState';
import initialUsersData from './data/initialUsersData.json';
import { UsersPage } from './pages/users/UsersPage/UsersPage';
import { HashLoader } from 'react-spinners';

function App() {
  const [userData, setUsersData] = useRecoilState(usersDataState);

  useEffect(() => {
    const loadData = async () => {
      setUsersData(initialUsersData);
    };
    loadData();
  }, [setUsersData]);

  return (
    <BrowserRouter>
      <NavBar />
      {userData.length === 0 ? ( // Check if userData is an empty array
        <div style={{ margin: 'auto' }}>
          <HashLoader color="#36d7b7" />
        </div>
      ) : (
        <Routes>
          <Route path="/" exact element={<StatisticsPage />} />
          <Route path="users" element={<UsersPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
