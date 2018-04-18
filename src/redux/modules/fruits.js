import initialStore from "../../../inventory";
// import { initialStore } from "../../../inventory";
import { countFruits, removeFruit, addFruit } from "../../../helpers";

//creating const
//defining actions
//get the action who counts the fruits, add the fruits.
const GET_FRUIT_COUNT = "GET_FRUIT_COUNT";
const GET_ADD_FRUIT = "GET_ADD_FRUIT";
const GET_REMOVE_FRUIT = "GET_REMOVE_FRUIT";

//Creating Action Creators
//no logic
//round brackets do return no need turn

//arguements passed into the data for payload

export const get_remove_fruit = () => ({
  type: GET_REMOVE_FRUIT
});

export const get_fruit_count = () => ({
  type: GET_FRUIT_COUNT
});

export const get_add_fruit = newFruit => ({
  type: GET_ADD_FRUIT,
  payload: newFruit
});

const initialState = {
  fruits: initialStore,
  fruitCount: 0
};

//creating reducers,
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FRUIT_COUNT: {
      //using countfruits function on inventory fruits
      const fruitsCopy = [...state.fruits];
      const fruitCount = countFruits(fruitsCopy);
      return { ...state, fruitCount };
      break;
    }
    case GET_REMOVE_FRUIT: {
      const fruitsCopy = [...state.fruits];
      const newFruits = removeFruit(fruitsCopy);
      return { ...state, fruits: newFruits };
      break;
    }
    case GET_ADD_FRUIT: {
      const fruitsCopy = [...state.fruits];
      const newFruits = addFruit(action.payload, fruitsCopy);
      return { ...state, fruits: newFruits };
      break;
    }
    default: {
      return {
        ...state
      };
    }
  }
};
