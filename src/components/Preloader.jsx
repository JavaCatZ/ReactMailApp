import React from 'react';
import '../styles/styles.css';
import '../styles/preloader.css';

function Preloader({ error })
{
    if (error) 
    {
        return <div>Ошибка загрузки формы!</div>;
    } else 
      {
            return(
                <div className="spinner-box">
                    <div className="circle-border">
                        <div className="circle-core"></div>
                    </div>  
                </div>
            );
      }
       
}

export default Preloader; 