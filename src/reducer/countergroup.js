const initialState={
    counterSum: 0,
    counterArr: []
}

const counterGroupReducer = (state=initialState, {type,payload}) => {
        switch(type){
        case "COUNTER_SUM" :
            return {... state, counterSum: state.counterSum + payload};
        case "CLEARSUM" :
            return {... state, counterSum: 0};
        case "GENERATECOUNTERS" :
                return {... state, 
                    counterArr: new Array(parseInt(this.props.defaultCount))
                        .fill(0)
                        .map(() => ({ count: 0, id: this.generateID()
                }))};
        counterArr: new Array(parseInt(this.props.defaultCount))
          .fill(0)
          .map(() => ({ count: 0, id: this.generateID() }))
      };
};

export default counterGroupReducer;