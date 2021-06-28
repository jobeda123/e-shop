import React from 'react';
import './HomePage.css';
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar';
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider';


const HomePage = () => {
    return (
        <header>
            <HeaderNavBar />
            <HeaderSlider />
        </header>
    );
};

export default HomePage;