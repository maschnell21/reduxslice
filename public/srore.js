import {configureStore} from "@reduxjs/toolkit"
import colorReducer from "../src/Components/Redux/color/colorSlice"
export default configureStore({
reducer:{
color:colorReducer
}
})