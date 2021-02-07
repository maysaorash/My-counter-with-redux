// export const UPDATE_COUNTER = "UPDATE_COUNTER";
// export const INCREASE_COUNT1 = 'INCREASE_COUNT1';
// export const INCREASE_COUNT5 = 'INCREASE_COUNT5';
// export const INCREASE_COUNT10 = 'INCREASE_COUNT10';

// export const DECREASE_COUNT1 = 'DECREASE_COUNT1';
// export const DECREASE_COUNT5 = 'DECREASE_COUNT5';
// export const DECREASE_COUNT10 = 'DECREASE_COUNT10';
export const COUNT = 'COUNT';
export const RESET = 'RESET';


// export function updateCounter(newCounter) {
//   // console.log(newCounter);
//   return {
//     type: UPDATE_COUNTER,
//     payload: { counter: newCounter },
//   };
// }
// export const increaseCountOne = () => ({
//   type: INCREASE_COUNT1,
//   payload: {count: 1}
// })

// export const increaseCountFive = () => ({
//   type: INCREASE_COUNT5,
//   payload: {count: 5}
// })
// export const increaseCountTen = () => ({
//   type: INCREASE_COUNT10,
//   payload: {count: 10}
// })
// export const decreaseCountOne = () => ({
//   type: DECREASE_COUNT1,
//   payload: {count: 1}
// })
// export const decreaseCountFive = () => ({
//   type: DECREASE_COUNT5,
//   payload: {count: 5}
// })
// export const decreaseCountTen = () => ({
//   type: DECREASE_COUNT10,
//   payload: {count: 10}
// })

export const countFunction = (e) => ({
  type: COUNT,
  payload: e.target.value * 1
})

export const reset = () => ({
  type: RESET,
  payload: {count: 0}
})