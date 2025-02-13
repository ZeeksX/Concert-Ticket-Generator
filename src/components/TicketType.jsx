import React from 'react';

const TicketType = ({ selectedType, setSelectedType }) => {
    const ticketOptions = [
        {
            price: "Free",
            level: "REGULAR ACCESS",
            date: "20/52"
        },
        {
            price: "$150",
            level: "VIP ACCESS",
            date: "20/52"
        },
        {
            price: "$150",
            level: "VVIP ACCESS",
            date: "20/52"
        }
    ];

    return (
        <div className='ticket-select flex flex-col'>
            <h1 className='flex text-base leading-[150%] mt-6'>Select Ticket Type: </h1>
            <div className='ticket p-4 gap-4 flex flex-row justify-between w-full mt-6 border bg-[#052228] border-[#07373F] rounded-3xl'>
                {ticketOptions.map((ticket, index) => (
                    <div
                        key={index}
                        className={`w-1/3 flex flex-col h-[6.875rem] border-2 rounded-xl p-3 cursor-pointer 
                            ${selectedType === ticket.level ? 'border-[#24A0B5] bg-[#08252B]' : 'border-[#197686]'}`}
                        onClick={() => setSelectedType(ticket.level)}
                    >
                        <h1 className='font-semibold text-2xl leading-[110%]'>{ticket.price}</h1>
                        <h1 className='text-base leading-[150%] mt-3'>{ticket.level}</h1>
                        <h1 className='text-sm leading-[150%]'>{ticket.date}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketType;
