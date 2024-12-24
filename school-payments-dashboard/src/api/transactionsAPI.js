import axiosInstance from './axiosInstance';

export const fetchTransactions = async (params) => {
  const response = await axiosInstance.get('/transactions', { params });
  return response.data;
};

export const fetchTransactionBySchool = async (schoolId) => {
  const response = await axiosInstance.get(`/transactions/school/${schoolId}`);
  return response.data;
};

export const checkTransactionStatus = async (customOrderId) => {
  const response = await axiosInstance.get('/transactions/status', {
    params: { custom_order_id: customOrderId },
  });
  return response.data;
};
