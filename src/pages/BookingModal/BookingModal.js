import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({bikeOption, setBikeOption}) => {
    const { user } = useContext(AuthContext);
    const date = new Date();
    const handleBooking = e => {
        e.preventDefault();
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
                    <h3 className="text-lg font-bold mb-4">{bikeOption.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" value={date} className="input input-bordered input-info w-full " />
                        <input type="text" name='fullname' placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered input-info w-full" readOnly />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-info w-full " />
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered input-info w-full " readOnly /><br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;