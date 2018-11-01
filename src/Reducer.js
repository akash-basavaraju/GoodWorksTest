import * as ActionTypes from "./ActionTypes";

export default function(state, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_ANSWER:
      return {
        flexiConfig: {
          items: state.flexiConfig.items.map(
            (item, index) =>
              index === action.itemIndex
                ? { ...item, answer: action.payload }
                : item
          )
        }
      };
    case ActionTypes.DROP_SELECTED:
      return {
        flexiConfig: {
          items: state.flexiConfig.items.map(
            (item, index) =>
              index === action.itemIndex
                ? { ...item, answer: action.payload }
                : item
          )
        }
      };
    default:
      return state;
  }
}
