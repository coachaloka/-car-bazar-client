import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UseContext';


const MyOrder = () => {

    const { user } = useContext(AuthContext);
    console.log(user?.email);
    const { data: MyBookingCar = [] } = useQuery({
        queryKey: ['allBooking'],
        queryFn: async () => {
            const res = await fetch(`https://car-buy-server.vercel.app/bookings/${user?.email}`);
            const data = await res.json();
            return data;
        },
    })
    console.log(MyBookingCar);
    const EiditeBtn = () => {
        toast.info('Eidite Panding ...')
    }
    // Delete btn
    const deleteBtn = (item) => {
        console.log(item)
        toast.error('Delete panding....')
    }

    return (
        <>
            {
                MyBookingCar.length && <h1 h1 className='text-4xl text-gray-700 text-bold font-mono py-5 text-center '>User Bookings <span className='text-amber-600'>Resell Cars</span> Collection </h1>
            }
            {
                !MyBookingCar?.length && <h1 className='text-4xl text-gray-700 text-bold font-mono py-5 text-center mt-[62px] h-[70vh]'>User No <span className='text-amber-600'>Bookings Cars</span></h1>
            }
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:px-12 px-5 justify-center items-center mb-5">
                {
                    MyBookingCar?.map((item, i) =>
                        <div key={i} className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                            <div className="flex justify-between pb-4 border-bottom">
                                <div className="flex items-center">
                                    <a rel="noopener noreferrer" href="" className="mb-0 capitalize dark:text-gray-100">
                                        {/* -----------user verified blue dote------------- */}
                                        {
                                            user?.emailVerified ? <>
                                                <div className="flex items-center space-x-3">
                                                    <div id='avatar' className="avatar online placeholder mr-2 ">
                                                        <div className="w-7 rounded-full ring ring-primary
                                                                  ring-offset-base-100 ring-offset-2">

                                                            <img className='w-5 bg-slate-300' src={item?.productSeller} />

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{item?.names}</div>
                                                        <div className="text-sm opacity-50">{item?.sellerLocation}</div>
                                                    </div>
                                                </div>
                                            </>
                                                :
                                                <>
                                                    <div className="flex items-center space-x-3">
                                                        <div id='avatar' className="avatar placeholder mr-2 ">
                                                            <div className="w-7 rounded-full ring ring-primary
                                                                  ring-offset-base-100 ring-offset-2">

                                                                <img className='w-6 bg-slate-300' src={item?.productSeller} />

                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{item?.names}</div>
                                                            <div className="text-sm opacity-50">{item?.sellerLocation}</div>
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
                                    <img src={item?.productImg} alt="" className="block object-cover object-center w-full rounded-md h-[180px] dark:bg-gray-500" />
                                    <div className="flex items-center text-xs justify-between pt-2">
                                        <div className="block">
                                            <span className='block'>uplode Date : {item?.resiveDate}</span>
                                            <span className='mt-1'>{item?.sellerLocation} <span className='text-red-500'>To </span>{item?.Resivelocation}</span>
                                            <span className='block mb-1'>{item?.email}</span>
                                            <span className='block'>phone : {item?.phoneNumber}</span>
                                        </div>
                                        <div className="block">
                                            Brand : <span className='text-amber-700'>{item?.serviceName?.slice(0, 5)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="block">
                                        <h3 className="text-xl font-semibold dark:text-[#bd108f]">Model : {item?.serviceName?.slice(0, 80)}</h3>
                                    </div>
                                    <h1 className=''> Total Price : <span className='text-amber-200'>{item?.carPrice}. </span></h1>
                                    <p className="leading-snug dark:text-gray-400">{item?.productText?.slice(0, 120)} More..</p>
                                    <div className="flex justify-center mt-3" >

                                        <Link to={'/pement'}> <label className="btn md:px-12 bg-[#B2381B] hover:bg-[#cf4523]  my-2">Confram product</label></Link>

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

export default MyOrder;