import './App.css';
import React from 'react'
// import EmailList from './SearchUser';
// import EmailDisplay from './CreateUser';
// import SearchEmail from './UpdateUser';
// import NewEmail from './AssignSupervisor';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailImportArr: [],
            filterArr: [],
            currentEmailId: '',
            currentSearchString: '',
            newEmail: false,
            lastID: null,
            sendEmailBody: {}
        }
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
                                <a class="nav-link" href="#">Register</a>
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
                            <input class="form-control mr-sm-2" type="text" placeholder="Search Users" aria-label="Search"></input>
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search!</button>
                        </form>
                    </div>
                </nav>

                <main role="main" class="container">
                    <div class="starter-template">
                        {/* <h2>Bootstrap starter template</h2> */}
                    </div>

                </main>
            </div>
        );
    }

}
export default App;

