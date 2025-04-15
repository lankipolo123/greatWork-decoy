import { useEffect, useState, useRef } from 'react';
import { useNavbar } from '@/components/NavBarTop/NavBarContext';
import { MoreHorizontal, Pencil, Archive } from 'lucide-react';
import ImageBuild from '@/assets/Sung Jinwoo-1.png';

const UserPage = () => {
  const { setNavbarTitle } = useNavbar();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    setNavbarTitle("Admin");
  }, [setNavbarTitle]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePopup = (content: string) => {
    setPopupContent(content);
    setPopupOpen(true);
  };

  return (
    <div className="bg-white min-h-screen p-6 items-center overflow-x-scroll">
      {/* Tabs + Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6 text-gray-500 font-medium">
          <button className="border-b-2 border-black pb-1 text-black">Admin</button>
          <button className="hover:text-black">User</button>
          <button className="hover:text-black">Archived</button>
        </div>
        <button className="border px-4 py-1 rounded-md text-sm text-gray-600 hover:bg-gray-100">Filter</button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-7 text-xs text-gray-500 font-semibold px-4 py-2 border-b border-gray-300 pb-5">
        <div>User ID</div>
        <div className="col-span-2">Username/Email</div>
        <div>Role</div>
        <div>Location Assigned</div>
        <div>Last Login Time</div>
        <div>Actions</div>
      </div>

      {/* Table Row */}
      <div className="grid grid-cols-7 text-xs text-gray-500 font-semibold px-4 py-5 border-b border-gray-300 items-center relative">
        <div>#1</div>

        <div className="flex items-center space-x-4 col-span-2">
          <img src={ImageBuild} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Admin@example.com</h4>
            <p className="text-xs text-gray-500">Lorem Epsum......</p>
          </div>
        </div>

        <div><span className="bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md">Admin</span></div>
        <div><span className="bg-red-800 text-white text-sm font-semibold px-4 py-1 rounded-md">GW2</span></div>
        <div>2025-04-14</div>

        {/* Actions Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl z-10">
              <ul className="py-1 text-sm">
                <li>
                  <button
                    onClick={() => {
                      handlePopup("Edit User");
                      setDropdownOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-blue-600 hover:bg-blue-100 rounded-t-xl"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                  </button>
                </li>
                <li>
                  <button className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-100 rounded-b-xl">
                    <Archive className="w-4 h-4 mr-2" />
                    Archive
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {popupOpen && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full text-center relative">
      <button
        onClick={() => setPopupOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        ✖
      </button>
      <h2 className="text-2xl font-bold mb-4">{popupContent}</h2>
      <p className="mb-6 text-lg">This is a popup for the selected action.</p>
      <img src={ImageBuild} alt="Hunter Sung" className="w-40 h-40 mx-auto mb-6 rounded-full object-cover" />
      <button
        onClick={() => setPopupOpen(false)}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default UserPage;