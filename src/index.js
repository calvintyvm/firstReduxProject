import Store from "./redux/store";
import {
  get_fruit_count,
  get_remove_fruit,
  get_add_fruit
} from "./redux/modules/fruits";

import { get_bakery_count, get_add_bakery } from "./redux/modules/bakery";

//dispatch triggers a state change, (setState?)
// console.log(Store.dispatch(get_fruit_count()));
// console.log(Store.getState());
console.log(Store.dispatch(get_fruit_count()));
console.log(Store.dispatch(get_remove_fruit()));
console.log(Store.dispatch(get_add_fruit("Pineapple")));
console.log(Store.dispatch(get_bakery_count()));
console.log(Store.dispatch(get_add_bakery("LongJ")));
