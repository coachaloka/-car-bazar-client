import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UseContext';
import ModalField from '../Home/ModalCarsInfor.js/ModalField';


const CategorieID = () => {

    const { user } = useContext(AuthContext);

    const singelService = useLoaderData();

    const [bookItem, setBookItem] = useState(null);


    return (
        <>
            <div data-theme="cupcake" className="container my-[60px]">
                <h1 className='text-4xl text-gray-700 text-bold font-mono py-5 text-center'>All <span className='text-amber-600'>{singelService[1]?.carName.slice(0, 5)}</span> Collection 2022</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:px-12 px-5 justify-center items-center">

                    {
                        singelService?.map((item, i) => <>
                            <div key={i} className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                                <div className="flex justify-between pb-4 border-bottom">
                                    <div className="flex items-center">
                                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">
                                            {/* -----------user verified blue dote------------- */}
                                            {
                                                item?.sellerVerified ? <>
                                                    <div className="flex items-center space-x-3">
                                                        <div id='avatar' className="avatar online placeholder mr-2 ">
                                                            <div className="w-7 rounded-full ring ring-primary
                                                                  ring-offset-base-100 ring-offset-2">

                                                                <img className='w-6 bg-slate-300' src={item?.userImg} />

                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{item?.sellerName}</div>
                                                            <div className="text-sm opacity-50">{item?.location}</div>
                                                        </div>
                                                    </div>
                                                </>
                                                    :
                                                    <>
                                                        <div className="flex items-center space-x-3">
                                                            <div id='avatar' className="avatar placeholder mr-2 ">
                                                                <div className="w-7 rounded-full ring ring-primary
                                                                  ring-offset-base-100 ring-offset-2">

                                                                    <img className='w-6 bg-slate-300' src={item?.userImg} />

                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{item?.sellerName}</div>
                                                                <div className="text-sm opacity-50">{item?.location}</div>
                                                            </div>
                                                        </div>
                                                    </>

                                            }


                                            <span className='text-amber-600'> </span></a>
                                    </div>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src={item?.img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                        <div className="flex items-center text-xs justify-between pt-2">
                                            <span className=''>Uplode Date : {item?.date}</span>
                                            <div className="block">
                                                Total Car : <span className='text-amber-700'> {i + 2}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <a rel="noopener noreferrer" href="" className="block">
                                            <h3 className="text-xl font-semibold dark:text-violet-400">Model : {item?.carName.slice(0, 80)}</h3>
                                        </a>
                                        <h1 className=''> Market Price : <span className='text-amber-200'>{item?.ResellPrice}. </span></h1>
                                        <h1 className=''> Resell Price : <span className='text-amber-200'>{item?.orginalPrice}. </span></h1>
                                        <p className="leading-snug dark:text-gray-400">{item?.text.slice(0, 250)}</p>
                                        <div className="flex justify-center mt-3" >
                                            <label onClick={() => setBookItem(item)} htmlFor="bookin-modal" className="btn md:px-12 btn-primary my-2">Book Now</label>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </>
                        )
                    }

                </div>
                {
                    setBookItem && <ModalField key={singelService?.id} bookItem={bookItem} user={user} ></ModalField>
                }

            </div>
        </>
    );
};

export default CategorieID;