
  import { authApi } from "@/redux/api/auth/authApi";
  import { RootState } from "@/redux/store";
  import { Auth } from "@/types/auth/auth.type";
import { Datastore } from "@/types/datastore/datastore.type";
  import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  
  let token: Auth.LoginResponse = {};
  
  if (typeof window !== "undefined") {
   
  }
  
  const initialState: Datastore.InitialState = {
    records: [
        {
            id:"rec_clu1b20rdbj37sq67640",
            new1: "across too",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        },
        {
            id:"rec_clu1b20rdbj37sq6764g",
            new1: "creamy linen",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        },
        {
            id:"rec_clu1b20rdbj37sq67650",
            new1: "likely by",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        },
        {
            id:"rec_clu1b20rdbj37sq6765g",
            new1: "inculcate kohlrabi",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        },
        {
            id:"rec_clu1b20rdbj37sq67660",
            new1: "bruised handsaw",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        },
        {
            id:"rec_clu1b20rdbj37sq6766g",
            new1: "ick sedate",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        },
        {
            id:"rec_clu1b20rdbj37sq67670",
            new1: "gosh dim",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        },
        {
            id:"rec_clu1b20rdbj37sq6767g",
            new1: "because yuck",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        },
        {
            id:"rec_clu1b20rdbj37sq67680",
            new1: "reprimand cautious",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        },
        {
            id:"rec_clu1b20rdbj37sq6768g",
            new1: "wrathful at",
            xata: {
                createdAt: "2023-12-15T08:59:52.459245Z",
                updatedAt: "2023-12-15T08:59:52.459245Z",
                version: 0
            }
        }
    ]
};
  

  
  export const datastoreSlice = createSlice({
    name: "datastore",
    initialState,
    reducers: {
      getDatastores: () => initialState,
      setDatastores: (state, action: PayloadAction<Datastore.Record[]>) => {
        state.records = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
       
    },
  });
  
  export const { getDatastores } = datastoreSlice.actions;
  
  export const selectAuthResponse = (state: RootState) => state?.authSlice;
  
  export default datastoreSlice.reducer;
  