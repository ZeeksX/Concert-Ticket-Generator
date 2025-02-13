import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import UploadPhoto from '../components/UploadPhoto';

const AttendanceDetails = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [request, setRequest] = useState("");

    // Load saved data from local storage on mount
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("attendeeData"));
        if (savedData) {
            setName(savedData.name || "");
            setEmail(savedData.email || "");
            setAvatar(savedData.avatar || "");
            setRequest(savedData.request || "");
        }
    }, []);

    // Save data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem(
            "attendeeData",
            JSON.stringify({ name, email, avatar, request })
        );
    }, [name, email, avatar, request]);

    return (
        <div className='flex flex-col w-full items-center min-h-screen'>
            <Header />
            <div className='border-[#0E464F] border bg-[#041E23] rounded-3xl w-1/2 max-w-[43.75rem] mt-6 p-12'>
                <div className='flex flex-row justify-between w-full items-center'>
                    <h1 className='text-[32px]'>Attendee Details</h1>
                    <span className='font-[roboto] text-base'>Step 2/3</span>
                </div>
                <div className='w-full h-1 bg-[#0E464F] rounded-[5px]'>
                    <div className='w-2/5 h-1 bg-[#24A0B5] rounded-[5px]'></div>
                </div>
                <form className='flex flex-col border border-[#0E464F] bg-[#08252B] rounded-3xl p-6 mt-6'>
                    <UploadPhoto setAvatar={setAvatar} />

                    <div className='w-full h-1 bg-[#07373F] my-10'></div>
                    <div className='attendance-details flex flex-col gap-3'>
                        <div className="flex flex-col gap-2 mb-4">
                            <label
                                htmlFor="name"
                                className="font-step text-neutral-50 font-normal mb-2"
                            >
                                Enter your name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="appearance-none outline-none h-12 p-3 rounded-xl border-[1px] border-[#07373f] bg-transparent focus:border-[#26899c] caret-[#26899c]"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <label
                                htmlFor="email"
                                className="font-step text-neutral-50 font-normal mb-2"
                            >
                                Enter your email *
                            </label>
                            <p className="has-[:focus]:border-[#26899c] mb-2 outline-none flex items-center gap-2 h-12 p-3 rounded-xl border-[1px] border-[#07373f] bg-transparent focus:border-[#26899c]">
                                <MailOutlineIcon />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none mx-2 w-full outline-none bg-transparent focus:caret-[#26899c]"
                                />
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="special"
                                className="font-step text-neutral-50 font-normal mb-2"
                            >
                                Special request?
                            </label>
                            <textarea
                                name="special"
                                id="special"
                                placeholder="Please say your requests here"
                                rows={4}
                                value={request}
                                onChange={(e) => setRequest(e.target.value)}
                                className="outline-none h-[127px] p-3 rounded-xl border-[1px] border-[#07373f] bg-transparent focus:border-[#26899c] caret-[#26899c]"
                            ></textarea>
                        </div>
                        <div className="page-two flex flex-col-reverse md:flex-row w-full justify-between gap-6 leading-6 mt-6">
                            <Link
                                to="/"
                                className="bg-transparent hover:bg-[#24a0b5] text-[#24a0b5] leading-[150%] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-white"
                            >
                                Back
                            </Link>
                            <Link
                                to="/ticket"
                                className="bg-[#24A0B5] border border-[#24a0b5] hover:bg-[#08252b] hover:text-[#24A0B5] text-white leading-[150%] w-full p-3 text-center rounded-lg"
                            >
                                Get My Free Ticket
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AttendanceDetails;
