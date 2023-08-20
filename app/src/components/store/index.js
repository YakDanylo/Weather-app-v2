import {createSlice, configureStore, createAsyncThunk} from '@reduxjs/toolkit'

export const  getData = createAsyncThunk("city", async (city="London")=>
{
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6a1047a3684443bd964145825231808&q=${city}&days=7&aqi=no&alerts=no`)
    const data = await response.json();
    return data;
})
const dataSlice = createSlice({
    name:'data',
    initialState:{city:'',loading:true,error:null,showCity:false},
    extraReducers: (builder)=>
    {
        builder.addCase(getData.pending,(state,action)=>
        {
          state.loading=true;  
        })
        builder.addCase(getData.fulfilled,(state,action)=>
        {
            state.city=action.payload
            state.loading=false
            state.showCity=true;
        })
        builder.addCase(getData.rejected,(state,action)=>
        {
            state.error=true;
        })
    }
        
    
})

const store = configureStore({
    reducer: dataSlice.reducer
})

export const cityActions = dataSlice.actions;

export default store;