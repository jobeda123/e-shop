import React from 'react';
import './HomePage.css';
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar';
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider';
import Category from '../../components/Category/Category';
import FlashSale from '../../components/FlashSale/FlashSale';


const HomePage = () => {
    return (
        <header>
            <HeaderNavBar />
            <HeaderSlider />
            <Category />
            <FlashSale />
        </header>
    );
};

export default HomePage;