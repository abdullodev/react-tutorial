import React, { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  BtnDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  BtnTozalsh = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div className="myContainer">
        <button
          onClick={this.BtnTozalsh}
          className="btn btn-sm btn-warning m-3"
        >
          Back to start
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            DeleteEvent={this.BtnDelete}
            onIncrement={this.handleIncrement}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default App;
