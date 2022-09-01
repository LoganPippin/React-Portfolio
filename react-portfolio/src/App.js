import React from 'react';
import Home from './pages/home';
import Projects from './pages/projects';
import NoMatch from './pages/NoMatch';
import { SearchAppBar, theme } from './components/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
      <div>
        <ThemeProvider theme={theme}>
          <SearchAppBar />
          <Switch>
            <Route exact path={['/React-Portfolio/', '/React-Portfolio/Home']}>
              <Home />
            </Route>
            <Route path="/React-Portfolio/projects">
              <Projects />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
