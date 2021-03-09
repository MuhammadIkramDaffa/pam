const initial = {
    stock : 0 
}


const iceReducer = (state = initial , action) => {
    switch(action.type){
        case "PutarKiri" : 
        return {
            ...state ,
            stock : state.stock - 10  
        }
        case "PutarKanan" : 
        return {
            ...state ,
            stock : state.stock + 10  
        }

        default :
        return state 
    }
}

export default iceReducer
