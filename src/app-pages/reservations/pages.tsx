import { useEffect } from 'react';
import { useNavbar } from '@/components/NavBarTop/NavBarContext';
import { MoreVertical } from 'lucide-react';
import { reservations } from './reservationprops';

export interface ReservationItem {
  name: string;
  seat: string;
  avatars: string[];
  color: string;
}

const statuses = [
  { label: 'Pending', color: 'red', count: 7 },
  { label: 'In Progress', color: 'orange', count: 4 },
  { label: 'Approved', color: 'green', count: 7 },
];

const ReservationsPage = () => {
  const { setNavbarTitle } = useNavbar();

  useEffect(() => {
    setNavbarTitle('Reservations');
  }, [setNavbarTitle]);

  const getBadgeColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-red-100 text-red-600';
      case 'In Progress':
        return 'bg-orange-100 text-orange-600';
      case 'Approved':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const generateAvatar = (name: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&bold=true`;

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statuses.map((status) => (
          <div key={status.label} className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{status.label}</h2>
            </div>

            {reservations
              .filter((res) => res.status === status.label)
              .map((res) => (
                <div key={res.time} className="mb-4">
                  {res.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 p-3 rounded-lg mb-2 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={generateAvatar(item.name)}
                          alt={item.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-medium">{item.name}</p>
                          <span className="text-xs text-gray-600">
                            Seat {item.seat} • {res.time}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${getBadgeColor(
                            res.status
                          )}`}
                        >
                          {res.status}
                        </span>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationsPage;
