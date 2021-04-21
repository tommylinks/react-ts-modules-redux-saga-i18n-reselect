import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './utils/i18n';

import modules from './modules';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(modules.reducers),
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(function* rootSaga() {
  yield all(modules.sagas);
});

const isBrowserSupportsHistory = 'pushState' in window.history;

function App() {
  const { t } = useTranslation();
  return (
    <Provider store={store}>
      <BrowserRouter forceRefresh={!isBrowserSupportsHistory}>
        {modules.pages.map(
          ({ path, title, visible }) =>
            visible && (
              <Link className="App-link" to={path} rel={title} key={title}>
                {t(title)}
              </Link>
            ),
        )}
        <Switch>
          {modules.pages.map(({ path, title, component }) => (
            <Route exact key={title} path={path} component={component} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
