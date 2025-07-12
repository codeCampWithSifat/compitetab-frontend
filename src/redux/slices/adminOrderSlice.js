import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

// fetch all orders only for admin
// export const fetchAllOrders = createAsyncThunk(
//   "adminOrders/fetchAllOrders",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${API_URL}/api/admin/orders`, {
//         headers: {
//           Authorization: USER_TOKEN,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const fetchAllOrders = createAsyncThunk(
  "adminOrders/fetchAllOrders",
  async (DO_NOT_USE_ActionTypes, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/orders`, {
        headers: {
          Authorization: USER_TOKEN,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update Order Delivery Status
export const updateOrderStatus = createAsyncThunk(
  "adminOrders/upateOrderStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/admin/orders/${id}`,
        { status },
        {
          headers: {
            Authorization: USER_TOKEN,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete A Order
export const deleteOrder = createAsyncThunk(
  "adminOrders/deleteOrder",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/api/admin/orders/${id}`, {
        headers: {
          Authorization: USER_TOKEN,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminOrderSlice = createSlice({
  name: "adminOrders",
  initialState: {
    orders: [],
    totalOrders: 0,
    totalSales: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch All Orders
      .addCase(fetchAllOrders.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.totalOrders = action.payload.length;

        //  Calculate Total Sales
        const totalSales = action.payload.reduce(
          (acc, order) => acc + order.totalPrice,
          0
        );
        state.totalSales = totalSales;
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      //   Update Order Status
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const orderIndex = state.orders.findIndex(
          (order) => order._id === updatedOrder._id
        );

        if (orderIndex !== -1) {
          state.orders[orderIndex] = action.payload;
        }
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      //  Delete Order
      .addCase(deleteOrder.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload
        );
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default adminOrderSlice.reducer;
