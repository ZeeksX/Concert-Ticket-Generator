import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const About = () => {
    return (
        <div className='flex flex-col w-full items-center min-h-screen mb-8'>
            <Header />
            <div className='border-[#0E464F] border bg-[#041E23] rounded-3xl w-1/2 max-w-[43.75rem] mt-6 p-12 text-white'>
                <h1 className='text-2xl font-bold mb-4'>About This Project</h1>
                <ul className='list-disc list-inside mb-4'>
                    <li>This project is built using <strong>React</strong>.</li>
                    <li>It utilizes <strong>Tailwind CSS</strong> for styling.</li>
                    <li>Material-UI is used for additional UI components.</li>
                    <li>It showcases a ticket booking system where users can book tickets and view attendance details.</li>
                    <li>The application is designed to be responsive and user-friendly, leveraging the power of modern web technologies.</li>
                </ul>
                <div className="flex flex-col-reverse mt-6 md:flex-row w-full justify-between gap-6 font-main leading-6">
                    <button className="bg-transparent text-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:bg-[#24a0b5] hover:text-white">
                        <a href="https://www.figma.com/community/file/1470800949188681164" target="_blank">Design File</a>
                    </button>
                    <button className="bg-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-[#24a0b5] hover:bg-transparent">
                        <a href="https://github.com/ayomikun-ade/TicketGenerator-HNG" target="_blank">GitHub Code</a>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default About;

