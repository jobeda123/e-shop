import React from 'react';
import './CategoryBanner.css';


const CategoryBanner = (props) => {
    const {pic, title} = props.bannerDetail;

    return (
        <section className="bannerArea">
            <img src={pic} alt="" width="100%" height="100%"/>
            <p>{title}</p>
        </section>
    );
};

export default CategoryBanner;