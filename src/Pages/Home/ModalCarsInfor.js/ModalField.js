import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ModalField = ({ bookItem, user, }) => {
    const navigator = useNavigate();

    // const { img, userImg, id, carName, text, orginalPrice, sellerName, date, _id } = bookItem
    // console.log(bookItem)
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const names = form.name.value;
        const email = form.email.value;
        const carName = form.carName.value;
        const locations = form.location.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const prices = form.price.value;

        // --------set object-------
        const booking = {
            serviceName: carName,
            names: names,
            email,
            Resivelocation: locations,
            phoneNumber: phone,
            carPrice: prices,
            resiveDate: date,
            product_id: bookItem?._id,
            productImg: bookItem?.img,
            productText: bookItem?.text,
            productSeller: bookItem?.userImg,
            sellerLocation: bookItem?.location,
        }
        console.log(booking)
        //Fetch backin server site

        fetch('https://car-buy-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(result => result.json())
            .then(data => {
                console.log(data)
                if (data?.acknowledged) {
                    toast.success('Your Car Booking successfuly ')
                    form.reset()
                    bookItem(null);
                } else {
                    toast.error(data?.messsage)
                }

            })
    }

    return (
        <>
            <input type="checkbox" id="bookin-modal" className="modal-toggle" />
            <div className="modal mt-[40px]">
                <div className="modal-box relative">
                    <label htmlFor="bookin-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center font-bold">RESELL CAR : {bookItem?.carName.slice(0, 5)}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='carName' type="text" disabled defaultValue={bookItem?.carName} className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered " />
                        <input name="price" type="text" defaultValue={bookItem?.orginalPrice} disabled placeholder="price" className="input w-full input-bordered" required />
                        <input name="date" type="text" placeholder="Receive Date" className="input w-full input-bordered" required />
                        <input name="location" type="text" placeholder="Receive location" className="input w-full input-bordered" required />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ModalField;