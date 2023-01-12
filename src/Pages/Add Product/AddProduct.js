import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UseContext';
import useTitle from '../../hook/useTitle';

const AddProduct = () => {

    useTitle('Add New Product')
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    // const { displayName, email, photoURL, metadata } = user

    // const services = useLoaderData()
    // const { title, img, price, paragrap, _id } = services
    // console.log(user);

    // ======================== if user seller then she/he access or add product=============================





    const addServiceSubmitBtn = (event) => {

        event.preventDefault();

        const form = event.target;
        const name = form.name?.value;
        const email = form.email?.value;
        const servicePhoto = form.photo?.value;
        const Cartitle = form.title?.value;
        const Model = form.model?.value;
        const serialId = form.serialId?.value;
        const locations = form.location?.value;
        const resellPrice = form.orginalPrice?.value;
        const orginalPrice = form.ResellPrice?.value;
        const updateDate = form.Date?.value;
        const phone = form.phone?.value;
        const message = form.message?.value;

        const order = {
            img: servicePhoto,
            id: serialId,
            userImg: user?.photoURL,
            carName: Model,
            text: Cartitle,
            orginalPrice: orginalPrice,
            ResellPrice: resellPrice,
            sellerName: user?.displayName,
            date: updateDate,
            location: locations,
            message: message,
            email,
            phone: phone,
            sellerVerified: user?.emailVerified

        }

        console.log(order)

        fetch('https://car-buy-server.vercel.app/productAdd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('success fully Service set Database')
                    event.target.reset()
                    // navigate('/all-services')
                }
            }).catch(error => toast.error(error))



    }

    const heldeleOnBlure = () => {

    }

    //Back navigate 
    const back = () => {
        navigate('/cetegories')
    }

    return (
        <>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50 w-[100%] justify-center lg:flex mt-16">


                <form onSubmit={addServiceSubmitBtn} className=" w-[100%] lg:w-[50%] ">
                    <div className="">
                        <div className='flex'> <div onClick={back} className="w-16 bg-amber-600 flex py-1 cursor-pointer ">
                            <span className='px-1 mt-1'><FaAngleDoubleLeft></FaAngleDoubleLeft></span> <h1>Back</h1></div> </div>
                        <h1 className="text-center text-2xl"><span className='text-red-500'>As a Seller </span> Add Product</h1>
                    </div>
                    <div className="grid lg:grid-cols-1 grid-cols-1 ">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Selar Name</label>
                            <input onBlur={heldeleOnBlure} defaultValue={user?.displayName} disabled id="firstname" name='Seller name' type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        <br />
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Seller Email</label>
                            <input onBlur={heldeleOnBlure} defaultValue={user?.email} id="email" name='email' disabled type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-white py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Car Model</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='model' type="text" placeholder="Car Model" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Car Details</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='title' type="text" placeholder="Car paragrap" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        {/* -----img */}
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Car Image. suggess <span className='text-red-500'>imagebb.com</span> photo link.</label>
                            <input onBlur={heldeleOnBlure} id="photo" name='photo' type="text" placeholder="Car Brand photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        {/* --price */}
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Car Orginal Marken price</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='ResellPrice' type="text" placeholder="Car Orginal price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Car Resell Price</label>
                            <input onBlur={heldeleOnBlure} id="orginalPrice" name='price' type="text" placeholder="Car resell price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        {/* --rating */}
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Post Date</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='Date' type="text" placeholder="Post Date" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Location</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='location' type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">phone</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='phone' type="number" placeholder="phone" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        {/* --service id */}
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Choices Product Id : Tesla: 2, Rose: 1, BMW: 3  </label>
                            <input onBlur={heldeleOnBlure} id="serial-id" name='serialId' type="number" placeholder="product Id" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-black py-2 placeholder:px-5 placeholder:text-black px-3" required />
                        </div>
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Message</label>
                            <textarea name='message' className="textarea textarea-secondary w-full text-black" placeholder="Bio" required></textarea>
                        </div>

                    </div>
                    <br></br>
                    <div className="col-span-full sm:col-span-3">
                        <button type='submit' className='w-32 mx-auto  py-2 bg-gray-300 text-black hover:bg-amber-500 rounded-lg '>Submit</button>
                    </div>





                </form>
            </section>
        </>
    );
};

export default AddProduct;