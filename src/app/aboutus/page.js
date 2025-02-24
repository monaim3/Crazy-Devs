import React from 'react';
import AboutHero from '../Sections/About/AboutHero';
import Mission from '../Sections/About/Mission';
import Capabilities from '../Sections/Home/Capabilities';
import Clients from '../Sections/Home/Client';

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