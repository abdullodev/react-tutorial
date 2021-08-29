import React, { Component } from "react";

class Counter extends Component {
  pTag() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
  Increment = () => {
    this.setState({
      value: this.props.counter.value + 1,
    });
  };
  render() {
    return (
      <div className="counter">
        <span
          className={
            this.props.counter.value === 0
              ? "elementOfNumberDarkBlue"
              : "elementOfNumberLightBlue"
          }
        >
          {this.pTag()}
        </span>
        <button
          className="btn btn-success m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.DeleteEvent(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
