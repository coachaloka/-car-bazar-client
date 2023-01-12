
import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const CarCategori = () => {

    const { data: services = [], } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(`https://car-buy-server.vercel.app/cetegories`);
            const data = await res.json();
            return data;
        }
    })

    console.log(services);

    return (
        <>
            <div className="container my-[60px]">
                <h1 className='text-4xl text-gray-700 text-bold font-mono py-5 text-center'>All Categories <span className='text-amber-600'>Resell Car</span> Collection </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:px-12 px-5 justify-center items-center">

                    {
                        services?.map((item, i) => <>
                            <div key={i} className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                                <div className="flex justify-between pb-4 border-bottom">
                                    <div className="flex items-center">
                                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">RESELL<span className='text-amber-600'> {item?.company}</span></a>
                                    </div>
                                    <a rel="noopener noreferrer" href="#">New 2022</a>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src={item?.img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                        <div className="flex items-center text-xs justify-between pt-2">
                                            <span>Uplode Date : {item?.date}</span>
                                            <span className='text-amber-700'>5 day ago</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <a rel="noopener noreferrer" href="#" className="block">
                                            <h3 className="text-xl font-semibold dark:text-violet-400">{item?.title.slice(0, 80)} More..</h3>
                                        </a>
                                        <p className="leading-snug dark:text-gray-400">{item?.paragrap.slice(0, 250)}</p>
                                        <div className="flex justify-center mt-3" >
                                            <Link to={`/cetegories/${item?.id}`} key={item?.id} ><button className="btn md:px-12 bg-cyan-700 my-2">Views Cars</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </>
                        )
                    }

                    {/* <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                        <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center">
                                <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Replles<span className='text-amber-600'> Tesla Car</span></a>
                            </div>
                            <a rel="noopener noreferrer" href="#">Replles Car 3</a>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                <div className="flex items-center text-xs justify-between">
                                    <span>Uplode Date : 10/02/2022</span>
                                    <span>5 day ago</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                                </a>
                                <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                                <div className="flex justify-center mt-3" >
                                    <button className="btn md:px-12 btn-primary">viewss all cars</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                        <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center">
                                <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Replles<span className='text-amber-600'> Tesla Car</span></a>
                            </div>
                            <a rel="noopener noreferrer" href="#">Replles Car 3</a>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                <div className="flex items-center text-xs justify-between">
                                    <span>Uplode Date : 10/02/2022</span>
                                    <span>5 day ago</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                                </a>
                                <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                                <div className="flex justify-center mt-3" >
                                    <button className="btn md:px-12 btn-primary">viewss all cars</button>
                                </div>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </>
    );
};

export default CarCategori;