import React from 'react'
import { Route } from "react-router-dom";
import './index.css'
import { mainRoute } from './appRoutes/mainRoute';
function App() {
  return (
    <div className="App">
{mainRoute.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              return (
                <route.layout>
                  <route.component {...props} />
                </route.layout>
              );
            }}
          />
        );
      })}
      
    </div>
  );
}

export default App;
