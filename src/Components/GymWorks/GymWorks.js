import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Works from '../Works/Works';

const GymWorks = () => {
    const [items, setItems] = useState([]);
    const[cart, setCart] = useState([])
    
    const handleAddToCart =(item)=>{
        let newCart =[...cart,item];
        setCart(newCart);
    }

    useEffect(()=>{
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data=> setItems(data))
    } ,[])
    return (
        <div className='w-11/12 my-12 mx-auto'>
                <div className='flex'>
                    <div className='grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
                                {
                                    items.map(item=><Works 
                                        key={item.id}
                                        item= {item}
                                        handleAddToCart={handleAddToCart}
                                    ></Works>)
                                }
                    </div>
                    <div>
                                
                    </div>
                </div>
        </div>
    );
};

export default GymWorks;