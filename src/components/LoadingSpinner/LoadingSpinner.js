import React from 'react';
import loadingSpinner from '../../images/loadindSpinner.gif';

const LoadingSpinner = () => {
    return (
        <div className="mb-5">
            <img className="fluid" src={loadingSpinner} alt="" />
        </div>
    );
};

export default LoadingSpinner;