import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllProductImg = () => {
    const [imgss, setImg] = useState()
    useEffect(() => {
        fetch(`https://car-buy-server.vercel.app/allProduct/`)
            .then(res => res.json())
            .then(data => {
                setImg(data)
            })
    }, [])
    console.log(imgss)

    return (
        <>
            <section className=" dark:bg-gray-800 dark:text-gray-50 py-10">
                <h1 className='text-4xl text-center pb-2 text-cyan-700 font-bold'>Car Collection - 2022</h1>
                <h1 className='text-2xl text-center pb-2 text-cyan-700 font-bold'>Advertisement!</h1>
                <p className='text-[22px] text-amber-600 text-center pb-5'>Click This img or zooming product </p>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 md:px-20 px-2">
                    {
                        imgss?.map((imgs, i) => <>
                            <PhotoProvider>
                                <div className="foo">

                                    <PhotoView key={i} src={imgs?.img}>
                                        <img className="w-full cursor-grab h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={imgs?.img} alt="" />
                                    </PhotoView>

                                </div>
                            </PhotoProvider>
                        </>

                        )
                    }




                </div>
            </section>
        </>
    );
};

export default AllProductImg;