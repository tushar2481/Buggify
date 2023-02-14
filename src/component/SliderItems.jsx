import React from 'react';

const SliderItem = ({ image, title, description }) => {
    return (
        <div className="slider-item">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SliderItem;