import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UseContext';


const MyProduct = () => {

    const { user } = useContext(AuthContext);

    const { data: myProduct = [], isLoading } = useQuery({
        queryKey: ['myProduct'],
        queryFn: async () => {
            const res = await fetch(`https://car-buy-server.vercel.app/allProduct/${user?.email}`);
            const data = await res.json();
            return data;
        },
    })
    // console.log(myProduct);


    if (isLoading) {
        <div className="flex h-[80vh] w-[100%] justify-center items-center mt-[65px]">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }




    const addItem = (item) => {

        const advertic = {
            productImg: item?.img,
            resiveDate: item?.date,
            productSeller: item?.userImg,
            sellerLocation: item?.location,
            names: item?.sellerName,
            serviceName: item?.carName,
            productText: item?.text,
            email: item?.email

        }
        console.log(advertic);

        fetch('https://car-buy-server.vercel.app/advertic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(advertic),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Home page add item successfully')

                    // navigate('/all-services')
                }
            }).catch(error => toast.error(error))

    }

    // Delete btn
    const deleteBtn = (item) => {
        console.log(item)
    }

    return (
        <>
            {
                myProduct.length && <h1 h1 className='text-4xl text-gray-700 text-bold font-mono py-5 text-center'>User Bookings <span className='text-amber-600'>Resell Cars</span> Collection </h1>
            }
            {
                !myProduct?.length && <h1 className='text-4xl text-gray-700 text-bold font-mono py-5 text-center mt-10'>User No <span className='text-amber-600'>Bookings Cars</span></h1>
            }
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:px-12 px-5 justify-center items-center mb-10">
                {
                    myProduct?.map((item, i) =>

                        <div key={i} className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                            <div className="flex justify-between pb-4 border-bottom">
                                <div className="flex items-center">
                                    <a rel="noopener noreferrer" href="" className="mb-0 capitalize dark:text-gray-100">
                                        {/* -----------user verified blue dote------------- */}
                                        {
                                            item?.sellerVerified ? <>
                                                <div className="flex items-center space-x-3">
                                                    <div id='avatar' className="avatar online placeholder mr-2 ">
                                                        <div className="w-7 rounded-full ring ring-primary
                                                                  ring-offset-base-100 ring-offset-2">

                                                            <img className='w-5 bg-slate-300' src={item?.userImg} />

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
                                <div className="flex">
                                    <button onClick={() => deleteBtn(item?._id)} className=" text-red-900 flex text-bold hover:text-red-600">Delete <span className='mt-[3px] text-[20px]'><FaTimes></FaTimes></span></button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src={item?.img} alt="" className="block object-cover object-center w-full rounded-md h-[180px] dark:bg-gray-500" />
                                    <div className="flex items-center text-xs justify-between pt-2">
                                        <div className="block">
                                            <span className='block'>uplode Date : {item?.date}</span>
                                            <span className='block mb-1'>{item?.email}</span>
                                            <span className='block'>phone : {item?.phone}</span>
                                        </div>
                                        <div className="block">
                                            Brand : <span className='text-amber-700'>{item?.carName?.slice(0, 5)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="block">
                                        <h3 className="text-xl font-semibold dark:text-[#bd108f]">Model : {item?.carName?.slice(0, 80)}</h3>
                                    </div>
                                    <h1 className=''>Orginal price Price : <span className='text-amber-200'>{item?.orginalPrice}. </span></h1>
                                    <h1 className=''> Resel Price : <span className='text-amber-200'>{item?.ResellPrice}. </span></h1>
                                    <p className="leading-snug dark:text-gray-400">{item?.text?.slice(0, 120)} More..</p>
                                    <div className="flex justify-center mt-3" >

                                        <Link onClick={() => addItem(item)} > <label className="btn md:px-12 bg-[#B2381B] hover:bg-[#cf4523]  my-2">Advertise</label></Link>

                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>
        </>
    );
};

export default MyProduct;