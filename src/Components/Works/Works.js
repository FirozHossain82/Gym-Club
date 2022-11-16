import React from 'react';

const Works = ({item,handleAddToCart}) => {
    const {  name, time, description, img } = item;
    return (
        <div className='px-2'>
            <div className="card  bg-base-100 shadow-xl">
                <figure className='px-3 py-3'>
                <img src={img} alt="Shoes" className="rounded-xl h-44 w-full" />
                </figure>
                <div className="text-justify px-3">
                        <h2 className="text-center text-xl font-bold py-3">{name}</h2>
                        <p className='py-2 font-bold'>Time : <span className='text-cyan-600'>{time} s</span></p>
                        <p>{description}</p>
                <div className="card-actions py-4">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-primary ">Add To List</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Works;