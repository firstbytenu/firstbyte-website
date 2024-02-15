import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Homepage from './homepage/page';
import MeetTeam from './meetTeam/meetTeam';
import Northeastern from './Curricula/northeastern/Northeastern.js';
/*import Harbor from './Curricula/camp harbor/Harbor.js';
import Stephens from './Curricula/st. stephens/Stephens.js'; */


const App = () => (
    <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/meetTeam" element={<MeetTeam />} />
        <Route path="/northeastern" element={<Northeastern />} /> 
        {/* <Route path="/harbor" element={<Harbor />} />
        <Route path="/stephens" element={<Stephens />} /> */}

        {/* <Route path="/team" element={<Homepage />} />
        <Route path="/curricula" element={<Homepage />} />
        <Route path="/for-educators" element={<Homepage />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default App;
