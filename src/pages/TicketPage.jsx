import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";

const TicketPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [specialRequest, setSpecialRequest] = useState("");
    const [ticketType, setTicketType] = useState("Free");
    const [numTickets, setNumTickets] = useState(1);
    const [profilePictureUrl, setProfilePictureUrl] = useState("");

    useEffect(() => {
        const savedName = localStorage.getItem("name");
        const savedEmail = localStorage.getItem("email");
        const savedRequest = localStorage.getItem("specialRequest");
        const savedTicketType = localStorage.getItem("ticketType");
        const savedNumTickets = localStorage.getItem("numTickets");
        const savedProfilePictureUrl = localStorage.getItem("profilePictureUrl");

        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
        if (savedRequest) setSpecialRequest(savedRequest);
        if (savedTicketType) setTicketType(savedTicketType);
        if (savedNumTickets) setNumTickets(Number(savedNumTickets)); // Ensure it's a number
        if (savedProfilePictureUrl) setProfilePictureUrl(savedProfilePictureUrl);
    }, []);

    const handleDownloadClick = () => {
        const ticketElement = document.getElementById("ticket");
        html2canvas(ticketElement, { backgroundColor: null }).then((canvas) => {
            const link = document.createElement("a");
            link.download = "ticket.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    };

    return (
        <div className="flex flex-col w-full items-center min-h-screen">
            <Header />
            <div className="bg-[#041e23] text-white flex flex-col items-center max-w-[700px] w-full py-8 px-6 md:p-12 mb-10 md:mb-36 mt-10 rounded-[24px] border border-[#0e464f]">
                <div className="flex flex-row justify-between w-full items-center">
                    <h1 className="text-[32px]">Ready</h1>
                    <span className="font-[roboto] text-base">Step 3/3</span>
                </div>
                <div className="w-full h-1 bg-[#0E464F] rounded-[5px]">
                    <div className="w-2/5 h-1 bg-[#24A0B5] rounded-[5px]"></div>
                </div>
                <section className="flex flex-col gap-3 md:gap-4 mt-8 text-center">
                    <h1 className="alatsi text-2xl md:text-[32px] leading-normal">
                        Your Ticket is Booked!
                    </h1>
                    <p className="roboto text-base">
                        Check your email for a copy or you can
                        <span className="font-bold"> download</span>
                    </p>
                </section>
                <section id="ticket" className="p-6 w-[300px] h-[600px] flex flex-col justify-between items-center bg-[url('/src/assets/bg.png')]">
                    <div className="w-[260px] h-[446px] p-[14px] flex flex-col items-center gap-5 rounded-2xl border border-[#24a0b5] bg-[#031E211A] backdrop-blur-[2px]">
                        <div className="text-center w-[175px]">
                            <h1 className="road-rage flex justify-center text-[34px]">
                                Techember Fest &#8221;25
                            </h1>
                            <div className="p-1 flex flex-col text-[10px] leading-[15px] font-step justify-center items-center gap-1">
                                <p className="roboto">📍 04 Rumens road, Ikoyi, Lagos</p>
                                <p className="roboto">📅 March 15, 2025 | 7:00 PM</p>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: profilePictureUrl ? `url(${profilePictureUrl})` : "none",
                            }}
                            className={`w-[140px] h-[140px] rounded-xl border-4 border-[#24A0B580] bg-center bg-cover ${profilePictureUrl ? "" : "bg-gray-700 flex items-center justify-center text-sm"
                                }`}
                        >
                            {!profilePictureUrl && <span>No Image</span>}
                        </div>
                        <div className="w-full h-fit p-1 text-[10px] font-step rounded-lg border border-[#133d44] bg-[#08343c]">
                            <div className="grid grid-cols-2 justify-between border-b border-[#12464E]">
                                <p className="flex flex-col justify-center gap-1 p-1">
                                    <span className="opacity-[0.33]">Name</span>
                                    <span className="text-xs font-bold">{name || "N/A"}</span>
                                </p>
                                <p className="pl-2 border-l border-[#12464e] flex flex-col justify-center gap-1 p-1">
                                    <span className="opacity-[0.33]">Email</span>
                                    <span className="text-xs font-bold">{email || "N/A"}</span>
                                </p>
                            </div>
                            <div className="grid grid-cols-2 justify-between border-b border-[#12464E]">
                                <p className="flex flex-col justify-center gap-1 p-1">
                                    <span className="opacity-[0.33]">Ticket Type</span>
                                    <span className="text-xs font-bold">{ticketType}</span>
                                </p>
                                <p className="pl-2 border-l border-[#12464e] flex flex-col justify-center gap-1 p-1">
                                    <span className="opacity-[0.33]">No. of Tickets</span>
                                    <span className="text-xs font-bold">{numTickets}</span>
                                </p>
                            </div>
                            <div className="col-span-2 p-2 flex flex-col gap-1">
                                <p className="opacity-[0.33]">Special Request</p>
                                <p className="text-[10px] leading-[15px]">{specialRequest || "None"}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-[236px] h-[68px] border">
                    <img src="/Bar Code.png" alt="Barcode" className="w-full h-full object-contain" />
                </div>
                <section className="flex flex-col-reverse mt-6 md:flex-row w-full justify-between gap-6 font-main leading-6">
                    <Link
                        to="/"
                        className="bg-transparent text-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:bg-[#24a0b5] hover:text-white"
                    >
                        Book Another Ticket
                    </Link>
                    <button
                        onClick={handleDownloadClick}
                        className="bg-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-[#24a0b5] hover:bg-transparent"
                    >
                        Download Ticket
                    </button>
                </section>
            </div>
        </div>
    );
};

export default TicketPage;
