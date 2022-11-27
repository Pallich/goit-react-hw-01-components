import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';
import './Profile/profile.css';
import './Statistics/statistics.css';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={data} />
    </>
  );
};
