import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Homepage from './homepage/page';
// import ForEducators from './header/forstudents';
// import ForEducators from './ForEducators';
import MeetTeam from './curriculum/meetTeam';

import ForEducators from './forEducators';
import Northeastern from './Curricula/northeastern/Northeastern';
// import Meetthecurriculateam from "./meetthecurriculateam.js";
const App = () => (
    <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/curricula" element={<Northeastern />} />

        {/* <Route path="firstbyte-website-master/src/homepage/header/foreducators.html" element={<ForEducators/>} />   */}
        {/* <Route path="/team" element={<Homepage />} />
        
        <Route path="/curricula" element={<Homepage />} />*/
        <Route path="/for-educators" element={<ForEducators />} />}
        {/* <Route path="/meetthecurriculateam" element={<Meetthecurriculateam />} /> */
                <Route path="/meetTeam" element={<MeetTeam />} />    
        }{   

}

        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);





export default App;
