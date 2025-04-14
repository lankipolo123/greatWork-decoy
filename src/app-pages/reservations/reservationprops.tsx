export type ReservationStatus = 'Pending' | 'In Progress' | 'Approved';

export interface ReservationItemDetails {
  name: string;
  seat: string;
  avatars: string[];
  color: string;
}

export interface ReservationItem {
  time: string;
  status: ReservationStatus;
  items: ReservationItemDetails[];
}

export const reservations: ReservationItem[] = [
  {
    time: '4:00 AM',
    status: 'Approved',
    items: [{ name: 'Aiden Brooks', seat: '#11', avatars: [], color: 'indigo' }],
  },
  {
    time: '11:30 PM',
    status: 'Approved',
    items: [{ name: 'Aria Garcia', seat: '#23', avatars: [], color: 'yellow' }],
  },
  {
    time: '4:00 AM',
    status: 'Pending',
    items: [{ name: 'John Doe', seat: '#12', avatars: [], color: 'rose' }],
  },
  {
    time: '10:00 PM',
    status: 'In Progress',
    items: [{ name: 'Isaac Moore', seat: '#16', avatars: ['7'], color: 'lime' }],
  },
  {
    time: '5:30 PM',
    status: 'Approved',
    items: [{ name: 'Carlos Vega', seat: '#28', avatars: ['3'], color: 'sky' }],
  },
  {
    time: '5:00 AM',
    status: 'Pending',
    items: [{ name: 'Liam Cortez', seat: '#24', avatars: ['9', '11'], color: 'green' }],
  },
  {
    time: '10:00 AM',
    status: 'Approved',
    items: [{ name: 'Adriana Galvan', seat: '#18', avatars: [], color: 'cyan' }],
  },
  {
    time: '11:30 AM',
    status: 'Pending',
    items: [{ name: 'Noah Turner', seat: '#19', avatars: [], color: 'emerald' }],
  },
  {
    time: '9:00 AM',
    status: 'In Progress',
    items: [{ name: 'Aria Garcia', seat: '#28', avatars: [], color: 'sky' }],
  },
  {
    time: '1:30 AM',
    status: 'Approved',
    items: [{ name: 'Selah Washington', seat: '#20', avatars: [], color: 'gray' }],
  },
  {
    time: '2:30 AM',
    status: 'Pending',
    items: [{ name: 'Aiden Brooks', seat: '#29', avatars: ['4', '5'], color: 'amber' }],
  },
  {
    time: '8:00 AM',
    status: 'In Progress',
    items: [{ name: 'Marcus Li', seat: '#10', avatars: ['1'], color: 'fuchsia' }],
  },
  {
    time: '11:30 AM',
    status: 'Approved',
    items: [{ name: 'Emily Cruz', seat: '#30', avatars: [], color: 'rose' }],
  },
  {
    time: '2:30 AM',
    status: 'Pending',
    items: [{ name: 'Felipe Wong', seat: '#21', avatars: ['2'], color: 'blue' }],
  },
  {
    time: '10:30 PM',
    status: 'Approved',
    items: [{ name: 'Alexandria Trejo', seat: '#18', avatars: [], color: 'violet' }],
  },
  {
    time: '10:30 AM',
    status: 'In Progress',
    items: [{ name: 'Chloe Brooks', seat: '#22', avatars: ['6'], color: 'purple' }],
  },
  {
    time: '5:00 AM',
    status: 'Pending',
    items: [{ name: 'Samira Khan', seat: '#26', avatars: [], color: 'orange' }],
  },
  {
    time: '11:30 PM',
    status: 'Approved',
    items: [{ name: 'Leo Smith', seat: '#14', avatars: ['8'], color: 'teal' }],
  },
  {
    time: '8:30 PM',
    status: 'In Progress',
    items: [{ name: 'Nina Bell', seat: '#23', avatars: [], color: 'gray' }],
  },
  {
    time: '8:00 AM',
    status: 'Pending',
    items: [{ name: 'Luna Ortiz', seat: '#12', avatars: [], color: 'pink' }],
  },
];
