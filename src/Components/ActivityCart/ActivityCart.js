import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ActivityCart = (props) => {
    const {cart} = props;
    const[breakTime, setBreakTime] = useState('');
    const successHandle = () => {
        toast('Today Your Task Completed');
    }



    let totalTime = 0;
    for (const item of cart) {
        totalTime = Number(totalTime + item.time);
    }

    return (
        <div className=' mx-auto'>
             <div className=" card w-44 lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <div className='flex '>
                        <img className='w-8 h-8 lg:w-14 lg:h-14 rounded-2xl' src="https://firozhossain82.github.io/Gym-Data/Images/Formal CV Picture.jpg" alt="" />
                        <div className='ml-4'>
                            <h1 className='text-sm lg:text-lg font-bold'>FirozHossain</h1>
                            <p className='text-sm lg:text-lg font-semibold'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Mirpur10  Dhaka</p>
                        </div>
                    </div>


                    <div className=' lg:flex justify-evenly bg-cyan-200 px-3 py-4 rounded-xl'>
                        <div className='py-2'>
                            <h1 className=''><span className='font-bold'>62</span> <span>Kg</span></h1>
                            <p>Weight</p>
                        </div>
                        <div className='py-2'>
                            <h1><span className='font-bold'>5.8</span></h1>
                            <p>Height</p>
                        </div>
                        <div className='py-2'>
                            <h1><span className='font-bold'>24</span><span>Yrs</span></h1>
                            <p>Age</p>
                        </div>
                    </div>


                    <h2 className='text-start text-sm lg:text-xl font-bold'>Add A Break</h2>

                    <div className='lg:flex justify-evenly bg-cyan-200  px-3 py-4 rounded-xl'>

                        <div className='bg-lime-50 px-2 py-1 rounded-2xl'>
                            <button onClick={() => {
                                setBreakTime(10)
                               
                            }}><span>10</span>s
                            </button>
                        </div>

                        <div  className='bg-lime-100 px-2 py-1 rounded-2xl'>
                            <button onClick={() => {
                                setBreakTime(20)
                               
                            }}><span>20</span>s
                            </button>
                        </div>

                        <div  className='bg-lime-100 px-2 py-1 rounded-2xl'>
                            <button onClick={() => {
                                setBreakTime(30)
                              
                            }}><span>30</span>s
                            </button>
                        </div>
                        <div  className='bg-lime-100 px-2 py-1 rounded-2xl'>
                            <button onClick={() => {
                                setBreakTime(40)
                              
                            }}><span>40</span>s
                            </button>
                        </div>
                    </div>

                    <h2 className='text-start text-sm lg:text-xl font-bold'>Exercise Details</h2>

                    <div>
                        <div className='lg:flex justify-evenly bg-cyan-200   px-3 py-4 my-5 rounded-xl'>
                            <h1 className='text-sm lg:text-lg font-bold'>Exercise time</h1>
                            <p><span className='pr-2 text-lg font-bold'>{totalTime}</span>s</p>
                        </div>
                        <div className='text-sm lg:flex justify-evenly bg-cyan-200  px-3 py-4 rounded-xl'>
                            <h1 className='text-lg font-bold'>Break time</h1>
                            <p><span className='pr-2 text-lg font-bold'>{Number(breakTime)}</span>s</p>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={() => successHandle()} className="btn btn-success text-sm lg:text-lg">Activity Completed</button>
                    </div>       

                     <  ToastContainer></ToastContainer>    

                </div>
            </div>
        </div>
      
    );
};

export default ActivityCart;