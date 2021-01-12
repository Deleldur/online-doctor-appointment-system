import React, { Component } from 'react'
import UserService from '../service/UserService';

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            userName: ''
        }
//        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {

        UserService.getDoctorInfo().then(
            response => {
              this.setState({
                userName: response.data.email
              });
            },
            error => {
              this.setState({
                content:
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString()
              });
            }
          );
        }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    // saveUser = (e) => {
    //     e.preventDefault();
    //     let user = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
    //     ApiService.editUser(user)
    //         .then(res => {
    //             this.setState({message : 'User added successfully.'});
    //             this.props.history.push('/users');
    //         });
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit User</h2>
                <form>

                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" placeholder="username" name="username" className="form-control" defaultValue={this.state.userName}/>
                    </div>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                    </div>


                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;