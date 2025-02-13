import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import TicketNumber from '../components/TicketNumber';
import TicketType from '../components/TicketType';
import TicketTitle from '../components/TicketTitle';

const TicketForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [ticketType, setTicketType] = useState('');
    const [ticketNumber, setTicketNumber] = useState(1);
    const [errors, setErrors] = useState({});
    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        // Load saved data from local storage
        const savedData = JSON.parse(localStorage.getItem('ticketData'));
        if (savedData) {
            setFullName(savedData.fullName);
            setEmail(savedData.email);
            setAvatar(savedData.avatar);
            setTicketType(savedData.ticketType || '');
            setTicketNumber(savedData.ticketNumber || 1);
        }
    }, []);

    useEffect(() => {
        // Save data to local storage whenever any field changes
        localStorage.setItem('ticketData', JSON.stringify({
            fullName,
            email,
            avatar,
            ticketType,
            ticketNumber
        }));
    }, [fullName, email, avatar, ticketType, ticketNumber]);

    // Regex for validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    const urlRegex = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/;

    const validateForm = () => {
        const newErrors = {};
        if (!fullName) newErrors.fullName = 'Full Name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!avatar || !urlRegex.test(avatar)) {
            newErrors.avatar = 'Valid Avatar URL is required';
        }
        if (!ticketType) newErrors.ticketType = 'Ticket Type is required';
        if (!ticketNumber || ticketNumber < 1) newErrors.ticketNumber = 'Select at least one ticket';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setTicket({ fullName, email, avatar, ticketType, ticketNumber });
            setErrors({});
        }
    };

    return (
        <div className='flex flex-col w-full items-center min-h-screen mb-8'>
            <Header />
            <form
                className='flex flex-col border border-[#0E464F] bg-[#08252B] rounded-3xl w-1/2 max-w-[43.75rem] mt-6 p-12'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-row justify-between w-full items-center'>
                    <h1 className='text-[32px]'>Ticket Selection</h1>
                    <span className='font-[roboto] text-base'>Step 1/3</span>
                </div>
                <div className='w-full h-1 bg-[#0E464F] rounded-[5px]'>
                    <div className='w-2/5 h-1 bg-[#24A0B5] rounded-[5px]'></div>
                </div>
                <div className='ticket p-6 flex flex-col justify-center w-full mt-6 border border-[#0E464F] bg-[#08252B] rounded-3xl'>
                    <TicketTitle />

                    <div className='w-full h-1 bg-[#0E464F] rounded-[5px] mt-10'></div>

                    {/* Ticket Type Selection */}
                    <TicketType selectedType={ticketType} setSelectedType={setTicketType} />

                    {/* Ticket Number Selection */}
                    <TicketNumber selectedNumber={ticketNumber} setSelectedNumber={setTicketNumber} />

                    <div className='flex flex-row gap-6 justify-between w-full mt-6'>
                        <button
                            className='w-1/2 cursor-pointer py-3 px-6 bg-[#08252b] border border-[#0E464F] text-[#24A0B5] rounded-lg hover:bg-[#24A0B5] hover:text-white'
                            type='reset'
                            onClick={() => localStorage.removeItem('ticketData')}
                        >
                            Cancel
                        </button>

                        <Link to="/details" className="w-1/2">
                            <button
                                className='w-full cursor-pointer py-3 px-6 bg-[#24A0B5] border border-[#0E464F] text-white rounded-lg hover:bg-[#08252b] hover:text-[#24A0B5]'
                                type='button'
                            >
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TicketForm;
