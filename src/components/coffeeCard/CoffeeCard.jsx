import React from 'react';

const CoffeeCard = ({ singleCoffee }) => {
    const { name, photo, price, taste } = singleCoffee;
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={`${photo}`}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Price: {price} Taka</p>
                <p>Taste: {taste}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;