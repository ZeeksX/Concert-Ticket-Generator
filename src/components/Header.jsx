import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Header = () => {
    return (
        <div className='flex flex-row w-4/5 justify-between p-4 items-center h-[4.75rem] mt-6 border border-[#197686] rounded-3xl'>
            <div className='flex items-center'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='flex justify-between '>
                <ul className='flex flex-row justify-between gap-4 w-80'>
                    <Link to="/">Events</Link>
                    <Link to="/my-tickets">My Tickets</Link>
                    <Link to="/about">About Project</Link> 
                </ul>
            </div>
            <div className='flex items-center justify-center'>
                <button className='flex flex-row text-black px-5 h-[52px] items-center justify-center bg-white rounded-xl mr-2 cursor-pointer'>MY TICKETS <ArrowForwardIcon sx={{ marginLeft: "8px" }} /> </button>
            </div>
        </div>
    )
}

export default Header