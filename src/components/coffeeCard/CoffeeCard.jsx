import React from 'react';
import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';

const CoffeeCard = ({ singleCoffee }) => {
    const { name, photo, price, taste, _id } = singleCoffee;

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/coffee/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className="flex justify-around items-center bg-[#F5F4F1] shadow-sm p-10">
            <figure>
                <img
                    src={`${photo}`}
                    alt="Movie"
                    className='w-[12vw]'
                />
            </figure>
            <div className="text-black normal-font p-5 w-[60%]">
                <h2>Name: {name}</h2>
                <p>Price: {price} Taka</p>
                <p>Taste: {taste}</p>
            </div>
            <div className="card-body">
                <div>
                    <button className='btn bg-[#D2B48C]'><MdRemoveRedEye /></button>
                </div>
                <div>
                    <button className='btn btn-neutral'><MdEdit /></button>
                </div>
                <div>
                    <button onClick={() => handleDelete(_id)} className='btn btn-error text-white'><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;