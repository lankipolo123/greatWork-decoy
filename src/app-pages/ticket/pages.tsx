import { useEffect } from 'react';
import { useNavbar } from '@/components/NavBarTop/NavBarContext';
import { MoreHorizontal } from 'lucide-react';

// Define types for ticket type and status
type TicketType = 'Technical' | 'Cleaning' | 'Accounts';
type TicketStatus = 'Pending' | 'On-going';

// Define the tickets array
const tickets = Array.from({ length: 10 }, (_, i) => ({
  name: 'Mr. Juan Dela Cruz',
  description: 'Like a small boat, on the ocean...',
  type: i === 2 ? 'Accounts' : i === 1 ? 'Cleaning' : 'Technical',
  ticketNo: '#12345',
  dateRequested: 'March 15, 2025',
  approvedBy: 'John Doe',
  lastUpdate: 'March 15, 2025',
  status: i === 1 || i === 2 ? 'Pending' : 'On-going',
}));

// Define badgeColor and statusColor objects with specific keys
const badgeColor: Record<TicketType, string> = {
  Technical: 'bg-gray-100 text-gray-600',
  Cleaning: 'bg-blue-100 text-blue-600',
  Accounts: 'bg-green-100 text-green-600',
};

const statusColor: Record<TicketStatus, string> = {
  Pending: 'bg-gray-200 text-gray-600',
  'On-going': 'bg-yellow-200 text-yellow-800',
};

const TicketPage = () => {
  const { setNavbarTitle } = useNavbar();

  useEffect(() => {
    setNavbarTitle("Ticket");
  }, [setNavbarTitle]);

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Tabs + Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6 text-gray-500 font-medium">
          <button className="border-b-2 border-black pb-1 text-black">Open</button>
          <button className="hover:text-black">Pending</button>
          <button className="hover:text-black">All</button>
        </div>
        <button className="border px-4 py-1 rounded-md text-sm text-gray-600 hover:bg-gray-100">Filter</button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-7 text-xs text-gray-500 font-semibold px-4 py-2 border-b border-gray-300">
        <div className="col-span-2">Name</div>
        <div>Ticket No.</div>
        <div>Date Requested</div>
        <div>Approved by</div>
        <div>Last Update</div>
        <div className="text-right">Status</div>
      </div>

      {/* Table Rows */}
      {tickets.map((ticket, index) => (
        <div
          key={index}
          className="grid grid-cols-7 items-center text-sm px-4 py-4 border-b border-gray-200 hover:bg-white transition"
        >
          {/* Name + Badge + Description */}
          <div className="col-span-2 flex flex-col">
            <div className="flex items-center gap-2 font-medium">
              {ticket.name}
              <span className={`text-[10px] px-2 py-[2px] rounded-full ${badgeColor[ticket.type as TicketType]}`}>
                {ticket.type}
              </span>
            </div>
            <div className="text-xs text-gray-400">{ticket.description}</div>
          </div>

          {/* Ticket Details */}
          <div>{ticket.ticketNo}</div>
          <div>{ticket.dateRequested}</div>
          <div>{ticket.approvedBy}</div>
          <div>{ticket.lastUpdate}</div>

          {/* Status + Actions */}
          <div className="flex items-center justify-end gap-2">
            <span
              className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[ticket.status as TicketStatus]}`}
            >
              {ticket.status}
            </span>
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketPage;
