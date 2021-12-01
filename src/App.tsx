import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import EditUser from './User/EditUser';
import UserInfo from './User/UserInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<About />} />
          <Route path="user/edit" element={<EditUser />} />
          <Route path="user" element={<UserInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
