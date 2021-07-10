import React from 'react';
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar';
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider';
import Category from '../../components/Category/Category';
import FlashSale from '../../components/FlashSale/FlashSale';
import LatestCollection from '../../components/LatestCollection/LatestCollection';
import NoName from '../../components/NoName/NoName';
import Footer from '../../components/Footer/Footer';


const HomePage = () => {
    return (
        <>
            <HeaderNavBar />
            <HeaderSlider />
            <Category />
            <FlashSale />
            <LatestCollection />
            <NoName />
            <Footer />
        </>
    );
};

export default HomePage;