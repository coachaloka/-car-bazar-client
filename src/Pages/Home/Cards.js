import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Cards = ({ services, index }) => {
    // console.log(services);
    return (
        <>
            <div className="card max-w-[300px]  bg-violet-900 shadow-xl mt-3">

                <PhotoProvider>
                    <div className="foo">
                        <PhotoView key={index} src={services?.img}>
                            <img className='h-52 w-full' src={services?.img} alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
                {/* ----------------phot zoom ent--------------- */}

                <div className="card-body">
                    <div className="justify-between flex">
                        <h2 className="card-title"> {services?.title} </h2>
                        <div className="badge badge-secondary ml-2">{services?.rating}</div>
                    </div>
                    <p>{services?.paragrap.slice(0, 100)}</p>
                    <div className="card-actions justify-between">
                        <h1 className="text-1xl text-success">1 Hour: {services?.price}</h1>
                        <Link to={`/card_details/${services?._id}`} className=" px-8 py-[6px] btn-secondary rounded-lg text-[15px] text-[#fafafa]">Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;