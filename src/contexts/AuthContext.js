import React, { Component, createContext } from "react";

// Create the context
export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };

  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

// Export both AuthContext and AuthContextProvider
export default AuthContextProvider;
