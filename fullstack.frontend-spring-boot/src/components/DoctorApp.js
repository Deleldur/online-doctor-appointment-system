import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import DoctorsList from './DoctorsList';
import AuthenticationRoute from './AuthenticationRoute';
import EditCategory from './EditCategory';
import CreateAppointment from './CreateAppointment';

class Doctor2App extends Component {

    render() {
        return (
            <>
                <Router>
                    <>
                    <Header />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/edit-category/:id" component={EditCategory} />
                             <Route path="/doctor" component={CreateAppointment} />
                            <AuthenticationRoute path="/logout" exact component={LogoutComponent} />
                            <AuthenticationRoute path="/doctor" exact component={DoctorsList} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default Doctor2App