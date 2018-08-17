import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import JobadDetail from './components/jobad_detail';
import JobadForm from './components/jobad_form';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/jobad/detail" component={ JobadDetail } />
					<Route path="/jobad/form" component={ JobadForm } />
					{/* o router abaixo é para o index da página, que não sabemos se existirá ¯\_(ツ)_/¯ */}
					<Route path="/" component={ JobadDetail } />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.root'));
