import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API;

interface IinitialStateType {
  product: Todo[];
}

const initialState: IinitialStateType = {
  product: [],
};

export const post: any = createAsyncThunk("API/post", async (newData: Todo) => {
  try {
    let res = await axios.post(API, newData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const get: any = createAsyncThunk("API/get", async () => {
  try {
    let res = await axios(API);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const delet: any = createAsyncThunk(
  "API/delete",
  async (_id: TODO.deleteN) => {
    try {
      let res = await axios.delete(`${API}/${_id}`);
      return res.data;
    } catch (error) {}
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(post.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(delet.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export const {} = ProductSlice.actions;
export default ProductSlice.reducer;
