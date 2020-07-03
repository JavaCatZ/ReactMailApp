import React from 'react';
import CustomCard from '@components/CustomCard.jsx'
import FoneImg from '@assets/fone.jpg'

function UserUI()
{
    return(
        <div>
            <img src = { FoneImg } className="backgroundmain" alt="back"/>
            <CustomCard />
        </div>     
    );
}

export default UserUI; 