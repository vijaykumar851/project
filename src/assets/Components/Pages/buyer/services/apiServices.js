import { mockOrders } from '../data/dashboardData.js';

export const orderApi = {
  async create(orderData) {
    const order = {
      ...orderData,
      id: `RM-${Date.now()}`,
      currentStatus: 'Processing',
      date: new Date().toLocaleString('en-IN'),
      timeline: [],
    };

    mockOrders.unshift(order);
    return order;
  },
};
