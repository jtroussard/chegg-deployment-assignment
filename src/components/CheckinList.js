import React from 'react';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import CheckinForm from './CheckinForm';

function CheckinList() {
  return (
    <div>
      <h2>Check-ins</h2>
      <Link to={`create`}>Create New Check-in</Link>

      <ul>
        <li><Link to={`edit/1`}>Checkin 1</Link></li>
        <li><Link to={`edit/2`}>Checkin 2</Link></li>
      </ul>

      <Routes>
        <Route path={`create`} element={<CheckinForm />} />
        <Route path={`edit/:id`} element={<CheckinForm />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default CheckinList;
