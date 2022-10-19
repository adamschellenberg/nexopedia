import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { HomePage, DatabasePage, GuidesPage, ItemsPage, SignInPage, SignUpPage, ProfilePage, LogoutPage, LocationsPage } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/database">
          <DatabasePage />
        </Route>
        {/* <Route path="/guides" element={<GuidesPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/logout" element={<LogoutPage />} /> */}
        {/* <Route path="/locations" element={<LocationsPage />} /> */}

      </Switch>
    </Router>
  </React.StrictMode>
);
