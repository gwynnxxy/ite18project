import React from 'react';
import CustomNav from '../CustomNav/customnavindex';
import { userData } from '../../helpers';

const Home = () => {
    const {username} = userData()
  return (
    <div className="home">
        <CustomNav />
        <div>
            <h2>{username}</h2>
        </div>
    </div>
  );
};

export default Home;