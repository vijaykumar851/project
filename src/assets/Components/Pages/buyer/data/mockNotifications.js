export const mockAddresses = [
  {
    id: 'addr-home',
    type: 'Home',
    name: 'Arjun Sharma',
    phone: '+91 98765 43210',
    addressLine: '12 Green Park Colony',
    landmark: 'Near Community Park',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500034',
    isDefault: true,
  },
];

export const mockNotifications = [
  {
    id: 'notification-order',
    type: 'order',
    title: 'Your order is out for delivery',
    message: 'Your fresh produce order is on its way.',
    time: 'Today',
    link: '/buyer/orders',
    read: false,
  },
  {
    id: 'notification-price',
    type: 'price',
    title: 'Market prices updated',
    message: 'See the latest prices for produce in your area.',
    time: 'Yesterday',
    link: '/buyer/price-trends',
    read: true,
  },
];

export const mockMessages = [
  {
    farmerId: 'farmer-1',
    farmerName: 'Ramesh Reddy',
    farmerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    lastMessage: 'The tomatoes were harvested this morning.',
    lastTime: '10:30 AM',
    unread: 1,
    conversation: [
      { id: 'message-1', sender: 'farmer', text: 'Hello! How can I help with your order?', time: '10:20 AM' },
      { id: 'message-2', sender: 'buyer', text: 'When were the tomatoes harvested?', time: '10:25 AM' },
      { id: 'message-3', sender: 'farmer', text: 'The tomatoes were harvested this morning.', time: '10:30 AM' },
    ],
  },
];
