import React from 'react';
import { Link, Outlet, Routes, Route } from 'react-router-dom';

import UserProfile from './UserProfile';
import CheckinList from './CheckinList';
import ProgressGraph from './ProgressGraph';

function MainContent() {
  return (
    <div>
      <nav>
        <Link to="/content/profile">Profile</Link>
        <span> | </span>
        <Link to="/content/checkins">Check-ins</Link>
        <span> | </span>
        <Link to="/content/progress">Progress</Link>
      </nav>

      <Routes>
        <Route path="profile" element={<UserProfile />} />
        <Route path="checkins/*" element={<CheckinList />} />
        <Route path="progress" element={<ProgressGraph />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default MainContent;
