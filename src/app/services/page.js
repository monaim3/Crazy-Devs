import React from 'react';
import ServiceHero from '../Sections/Services/ServiceHero';

import ServiceCard from '../Sections/Services/ServiceCard';
import Business from '../Sections/Services/Business';

const page = () => {
    return (
        <div className='bg-[#FEF4EA]'>
            <ServiceHero></ServiceHero>
            <ServiceCard></ServiceCard>
            <Business></Business>
        </div>
    );
};

export default page;