import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <>
            <Image alt='Logo' src={'/MentorLagbe.png'} height={50} width={200} />
        </>
    );
};

export default Logo;