import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { HashRouter, Route } from 'react-router-dom';
import "./index.css";

import rootReducer from './reducer';
import  Pc  from "./pc/pc.component";
import   Login   from "./login/login.ui";
require('./mock/api')


const store = createStore(rootReducer);

const routes =  [
        {
          path: '/pc',
          component: Pc
        },
        {
          path: '/login',
          component: Login
        }
      ];

class App extends React.Component<any, any> {
  render() {
    return (
      <Provider  store={store}>
        <HashRouter>
             <Route key='/' path='/' component={App}>
                    {
                        routes.map((child) => 
                            <Route key={child.path} path={child.path} component={child.component}></Route>
                        )
                    }      
             </Route>
        </HashRouter>
      </Provider>
    );
  }
}

ReactDOM.render( <App />, document.getElementById("root"));
