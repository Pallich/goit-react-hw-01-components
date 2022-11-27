import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

import './Profile/profile.css';
import './Statistics/statistics.css';
import './FriendListItem/FriendListItem.css';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
