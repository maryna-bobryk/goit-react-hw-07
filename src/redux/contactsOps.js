import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { showError } from '../services/toastifyAlert';

axios.defaults.baseURL = 'https://68167ace26a599ae7c37fba3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);
      return response.data;
    } catch (error) {
      // showError('Something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', body);
      return response.data;
    } catch (error) {
      // showError('Error when adding the contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      // showError('Error when deleting the contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
