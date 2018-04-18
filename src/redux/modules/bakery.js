import bakeryStore from "../../../inventoryBakery";
// import { bakeryStore } from "../../../inventoryBakery";

import { countBakery, addBakery } from "../../../helpers";

const GET_BAKERY_COUNT = "GET_BAKERY_COUNT";
const GET_ADD_BAKERY = "GET_ADD_BAKERY";

export const get_bakery_count = () => {
  return { type: GET_BAKERY_COUNT };
};

export const get_add_bakery = newBakery => {
  return {
    type: GET_ADD_BAKERY,
    payload: newBakery
  };
};

const initialState = {
  bakerys: bakeryStore,
  bakeryCount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BAKERY_COUNT: {
      const bakerysCopy = [...state.bakerys];
      const bakeryCount = countBakery(bakerysCopy);
      return { ...state, bakeryCount };
      break;
    }
    case GET_ADD_BAKERY: {
      const bakerysCopy = [...state.bakerys];
      const newBakerys = addBakery(action.payload, bakerysCopy);
      return { ...state, bakerys: newBakerys };
      break;
    }
    default: {
      return {
        ...state
      };
    }
  }
};
