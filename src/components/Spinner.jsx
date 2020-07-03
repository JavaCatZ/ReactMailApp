import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

function Spinner()
{
    return(
        <div className="preloader-wrapper small active right">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
                <div className="circle"></div>
            </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper">
                <div className="circle"></div>
              </div>
          </div>
      </div>
    );
}

export default Spinner; 