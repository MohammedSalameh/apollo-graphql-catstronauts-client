import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://server-apollo-gql-catstronauts.herokuapp.com/',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<GlobalStyles />
		<Pages />
	</ApolloProvider>,
	document.getElementById('root')
);
