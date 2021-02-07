// import { INCREASE_COUNT1, INCREASE_COUNT5, INCREASE_COUNT10, DECREASE_COUNT1, DECREASE_COUNT5, DECREASE_COUNT10, RESET } from '../actions/counterAction';
import { COUNT, RESET } from '../actions/counterAction';


const initialState = {
  count: 0
} 
function counterReducer(state = initialState, action) {
  switch (action.type) {
    // case INCREASE_COUNT1:
    //   return { count: state.count + action.payload.count};
    // case DECREASE_COUNT1:
    //   return { count: state.count - action.payload.count};
    //   case INCREASE_COUNT5:
    //     return { count: state.count + action.payload.count};
    //   case DECREASE_COUNT5:
    //     return { count: state.count - action.payload.count};
    //     case INCREASE_COUNT10:
    //       return { count: state.count + action.payload.count};
    //     case DECREASE_COUNT10:
    //       return { count: state.count - action.payload.count};
      case COUNT:
        return { count: state.count + action.payload}; 
        case RESET:
          return {count: 0};  
    default:
      return state;
  }
}

export default counterReducer;