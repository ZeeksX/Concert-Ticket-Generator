import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import html2canvas from "html2canvas";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(savedTickets);
  }, []);

  const handleDownloadClick = (ticketId) => {
    const ticketElement = document.getElementById(`ticket-${ticketId}`);
    html2canvas(ticketElement, { backgroundColor: null }).then((canvas) => {
      const link = document.createElement("a");
      link.download = `ticket-${ticketId}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className="flex flex-col w-full items-center min-h-screen">
      <Header />
      <div className="max-w-[800px] w-full p-6 md:p-10">
        <h1 className="text-2xl font-bold text-center mb-6">My Tickets</h1>
        {tickets.length === 0 ? (
          <p className="text-center text-gray-500">No tickets found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tickets.map((ticket, index) => (
              <div
                key={index}
                id={`ticket-${index}`}
                className="p-4 border border-gray-600 rounded-lg bg-gray-900 text-white"
              >
                <h2 className="text-lg font-semibold">{ticket.eventName}</h2>
                <p className="text-sm text-gray-400">{ticket.date} | {ticket.time}</p>
                <p><strong>Name:</strong> {ticket.name}</p>
                <p><strong>Email:</strong> {ticket.email}</p>
                <p><strong>Ticket Type:</strong> {ticket.ticketType}</p>
                <p><strong>Tickets:</strong> {ticket.numTickets}</p>
                <button
                  onClick={() => handleDownloadClick(index)}
                  className="mt-3 bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600"
                >
                  Download Ticket
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
