
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user:null,
    loading: false,
};

const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    },
});

export const {setUser,setLoading} = profileSlice.actions;
export default profileSlice.reducer;









// import {createSlice} from "@reduxjs/toolkit"


// const initialState={
//    user:null,
// }

// const profileSlice=createSlice({
//     name:"profile",
//     initialState:initialState,
//     reducers:{
//         setToken(state,value){
//            state.user =value.payload;
//         },
//     },
// });

// export const {setToken} =profileSlice.actions;
// export default profileSlice.reducer;