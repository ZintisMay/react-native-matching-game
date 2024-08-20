// CounterContext.tsx
import React from "react";

// Declaring the state object globally.
const initialState = {
  count: 0,
};

const priorState = {
  ...initialState,
};

//takes a component, stores the state values and methods
const stateContextWrapper = (component) => ({
  ...priorState,
  increment: () => {
    priorState.count += 1;
    component?.setState({ context: stateContextWrapper(component) });
  },
  decrement: () => {
    priorState.count -= 1;
    component?.setState({ context: stateContextWrapper(component) });
  },
  getKey: (key) => {
    if (priorState[key]) return priorState[key];
    return null;
  },
  setState: (obj) => {
    for (let [key, val] of Object.entries(obj)) {
      priorState[key] = val;
    }
    component?.setState({ context: stateContextWrapper(component) });
  },
});

export const StateContext = React.createContext(stateContextWrapper());

export class StateContextProvider extends React.Component {
  state = {
    context: stateContextWrapper(this),
  };

  render() {
    return (
      <StateContext.Provider value={this.state.context}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}
