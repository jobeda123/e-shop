import React from 'react';
import './HomePage.css';
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar';
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider';
import Category from '../../components/Category/Category';
import FlashSale from '../../components/FlashSale/FlashSale';
import LatestCollection from '../../components/LatestCollection/LatestCollection';
import NoName from '../../components/NoName/NoName';


const HomePage = () => {
    return (
        <header>
            <HeaderNavBar />
            <HeaderSlider />
            <Category />
            <FlashSale />
            <LatestCollection />
            <NoName />
        </header>
    );
};

export default HomePage;