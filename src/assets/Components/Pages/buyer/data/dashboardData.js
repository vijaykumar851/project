export const buyerCategories = [
  { id: 'vegetables', name: 'Fresh Vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80' },
  { id: 'fruits', name: 'Fresh Fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&auto=format&fit=crop&q=80' },
  { id: 'grains', name: 'Grains & Cereals', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&auto=format&fit=crop&q=80' },
  { id: 'dairy', name: 'Dairy Products', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&auto=format&fit=crop&q=80' },
  { id: 'spices', name: 'Spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&auto=format&fit=crop&q=80' },
  { id: 'pulses', name: 'Pulses', image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=300&auto=format&fit=crop&q=80' },
  { id: 'oils', name: 'Oils & Seeds', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&auto=format&fit=crop&q=80' },
  { id: 'organic', name: 'Organic Products', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&auto=format&fit=crop&q=80' },
  { id: 'flowers', name: 'Flowers', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=300&auto=format&fit=crop&q=80' },
]

export const buyerProducts = [
  {
    id: 'prod-1', name: 'Tomato', category: 'vegetables', price: 32, originalPrice: 38, unit: 'kg',
    farmerId: 'farmer-1', farmerName: 'Ramesh Reddy', farmLocation: 'Nalgonda, Telangana',
    rating: 4.6, reviewCount: 120, stock: 250, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=80',
    description: 'Farm-fresh country tomatoes harvested at optimal ripeness. Juicy, rich in lycopene, and pesticide-free.',
    isFeatured: true, isOrganic: true,
  },
  {
    id: 'prod-2', name: 'Green Chilli', category: 'vegetables', price: 48, originalPrice: 55, unit: 'kg',
    farmerId: 'farmer-2', farmerName: 'Lakshmi Devi', farmLocation: 'Warangal, Telangana',
    rating: 4.7, reviewCount: 96, stock: 140, image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=500&auto=format&fit=crop&q=80',
    description: 'Crisp and spicy desi green chillies. Handpicked directly from organic farms in Warangal.',
    isFeatured: true, isOrganic: true,
  },
  {
    id: 'prod-3', name: 'Onion', category: 'vegetables', price: 28, originalPrice: 34, unit: 'kg',
    farmerId: 'farmer-4', farmerName: 'Ravi Teja', farmLocation: 'Nizamabad, Telangana',
    rating: 4.5, reviewCount: 76, stock: 400, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&auto=format&fit=crop&q=80',
    description: 'Grade-A red onions with excellent shelf life and pungent flavor. Well cured and sun dried.',
    isFeatured: true, isOrganic: false,
  },
  {
    id: 'prod-4', name: 'Rice (Non-Basmati)', category: 'grains', price: 42, originalPrice: 48, unit: 'kg',
    farmerId: 'farmer-3', farmerName: 'Suresh Kumar', farmLocation: 'Medak, Telangana',
    rating: 4.4, reviewCount: 64, stock: 600, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80',
    description: 'Single-polish BPT Sona Masoori raw rice. Aged naturally for 12 months for fluffier grain.',
    isFeatured: true, isOrganic: true,
  },
  {
    id: 'prod-5', name: 'Fresh Cow Milk', category: 'dairy', price: 58, originalPrice: 65, unit: 'litre',
    farmerId: 'farmer-5', farmerName: 'Venkat Rao', farmLocation: 'Sangareddy, Telangana',
    rating: 4.8, reviewCount: 112, stock: 80, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=80',
    description: '100% pure unadulterated Gir cow milk delivered within hours of morning milking.',
    isFeatured: true, isOrganic: true,
  },
  {
    id: 'prod-6', name: 'Fresh Mangoes', category: 'fruits', price: 45, originalPrice: 60, unit: 'kg',
    farmerId: 'farmer-1', farmerName: 'Ramesh Reddy', farmLocation: 'Nalgonda, Telangana',
    rating: 4.9, reviewCount: 140, stock: 120, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop&q=80',
    description: 'Naturally carbide-free tree-ripened Banganapalli mangoes. Sweet aroma and tender pulp.',
    isFeatured: false, isDeal: true, discountPercent: 20, isOrganic: true,
  },
  {
    id: 'prod-7', name: 'Fresh Spinach (Palak)', category: 'vegetables', price: 20, originalPrice: 25, unit: 'bunch',
    farmerId: 'farmer-2', farmerName: 'Lakshmi Devi', farmLocation: 'Warangal, Telangana',
    rating: 4.7, reviewCount: 52, stock: 75, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=80',
    description: 'Crisp green organic spinach bunches picked at dawn, free of synthetic chemical sprays.',
    isFeatured: false, isOrganic: true,
  },
  {
    id: 'prod-8', name: 'Toor Dal (Unpolished)', category: 'pulses', price: 135, originalPrice: 155, unit: 'kg',
    farmerId: 'farmer-3', farmerName: 'Suresh Kumar', farmLocation: 'Medak, Telangana',
    rating: 4.6, reviewCount: 88, stock: 350, image: 'https://images.unsplash.com/photo-1585994192701-f1a505c817ea?w=500&auto=format&fit=crop&q=80',
    description: 'Naturally farmed unpolished desi pigeon peas (toor dal). High plant protein content.',
    isFeatured: false, isOrganic: true,
  },
  {
    id: 'prod-9', name: 'Pure Desi Ghee', category: 'dairy', price: 650, originalPrice: 750, unit: '500ml',
    farmerId: 'farmer-5', farmerName: 'Venkat Rao', farmLocation: 'Sangareddy, Telangana',
    rating: 4.9, reviewCount: 94, stock: 45, image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?w=500&auto=format&fit=crop&q=80',
    description: 'Traditional bilona method cultured A2 cow ghee with golden grains and heavenly aroma.',
    isFeatured: false, isOrganic: true,
  },
  {
    id: 'prod-10', name: 'Cold Pressed Groundnut Oil', category: 'oils', price: 210, originalPrice: 240, unit: 'litre',
    farmerId: 'farmer-4', farmerName: 'Ravi Teja', farmLocation: 'Nizamabad, Telangana',
    rating: 4.8, reviewCount: 65, stock: 90, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80',
    description: 'Wooden expeller pressed (chekku) unrefined peanut oil preserving natural nutrients.',
    isFeatured: false, isOrganic: true,
  },
]

export const buyerFarmers = [
  { id: 'farmer-1', name: 'Ramesh Reddy', location: 'Nalgonda, Telangana', rating: 4.8, reviewCount: 120, experience: '14 years', acres: 8.5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80', specialties: ['Country Tomatoes', 'Banganapalli Mangoes', 'Brinjals'], isVerified: true },
  { id: 'farmer-2', name: 'Lakshmi Devi', location: 'Warangal, Telangana', rating: 4.7, reviewCount: 280, experience: '11 years', acres: 6, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80', specialties: ['Spicy Green Chillies', 'Palak & Methi Greens', 'Curry Leaves'], isVerified: true },
  { id: 'farmer-3', name: 'Suresh Kumar', location: 'Medak, Telangana', rating: 4.6, reviewCount: 210, experience: '18 years', acres: 12, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80', specialties: ['Sona Masoori Rice', 'Unpolished Toor Dal', 'Millet Mixes'], isVerified: true },
  { id: 'farmer-4', name: 'Ravi Teja', location: 'Nizamabad, Telangana', rating: 4.5, reviewCount: 190, experience: '9 years', acres: 7, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80', specialties: ['Red Onions', 'Wood-Pressed Oils', 'Turmeric Roots'], isVerified: true },
  { id: 'farmer-5', name: 'Venkat Rao', location: 'Sangareddy, Telangana', rating: 4.8, reviewCount: 112, experience: '15 years', acres: 10, avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80', specialties: ['A2 Gir Cow Milk', 'Cultured Desi Ghee', 'Fresh Paneer'], isVerified: true },
]

export const buyerOrders = [
  { id: 'RM-84920', totalAmount: 436, currentStatus: 'Out for Delivery', date: '2026-10-25 10:30 AM' },
  { id: 'RM-84310', totalAmount: 1600, currentStatus: 'Delivered', date: '2026-10-21 09:15 AM' },
  { id: 'RM-83802', totalAmount: 610, currentStatus: 'Delivered', date: '2026-10-15 04:20 PM' },
  { id: 'RM-82911', totalAmount: 635, currentStatus: 'Delivered', date: '2026-10-08 11:00 AM' },
  { id: 'RM-81044', totalAmount: 445, currentStatus: 'Delivered', date: '2026-09-28 02:30 PM' },
]

export const buyerPriceTrends = [
  { date: 'Apr 19', Tomato: 26, Onion: 20, 'Green Chilli': 43 },
  { date: 'Apr 20', Tomato: 29, Onion: 23, 'Green Chilli': 45 },
  { date: 'Apr 21', Tomato: 34, Onion: 25, 'Green Chilli': 41 },
  { date: 'Apr 22', Tomato: 30, Onion: 24, 'Green Chilli': 44 },
  { date: 'Apr 23', Tomato: 35, Onion: 27, 'Green Chilli': 46 },
  { date: 'Apr 24', Tomato: 33, Onion: 27, 'Green Chilli': 49 },
  { date: 'Apr 25', Tomato: 32, Onion: 28, 'Green Chilli': 48 },
]

export const mockCategories = buyerCategories.map((category) => ({
  ...category,
  slug: category.id,
}))

export const mockProducts = buyerProducts
export const mockFarmers = buyerFarmers
export const mockOrders = buyerOrders.map((order, index) => {
  const product = mockProducts[index % mockProducts.length]
  const quantity = index + 1

  return {
    ...order,
    items: [{
      ...product,
      quantity,
      total: product.price * quantity,
    }],
    deliveryAddress: {
      name: 'Arjun Sharma',
      phone: '+91 98765 43210',
      addressLine: '12 Green Park Colony',
      city: 'Hyderabad',
      pincode: '500034',
    },
    paymentMethod: 'UPI',
    paymentStatus: 'Paid',
    timeline: [
      { time: order.date },
      { time: order.date },
      { time: order.date },
      ...(order.currentStatus === 'Delivered' ? [{ time: order.date }] : []),
    ],
  }
})
export const mockPriceTrends7Days = buyerPriceTrends

export const mockPriceTrends30Days = [
  { date: 'Week 1', Tomato: 24, Onion: 22, 'Green Chilli': 40 },
  { date: 'Week 2', Tomato: 27, Onion: 24, 'Green Chilli': 42 },
  { date: 'Week 3', Tomato: 31, Onion: 26, 'Green Chilli': 45 },
  { date: 'Week 4', Tomato: 32, Onion: 28, 'Green Chilli': 48 },
]

export const mockPriceTrends3Months = [
  { date: 'Feb', Tomato: 22, Onion: 20, 'Green Chilli': 38 },
  { date: 'Mar', Tomato: 28, Onion: 24, 'Green Chilli': 44 },
  { date: 'Apr', Tomato: 32, Onion: 28, 'Green Chilli': 48 },
]
