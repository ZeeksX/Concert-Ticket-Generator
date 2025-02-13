import React from 'react';

const TicketNumber = ({ selectedNumber, setSelectedNumber }) => {
    return (
        <div className='ticket-number flex flex-col'>
            <h1 className='flex text-base leading-[150%] mt-6'>Number of Tickets</h1>
            <select
                name="tickets"
                id="ticketNo"
                className='p-4 border border-[#0E464F] rounded-xl mt-3 outline-0'
                value={selectedNumber}
                onChange={(e) => setSelectedNumber(Number(e.target.value))}
            >
                <option className='text-white' value="1">1</option>
                <option className='text-white' value="2">2</option>
                <option className='text-white' value="3">3</option>
            </select>
        </div>
    );
};

export default TicketNumber;
