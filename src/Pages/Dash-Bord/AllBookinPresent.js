import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UseContext';


const AllBookinPresent = () => {

    const { user } = useContext(AuthContext);

    const url = `https://car-buy-server.vercel.app/users`;

    //    --------- TenStand Query------------
    const { data: booking = [], } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(booking)

    return (
        <div className='md:mx-16 md:mt-24 mt-36'>
            <h1 className='text-3xl text-bold text-black mb-10 text-center'>All Resell Car Booking User <span className='text-fuchsia-700'>{booking?.length}</span></h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name/email</th>
                            <th>Account type</th>
                        </tr>
                    </thead>
                    <tbody>

                        {booking.map((bok, i) =>

                            <tr key={bok?._id}>
                                <th><div className="flex">{i + 1} <img className='rounded-full md:w-10 ml-5' src={bok?.userPhoto} alt="" /></div></th>

                                <td>
                                    <div className="block ">
                                        <h1>{bok?.name}</h1>
                                        <h1 className='text-gray-600'>{bok?.email}</h1>
                                    </div>
                                </td>
                                <td className='text-sky-600'>{bok?.AccountType}</td>

                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookinPresent;