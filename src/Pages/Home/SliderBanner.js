import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SliderBanner = ({ item }) => {
    const { img, paragrap, id, title, privece, next } = item
    return (
        <>

            <div id={`slide${id}`} className="carousel-item relative w-full img-gradient">
                <img src={img} className="object-cover w-[100%] h-[100vh] lg:h-[120vh] " />
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-[150px] sm:top-40 md:top-1/3 md:px-20 z-50">
                    <div className="block">
                        <h1 className='text-4xl md:text-6xl text-bold text-[#dfdcdc] md:w-2/5 z-50'>{title}</h1>
                        <p className='text-[#dcd9d9] md:w-2/4 mt-7 mb-3 text-[14px] pr-3 md:text-[20px] text-justify fonts '>{paragrap.slice(0, 200)}</p>
                    </div>
                </div>
                {/* --------------------btn---------- */}
                <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-[288px] md:top-[468px] md:px-20 z-50">
                    <div className="flex">
                        <Link to={'/cetegories'} > <button className="px-3 py-1 md:px-12 md:py-3 bg-[#B2381B] hover:bg-[#da4722] md:text-[18px] rounded-lg mr-5 text-white">ALL SERVICES</button></Link>
                        <Link to={'/my-reviews'} ><button className="px-3 py-1 md:px-12 md:py-3 bg-[#B2381B] hover:bg-[#cc411f] md:text-[18px] rounded-lg mr-5 text-white">ALL REVIEWS</button></Link>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 md:bottom-60 z-50">
                    <a href={`#slide${privece}`} className="btn btn-circle mr-3 hover:bg-slate-800 hover:text-red-600">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle hover:bg-slate-800 hover:text-red-600">❯</a>
                </div>
            </div>




        </>
    );
};

export default SliderBanner;