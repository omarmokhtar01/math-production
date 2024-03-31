import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
  userLogin:{},
  forgetPass:{},
  confirmMail:{},
  newPassword:{},
 
  isLoading: false,
  error: null,
}; 

const createLoginUser = createAsyncThunk('auth/login', async ({ formData, token }, thunkAPI) => {
  try {
    const response = await baseUrl.post(
      '/api/login_email',
      formData,
      {
        headers: {
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '*', // Update this with your whitelist domains
          'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With',
          'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Handle errors properly, you may want to throw the error instead of returning it
    throw error;
  }
});



const forgetPasswordUser = createAsyncThunk('forger/pass', async ({formData,token}, thunkAPI) => {
    try {
      const response = await baseUrl.post(
        ``,
        formData, // Include formData in the request
        {
            headers: {
                Authorization: `Bearer ${token}` // Include token in the request headers
            }
        });
        console.log(response.data);
      return response.data;
    } catch (error) {
      return error
    }
  });


const confirmEmailUser = createAsyncThunk('confirm/email', async ({formData,token}, thunkAPI) => {
    try {
      const response = await baseUrl.post(
        ``,
        formData, // Include formData in the request
        {
            headers: {
                Authorization:`Bearer ${token}`  // Include token in the request headers
            }
        });
        console.log(response.data);
      return response.data;
    } catch (error) {
      return error
    }
  });
 

  const createNewPassowrd = createAsyncThunk(
    'create/new-password',
    async ({ formData, token }, thunkAPI) => {
      try {
        const response = await baseUrl.post(
          '',
          formData,
          {
            // params: {
            //   current_password: formData.current_password,
            //   new_password: formData.new_password,
            //   new_password_confirmation: formData.new_password_confirmation
            // },
            headers: {
              Authorization:` Bearer ${token}` // Enclose the token interpolation in backticks
            }
          }
        );
        console.log(response);
        return response.data;
      } catch (error) {
        // You might want to handle errors more appropriately here
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  






const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder


      .addCase(createLoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createLoginUser.fulfilled, (state, action) => {
        state.userLogin = action.payload;
        state.isLoading = false;
        state.error = null;
        toast.success('تم تسجيل الدخول بنجاح')

      })
      .addCase(createLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error("حدث خطأ في تسجيل الدخول برجاء المحاولة مرة اخري")

      })

    



      .addCase(forgetPasswordUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgetPasswordUser.fulfilled, (state, action) => {
        state.forgetPass = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgetPasswordUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(confirmEmailUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(confirmEmailUser.fulfilled, (state, action) => {
        state.confirmMail = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(confirmEmailUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
	  

      .addCase(createNewPassowrd.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createNewPassowrd.fulfilled, (state, action) => {
        state.newPassword = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createNewPassowrd.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
	  

     
	  }}
      );
export { createLoginUser  , createNewPassowrd ,forgetPasswordUser , confirmEmailUser };

export default authSlice.reducer;