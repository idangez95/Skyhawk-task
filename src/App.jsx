import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navBar';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { usersDataState } from './state/atoms/userDataState';
import { UsersPage } from './pages/users/UsersPage/UsersPage';
import { HashLoader } from 'react-spinners';
import initialUsersData from './data/initialUsersData.json';
import { StatisticsPage } from './pages/statistics/StatisticsPage';
import { Box } from '@mui/material';

function App() {
  const [userData, setUsersData] = useRecoilState(usersDataState);

  useEffect(() => {
    const storedData = localStorage.getItem('user_data');
    if (storedData) {
      setUsersData(JSON.parse(storedData));
    } else {
      setUsersData(initialUsersData);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      {userData.length === 0 ? (
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          height={`calc(100vh - 150px)`}
        >
          <HashLoader color="#36d7b7" />
        </Box>
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
