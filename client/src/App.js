import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/pages/Landing';

// Apollo
import ApolloClient from 'apollo-boost';

// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />

        <Route exact path="/" component={Landing} />

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
