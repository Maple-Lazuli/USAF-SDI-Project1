import './App.css';
import React from 'react'
import RegisterUser from './RegisterUser'
 import FindUser from  './FindUser'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            searchResults: {},
            registerUser: true,
            registerUserStatus: 0,
            registerUserName: '',
            registerUserID: 0,
            showSearch: false,
            searchResultsStatus: 0,
            results: {}
        }
    }

    addUser = (rbody) => {
        this.handleRegisterToggle()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rbody)
        };
        fetch('http://localhost:3002/api/v1/users/user', requestOptions)
            .then(response => {
                this.setState({ registerUserStatus: response.status })
                this.setState({ post: response })

            })
    }

    handleRegisterToggle = () => {
        let link = document.getElementById("Register")
        this.setState({ registerUserStatus: 0 })
        this.setState({ showSearch: false })
        if (this.state.registerUser) {
            this.setState({ registerUser: !this.state.registerUser })
            link.classList.remove("active")
        } else {
            this.setState({ registerUser: !this.state.registerUser })
            link.classList.add("active")
        }
    }

    handleUserSearch = (e) => {
        e.preventDefault();

        let searchString = `http://localhost:3002/api/v1/users/user/${document.getElementById("search").value}`
        fetch(searchString)
            .then(response => {
                this.setState({ searchResultsStatus: response.status })
                this.setState({ post: response })
                this.setState({ registerUser: false })
                this.setState({ showSearch: true })
                this.setState({ results: response })
            })
    }


    render() {
        return (
            <div className="App">

                <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a class="navbar-brand" href="#">Account  Manager</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav mr-auto">
                            {/* <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link active" id="Register" onClick={this.handleRegisterToggle} href="#">Register</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">Admin Actions</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                    <a class="dropdown-item" href="#">View All Users</a>
                                    <a class="dropdown-item" href="#">View All Active Users</a>
                                    <a class="dropdown-item" href="#">View All Relationships</a>
                                    <a class="dropdown-item" href="#">Delete User</a>
                                    <a class="dropdown-item" href="#">Delete Relation</a>
                                </div>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" id="search" placeholder="Search Users (by ID)" aria-label="Search"></input>
                            <button class="btn btn-secondary my-2 my-sm-0" onClick={this.handleUserSearch} type="submit">Search!</button>
                        </form>
                    </div>
                </nav>

                <main role="main" class="container">
                    <div class="main-App">
                        {/* <h2>Heading </h2> */}


                        {this.state.searchResultsStatus === 400 ?
                            <h2>User Not Found</h2> :
                            <div></div>}


                        {this.state.registerUserStatus === 500 ?
                            <h2>An error has occurred while adding the user...</h2> :
                            <div></div>}

                        {/* {this.state.registerUserStatus === 200 ?
                            <h2>{`${this.state.registerUserName} was added with a userID of ${this.state.registerUserID}`}</h2> :
                            <div></div>} */}

                        {this.state.registerUserStatus === 200 ?
                            <h2>User was added successfully!</h2> :
                            <div></div>}


{this.state.registerUser ?
                            <RegisterUser
                                addUser={this.addUser} /> :
                            <div></div>}

{this.state.showSearch ?
                            <FindUser
                                results={this.props.results} /> :
                            <div></div>}
                    </div>
                </main>
            </div>
        );
    }
}
export default App;


