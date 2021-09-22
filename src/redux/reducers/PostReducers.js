

const initialState={
    postItems:[],
    loading: false,
    error:null,
}

const PostReducers=(state=initialState, action)=>{
    switch(action.type){
        case "FETCH_POSTS_REQUEST":
            return{
                ...state, 
                loading:true,
                error:null,

            }
        case "FETCH_POSTS_SUCCESS":
            return{
                ...state,
                loading:false,
                postItems:action.payload
            }  
        case "FETCH_POSTS_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.error
            }   
        default :
        return state;       
    }
}

export default PostReducers;