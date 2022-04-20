import React from 'react';
import Home5 from '../../Components/ClassComponent/Home5';
import User from '../../Components/ClassComponent/User';
import Userinput from '../../Components/ClassComponent/UserInput';
import HomeBanner from '../../Components/Home/HomeBanner';
import HomeBanner2 from '../../Components/Home/HomeBanner2';
import HomeBanner3 from '../../Components/Home/HomeBanner3';

const HomePage = () => {
    return (
        <div>
            {/* <HomeBanner title="karim"/>
            <HomeBanner2/> */}
            {/* <HomeBanner3/>
            <Home5 name="Mohammad Rejaul karim" age="22"/> */}
            {/* <Userinput/> */}
            <User/>
        </div>
    );
};

export default HomePage;