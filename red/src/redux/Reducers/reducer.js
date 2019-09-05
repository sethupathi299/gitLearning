import * as types from '../Actions/type';



export default (state = [], action) => {
    switch (action.type) {
        case types.REGISTER_FIRSTNAME_POST_SUCCEED:
       console.log("=====>",action.updatePayload.data)

            return {
                ...state,
                register: action.updatePayload.data
            };
        case types.REGISTER_FIRSTNAME_POST_REJECTED:
            return {
                ...state,
            registerRejected: action.updatePayload.data
            };
            default :
            return state
    }
}
//combine reducer

