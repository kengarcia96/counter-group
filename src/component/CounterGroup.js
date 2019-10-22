import React, { Component } from "react";
import Counter from "./Counter";
import { connect } from "react-redux";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   // counterSum: 0,   move this state to ./reducer which can do the data logic and return the new state to mapStateToProps
    //   counterArr: new Array(parseInt(this.props.defaultCount))
    //     .fill(0)
    //     .map(() => ({ count: 0, id: this.generateID() }))
    // };
  }

  generateID = () => {
    return new Date().getTime() + Math.random();
  };

  // regenrateCounters = () => {
  //   this.setState({
  //     counterArr: new Array(parseInt(this.refs.countInput.value))
  //       .fill(0)
  //       .map(() => ({ count: 0, id: this.generateID() })),
  //     counterSum: 0
  //   });
  // };

  regenrateCounters = () => {

    const changedNum = parseInt(this.refs.countInput.value);

    this.props.dispatch({
      type: "REGENERATECOUNTER",
      payload: changedNum
    }); 
  };

  counterUpdateCallback = changedNum => {
    // this.setState({ counterSum: this.state.counterSum + changedNum });
    this.props.dispatch({ //this dispatch will wuto inject by connect() method
      type: "COUNTERSUM",
      payload: changedNum
    }); //{type: "", payload: xxx} named action, it will bo translated to ./reducer
  };

  increaseNumber = (changedNum, id) => {
    this.props.dispatch({
      type: "INCREASENUMBER",
      payload: {changedNum, id}
    }); 
  };

  // decreaseNumber = (changedNum, id) => {
  //   const changedArr = this.state.counterArr.map(counterItem => {
  //     if (counterItem.id === id) {
  //       return { id: id, count: counterItem.count - changedNum };
  //     } else {
  //       return counterItem;
  //     }
  //   });

  //   this.setState({ counterArr: [...changedArr] });
  // };
  
  decreaseNumber = (changedNum, id) => {
    this.props.dispatch({
      type: "DECREASENUMBER",
      payload: {changedNum, id}
    }); 
  };

  render() {
    return (
      <div>
        {this.props.counterArr.map(counterItem => (
          <Counter
            key={counterItem.id}
            id={counterItem.id}
            countValue={counterItem.count}
            onCounterValueChanged={this.counterUpdateCallback}
            onClickIncreased={this.increaseNumber}
            onClickDecreased={this.decreaseNumber}
          />
        ))}
        <input type="text" ref="countInput" />
        <button onClick={this.regenrateCounters}>
          Regenerate indicated Counters
        </button>
        <br />
        <span>总和：{this.props.counterSum}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counterSum: state.counterSum,
  counterArr: state.counterArr
}); 
// counterSum is a prop in CounterGroup, it will give counterSum a new value of state.counterSum whitch come from ./reducer switch return
// you try to imagine counterSum will be passed to this.props.counterSum in CounterGroup like the result of <CounterGroup counterSum={state.counterSum}/>

connect(mapStateToProps)(CounterGroup)

export default connect(mapStateToProps)(CounterGroup);//let CounterGroup and Redux know each other
