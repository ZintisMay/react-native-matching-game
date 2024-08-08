// CounterContext.tsx
import React from "react";

// Declaring the state object globally.
const initialState = {
  count: 0,
};

//takes a component, stores the state values and methods
const stateContextWrapper = (component) => ({
  ...initialState,
  increment: () => {
    initialState.count += 1;
    component?.setState({ context: stateContextWrapper(component) });
  },
  decrement: () => {
    initialState.count -= 1;
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
