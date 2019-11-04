import React from 'react';
import { Route } from 'react-router-dom';

// our routes
import * as ROUTES from '../constants/routes';

import Home from './Home';
import SignIn from './SignIn';
import Account from './Account';
import Admin from './Admin';
import Landing from './Landing';
import PasswordChange from './PasswordChange';
import PasswordForgot from './PasswordForget';
import SignOut from './SignOut';
import SignUp from './SignUp';

const App = () => {
    return (
        <div>
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route  path={ROUTES.SIGN_UP} component={SignUp} />
            <Route  path={ROUTES.SIGN_IN} component={SignIn} />
            <Route  path={ROUTES.PASSWORD_FORGET} component={PasswordForgot} />
            <Route  path={ROUTES.HOME} component={Home} />
            <Route  path={ROUTES.ACCOUNT} component={Account} />
            <Route  path={ROUTES.ADMIN} component={Admin} />

        </div>
    )
}

export default App
