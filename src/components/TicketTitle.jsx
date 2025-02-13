import React from 'react'

const TicketTitle = () => {
    return (
        <div className='ticket-title border border-[#07373F] rounded-3xl p-6'>
            <h1 className='flex justify-center items-start text-[3.875rem]'>
                Techember Fest &#8221;25</h1>
            <p className='flex justify-center mx-auto text-base leading-6 w-3/5 text-center'>
                Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
            <p className='flex flex-row text-center text-base leading-6 justify-center mt-2 '>
                📍 [Event Location]  | |  March 15, 2025 | 7:00 PM
            </p>
        </div>
    )
}

export default TicketTitle