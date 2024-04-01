import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../Api/baseURL";

const initialState = {
   trainTypeData:[],
   typeLevelData:[],
   levelCategoryData:[],

    isLoading: false,
    error: null,
  };
  
  
   
  const createTrainningType = createAsyncThunk('create/traintype', async (formData, thunkAPI) => {
    try {
      const response = await baseUrl.post(
       `/api/training_types`,
        formData
        // , 
        // { headers: {
        //         Authorization: Bearer ${token} // Include token in the request headers
        //     }
        // }
        );
        console.log('formData:', formData); // Check formData received

        console.log(response.data);
      return response.data;
    } catch (error) {
      return error
    }
  });

  const createLevelCategory = createAsyncThunk('create/levelCategory', async (formData, thunkAPI) => {
    try {
      const response = await baseUrl.post(
       `api/level_categories`,
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

  const createTypeLevel = createAsyncThunk('create/typelevel', async (formData, thunkAPI) => {
    try {
      const response = await baseUrl.post(
       `api/type_levels`,
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



    const excelSlice = createSlice({
        name: 'excel',
      
        initialState,
        reducers: {},
        extraReducers: (builder) => {
          builder

            .addCase(createTrainningType.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(createTrainningType.fulfilled, (state, action) => {
              state.createQuestion = action.payload;
              state.isLoading = false;
              state.error = null;
              
            })
            .addCase(createTrainningType.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })


            .addCase(createTypeLevel.pending, (state) => {
                state.isLoading = true;
                state.error = null;
              })
              .addCase(createTypeLevel.fulfilled, (state, action) => {
                state.createQuestion = action.payload;
                state.isLoading = false;
                state.error = null;
                
              })
              .addCase(createTypeLevel.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
              })


              .addCase(createLevelCategory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
              })
              .addCase(createLevelCategory.fulfilled, (state, action) => {
                state.createQuestion = action.payload;
                state.isLoading = false;
                state.error = null;
                
              })
              .addCase(createLevelCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
              })
            

           
  
  
           

            }}
            );
      export { createLevelCategory,createTrainningType,createTypeLevel };
      
      export default excelSlice.reducer;