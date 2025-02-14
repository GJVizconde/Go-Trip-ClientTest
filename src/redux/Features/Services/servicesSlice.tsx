import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MainGlobal } from "@/redux/mainInterface";
import axios from "axios";
import { TokenUser } from "../Citys/CitySlice";
export interface Service {
    id: number
    name: string,
    status: boolean
}

export interface InitialStateService {
    dataService: Service[]
    copyDataService: Service[]
    status: string
    error: string | null
}

export const fetchingServices= createAsyncThunk("getServices", async () => {
    
    return await axios.get("/service", {
        headers: {
          Authorization: `Bearer ${TokenUser}`
        }
      })
    .then(response => response.data)
    
})



const serviceSlice = createSlice({
    name: "Service",
    initialState: {
        dataService: [], 
        copyDataService: [],
        status: "idle",
        error: null
    },
    reducers: {
      getServicesCoincidence: (state, action) => {
        state.copyDataService = state.dataService.filter(service =>  service.name == action.payload)
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchingServices.pending, (state) => {
            state.status = "pending"
        })
        .addCase(fetchingServices.fulfilled, (state, action) => {
            state.dataService = action.payload
           
            
        })
        .addCase(fetchingServices.rejected, (state, action) => {
            state.error = action.error.message || null
        })
    }
})



export default serviceSlice;
export const selectServiceState = (state: MainGlobal) => state.services.copyServiceData
export const { getServicesCoincidence } = serviceSlice.actions 