import { useEffect , useState, useRef  } from 'react';
import { useNavbar } from '@/components/NavBarTop/NavBarContext';
import { MoreHorizontal, MoreVertical, Pencil, Archive, BadgeCheck, Eye } from 'lucide-react';

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
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null); // Track which dropdown is open
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for each dropdown

  useEffect(() => {
    setNavbarTitle("Ticket");
    
  }, [setNavbarTitle]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openDropdownIndex !== null &&
        dropdownRefs.current[openDropdownIndex] &&
        !dropdownRefs.current[openDropdownIndex]?.contains(event.target as Node)
      ) {
        setOpenDropdownIndex(null);
      }
    };
    if (popupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownIndex]);

  const handlePopup = (content: string) => {
    setPopupContent(content);
    setPopupOpen(true);
  };

  

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Tabs + Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6 text-gray-500 font-medium">
          <button className="border-b-2 border-black pb-1 text-black">All</button>
          <button className="hover:text-black">Pending</button>
          <button className="hover:text-black">Approved</button>
          <button className="hover:text-black">Archived/Delivered</button>
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
            {/* Actions Dropdown */}
            <div
              className="relative"
              ref={(el) => (dropdownRefs.current[index] = el)} // Assign ref for each dropdown
            >
              <button
                onClick={() =>
                  setOpenDropdownIndex(openDropdownIndex === index ? null : index) // Toggle dropdown for this ticket
                }
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>

              {openDropdownIndex === index && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl z-10">
                  <ul className="py-1 text-sm">
                    <li>
                      <button
                        onClick={() => {
                          handlePopup("Request For Technical Support");
                          setOpenDropdownIndex(null);
                          
                        }}
                        
                        className="flex items-center w-full px-4 py-2 text-blue-600 hover:bg-blue-100 rounded-t-xl"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handlePopup("Archive User");
                          setOpenDropdownIndex(null);
                        }}
                        className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-100 rounded-b-xl"
                      >
                        <Archive className="w-4 h-4 mr-2" />
                        Archive
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Popup Modal */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-[3px] flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full text-center relative">
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✖
            </button>
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-blue-500" />
              Request for Technical Support
            </h2>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">#54321</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">GWI - Quezon Avenue</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">Technical</span>
            </div>

            <div className="flex items-center justify-between pt-5">
              <div className="flex items-center gap-x-4">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="Juan Dela Cruz"
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Juan Dela Cruz</span>
                  <span className="text-xs text-gray-500">14 April 08:30 PM (1 day ago)</span>
                </div>
              </div>
              <MoreVertical className="text-gray-400 cursor-pointer" />
          </div>
          <div className="text-sm text-gray-700 space-y-2 text-left my-5">
                <p>Dear GreatWorks Team,</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                </p>
                <p>Regards,<br />Juan Dela Cruz</p>
              </div>

              <div className="flex justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
              ACCEPT
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full">
              DECLINE
            </button>
          </div>

            
          </div>
          

          
        </div>

        

        
      )}
    </div>
  );
};

export default TicketPage;
