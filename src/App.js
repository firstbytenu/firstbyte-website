import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Homepage from './homepage/page';
// import ForEducators from './header/forstudents';
// import ForEducators from './ForEducators';
import ForEducators from './forEducators';

const App = () => (
    <Routes>
        <Route path="/" element={<Homepage />} />  
        {/* <Route path="firstbyte-website-master/src/homepage/header/foreducators.html" element={<ForEducators/>} />   */}
        {/* <Route path="/team" element={<Homepage />} />
        <Route path="/curricula" element={<Homepage />} />*/
        <Route path="/for-educators" element={<ForEducators />} />}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default App;
