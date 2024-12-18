import { createSlice } from "@reduxjs/toolkit"

const reloadSlice = createSlice({
    name: "reload",
    initialState: {
        productReload: false,
        categoryReload: false,
        orderReload: false,
    },
    reducers: {
        changeProductRelaod(state){
            state.productReload = !state.productReload
        }
    }
})

export const { changeProductRelaod } = reloadSlice.actions // setState
export default reloadSlice.reducer // state
