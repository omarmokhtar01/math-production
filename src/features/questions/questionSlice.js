import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";
import { toast } from 'react-hot-toast';

const initialState = {
   questionData:[],
   deleteOne:[],
   createQuestion:[],
   editQuestion:[],
   traingTypes:[],
   levelType:[],
   levelCat:[],
   isLoadingTrainingTypes:false,
    isLoading: false,
    error: null,
  };
  
  
   
  const getAllquestions = createAsyncThunk('get/question', async (_, thunkAPI) => {
      try {
        const response = await baseUrl.get(
          '/api/questions'
        //   , {
        //     headers: {
        //         Authorization:` Bearer ${token}` // Include token in the request headers
        //     }
        // }
        );
          console.log(response);
          console.log(response.data);
        return response.data;
      } catch (error) {
        return error
      }
    });

  
    const removeOneQuestion = createAsyncThunk('del/OneQuestion-id', async (id, thunkAPI) => {
        try {
          const response = await baseUrl.delete(
            `/api/questions/${id}`
        //     ,        { headers: { Authorization: Bearer ${token} } 
        // } 
            );
            console.log(response);
            console.log(response.data);
          return response.data;
        } catch (error) {
          return error
        }
      });
  
  
      const createOneQuestion = createAsyncThunk('create/question', async (formData, thunkAPI) => {
        try {
          const response = await baseUrl.post(
           `/api/questions`,
            formData
            // , 
            // { headers: {
            //         Authorization: Bearer ${token} // Include token in the request headers
            //     }
            // }
            );
            console.log(response.data);
          return response.data;
        } catch (error) {
          return error
        }
      });

      const EditOneQuestion = createAsyncThunk('edit/question', async ({ formData, id }, thunkAPI) => {
        try {
          const response = await baseUrl.put(
            `/api/questions/${id}`,
            formData
            // Include headers if needed
            // {
            //   headers: {
            //     Authorization: `Bearer ${token}`
            //   }
            // }
          );
          console.log(response.data);
          return response.data;
        } catch (error) {
          // Handle errors appropriately, e.g., logging or throwing
          throw error;
        }
      });

      const getTrainingTypes = createAsyncThunk('get/training-type', async (_, thunkAPI) => {
        try {
          const response = await baseUrl.get(
            '/api/training_types'
          //   , {
          //     headers: {
          //         Authorization:` Bearer ${token}` // Include token in the request headers
          //     }
          // }
          );
            console.log(response);
            console.log(response.data);
          return response.data;
        } catch (error) {
          return error
        }
      });

      const getTypeLevels = createAsyncThunk('get/level-type', async (_, thunkAPI) => {
        try {
          const response = await baseUrl.get(
            '/api/type_levels'
          //   , {
          //     headers: {
          //         Authorization:` Bearer ${token}` // Include token in the request headers
          //     }
          // }
          );
            console.log(response);
            console.log(response.data);
          return response.data;
        } catch (error) {
          return error
        }
      });


      const getTypeCategory = createAsyncThunk('get/level-cat', async (_, thunkAPI) => {
        try {
          const response = await baseUrl.get(
            '/api/level_categories'
          //   , {
          //     headers: {
          //         Authorization:` Bearer ${token}` // Include token in the request headers
          //     }
          // }
          );
            console.log(response);
            console.log(response.data);
          return response.data;
        } catch (error) {
          return error
        }
      });


    const questionSlice = createSlice({
        name: 'question',
      
        initialState,
        reducers: {},
        extraReducers: (builder) => {
          builder
            .addCase(getAllquestions.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(getAllquestions.fulfilled, (state, action) => {
              state.questionData = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(getAllquestions.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            
  
            .addCase(removeOneQuestion.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(removeOneQuestion.fulfilled, (state, action) => {
              state.deleteOne = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(removeOneQuestion.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })


            .addCase(createOneQuestion.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(createOneQuestion.fulfilled, (state, action) => {
              state.createQuestion = action.payload;
              state.isLoading = false;
              state.error = null;
              
            })
            .addCase(createOneQuestion.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;

            })
            

            .addCase(EditOneQuestion.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(EditOneQuestion.fulfilled, (state, action) => {
              state.editQuestion = action.payload;
              state.isLoading = false;
              state.error = null;
              toast.success('تم تعديل السؤال بنجاح')

            })
            .addCase(EditOneQuestion.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            

            .addCase(getTrainingTypes.pending, (state) => {
              state.isLoadingTrainingTypes = true;
              state.error = null;
            })
            .addCase(getTrainingTypes.fulfilled, (state, action) => {
              state.traingTypes = action.payload;
              state.isLoadingTrainingTypes = false;
              state.error = null;
            })
            .addCase(getTrainingTypes.rejected, (state, action) => {
              state.isLoadingTrainingTypes = false;
              state.error = action.payload;
            })
            
  
            .addCase(getTypeLevels.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(getTypeLevels.fulfilled, (state, action) => {
              state.levelType = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(getTypeLevels.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            
  
            .addCase(getTypeCategory.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(getTypeCategory.fulfilled, (state, action) => {
              state.levelCat = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(getTypeCategory.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            
  
  
           

            }}
            );
      export { getAllquestions , removeOneQuestion , createOneQuestion , EditOneQuestion , getTrainingTypes ,getTypeLevels 
        ,getTypeCategory };
      
      export default questionSlice.reducer;