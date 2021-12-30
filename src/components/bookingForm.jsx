import React, { useState, useContext} from 'react'
import Counters from './counters';

import {bookingFormContext} from "./context"

function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    }
    console.log(map);
    return format.replace(/mm|dd|yyyy|yy/gi, matched => map[matched])
}

const customerForm={
    customerName: '',
    customerContact: '+91-',
    customerAddressLine1: '',
    customerAddressLine2: 'New Delhi.',
    };
const orderForm={
    orderId: '',
    state: '',
    itemsCount: 0,
    bookingDate: '',
    deliveryDate: '',
    bookingPerson: 'John Doe',
};
const orderDetailsForm={
    counters: {
        coat:                           {id: 0, value: 0, action: '', price: 120, title: "Coat", gender_bias: "nil"},
        pant:                           {id: 1, value: 0, action: '', price: 70, title: "Pant", gender_bias: "nil"},
        jeans:                          {id: 2, value: 0, action: '', price: 80, title: "Jeans", gender_bias: "nil"},
        lehnga_2pc:                     {id: 3, value: 0, action: '', price: 350, title: "Lehnga 2pc", gender_bias: "nil"},
        lehnga_3pc:                     {id: 4, value: 0, action: '', price: 450, title: "Lehnga 3pc", gender_bias: "nil"},
        kurti:                          {id: 5, value: 0, action: '', price: 90, title: "Kurti", gender_bias: "nil"},
        ladiesSuit_2pc:                 {id: 6, value: 0, action: '', price: 190, title: "Ladies Suit 2pc", gender_bias: "nil"},
        coatPant_2pc:                   {id: 7, value: 0, action: '', price: 190, title: "Coat Pant 2pc", gender_bias: "nil"},
        coatPant_3pc:                   {id: 8, value: 0, action: '', price: 250, title: "Coat Pant 3pc", gender_bias: "nil"},
        },
    showDeleteBtn: false,
};

function BookingForm() {
    // booking Form
    const [customerState, setCustomerState] = useState(customerForm);
    const [orderState, setOrderState] = useState(orderForm);
    const [orderDetailsState, setOrderDetailsState] = useState(orderDetailsForm);

    const handleBookingSubmit = (event) => {
        console.log('customerState',customerState,'orderState',orderState,'orderDetailsState',orderDetailsState);
        event.preventDefault();
    };
    
    // end 
    return (
        <div>
            <h5 style={{textAlign: 'center'}}><strong>New Booking</strong></h5>
            <div className="container">
                <form onSubmit={handleBookingSubmit}>
                    <div className="row p-2 m-1">
                        <div className="col-9">
                            <strong>Customer Details:</strong>
                            <div className="form-outline mt-1">
                                Phone Number:<br/>
                                <input
                                className="p-1"
                                name="customerContact"
                                type="tel"
                                placeholder="Enter Phone Number"
                                onChange={e => setCustomerState(() => { console.log('keypress: ', e.target.value); const newState={...customerState}; newState.customerContact=e.target.value; return newState; })}
                                required />
                            </div>
                            <div className="form-outline mt-1">
                                Name:<br/>
                                <input
                                className="p-1"
                                name="customerName"
                                type="text"
                                placeholder="Enter Name"
                                onChange={e => setCustomerState(() => {const newState={...customerState}; newState.customerName=e.target.value; return newState; })}
                                required />
                            </div>
                            <div className="form-outline mt-1">
                                Address Line 1:<br/>
                                <input
                                className="p-1"
                                name="customerAddress"
                                type="text"
                                size="60"
                                placeholder='Hounse no: 29, 2nd Floor'
                                value={customerState.customerAddressLine1}
                                onChange={e => setCustomerState(() => {const newState={...customerState}; newState.customerAddressLine1=e.target.value; return newState; })}
                                required />
                            </div>
                            <div className="form-outline mt-1">
                                Address Line 2:<br/>
                                <input 
                                className="p-1"
                                name="customerAddress"
                                type="text"
                                size="60"
                                placeholder='Sec-4, plot 6, Golden Heights Appartments, Dwarka'
                                onChange={e => setCustomerState(() => {const newState={...customerState}; newState.customerAddressLine2=e.target.value; return newState; })}
                                required />
                            </div>
                        </div>
                        <div className="col-3">
                            <strong>Booking Details:</strong>
                            <div className="form-outline mt-1">
                                Booking Date: <br/>
                                <input
                                className="p-1"
                                name="bookingDate"
                                type="date"
                                value={formatDate(new Date(), 'yyyy-mm-dd')}
                                onChange={e => setOrderState(() => {const newState={...orderState}; newState.bookingDate=e.target.value; return newState; })}
                                required />
                            </div>
                            <div className="form-outline mt-1">
                                Delivery Date: <br/>
                                <input
                                className="p-1"
                                name="deliveryDate"
                                type="date"
                                onChange={e => setOrderState(() => {const newState={...orderState}; newState.deliveryDate=e.target.value; return newState; })}
                                required />
                            </div>
                            <div className="form-outline mt-1">
                                Booked by: <br/>
                                <input
                                className="p-1"
                                name="bookingPerson"
                                type="text"
                                placeholder='John doe'
                                onChange={e => setOrderState(() => {const newState={...orderState}; newState.bookingPerson=e.target.value; return newState; })}
                                required />
                            </div>
                        </div>
                    </div> 
                    <div className="p-2 m-1">
                        <strong>Select Clothes:</strong>
                        <bookingFormContext.Provider value={[orderDetailsState, setOrderDetailsState]}>
                            <Counters/>
                        </bookingFormContext.Provider>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
  };

export default BookingForm;