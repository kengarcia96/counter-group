
const initialState = 
  {
    counterSum: 0,
      counterArr: new Array(parseInt(3))
        .fill(0)
        .map(() => ({ count: 0, id: new Date().getTime() + Math.random() }))
};



export default (state = initialState, { type, payload }) => {

  switch (type) {
    case "COUNTERSUM":
    console.log(payload)
      return { counterSum: state.counterSum + payload, counterArr: state.counterArr};

    case "REGENERATECOUNTER":
      const array = new Array(parseInt(payload))
      .fill(0)
      .map(() => ({ count: 0, id: new Date().getTime() + Math.random() }))
      return { counterSum: 0, counterArr: array};

    case "INCREASENUMBER":
    const changedArr = state.counterArr.map(counterItem => {
      if (counterItem.id === payload.id) {
        return { id: payload.id, count: counterItem.count + payload.changedNum };
      } else {
        return counterItem;
      }
    });

    return { counterSum: state.counterSum, counterArr: changedArr};

    case "DECREASENUMBER":
        const changedArray = state.counterArr.map(counterItem => {
          if (counterItem.id === payload.id) {
            return { id: payload.id, count: counterItem.count - payload.changedNum };
          } else {
            return counterItem;
          }
        });
    
        return { counterSum: state.counterSum, counterArr: changedArray};

    default:
      return state;
  }


};

