import React from 'react';
import AboutHero from '../../components/Sections/About/AboutHero';
import Mission from '../../components/Sections/About/Mission';
import Capabilities from '../../components/Sections/Home/Capabilities';
import Clients from '../../components/Sections/Home/Client';

const page = () => {
    return (
        <div >
           <AboutHero></AboutHero>
           <Mission></Mission>
           <Capabilities noPadding></Capabilities>
          
           <Clients noPadding ></Clients>
          
        </div>
    );
};

export default page;