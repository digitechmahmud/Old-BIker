import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ bikeOption, setBikeOption }) => {
    console.log(bikeOption);
    const { user } = useContext(AuthContext);
    const {name, resalePrice } = bikeOption;
    const date = new Date();
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const resalePrice = form.resalePrice.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const location = form.location.value;


        const booking = {
            product: bikeOption.name,
            buyerName: username,
            buyerEmail: email,
            img:bikeOption.picture,
            buyerPhone: phone,
            resalePrice,
            meetingLocation: location,
            date
        }
        fetch('https://old-biker-server.vercel.app/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Booked confirmed")
                setBikeOption(null);
                

                
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
                    <h3 className="text-lg font-bold mb-4">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        {/* <input type="text" value={date} className="input input-bordered input-info w-full " /> */}
                        <input type="text" name='username' placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered input-info w-full" readOnly />
                        <input type="text" name='resalePrice' placeholder="Price" defaultValue={resalePrice} className="input input-bordered input-info w-full" disabled/>
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-info w-full " />
                        <input type="text" name='location' placeholder="Location" className="input input-bordered input-info w-full " />
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered input-info w-full " readOnly /><br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
                <Toaster/>
            </div>
        </div>
    );
};

export default BookingModal;