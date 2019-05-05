import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/pages/Landing';
import Login from './components/user/Login';

import { Provider } from 'react-redux';
import store from './store.js';

import './App.css';

// Apollo
import ApolloClient from 'apollo-boost';
import Register from './components/user/Register';

// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Navbar />

          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <Footer />
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
