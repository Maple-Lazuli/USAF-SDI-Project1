import React from 'react'
const { render } = require("react-dom");
class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            paygrade: '',
            sessionid: 12,
            rank: '',
            rankInt: '',
            AFSC: '',
            gender: '',
            unit: '',
            DOR: ''
        }
    }


    handleChangeFname = (e) => {
        this.setState({ firstName: e.target.value });
    }

    handleChangeLname = (e) => {
        this.setState({ lastName: e.target.value });
    }

    aliasRank = (value) => {
        this.setState({ id: value });
        switch (value) {
            case 'E-1':
                this.setState({ rank: 'AB' });
                this.setState({ rankInt: 1 });
                break;
            case "E-2":
                this.setState({ rank: 'Amn' });
                this.setState({ rankInt: 2 });
                break;
            case "E-3":
                this.setState({ rank: 'A1C' });
                this.setState({ rankInt: 3 });
                break;
            case "E-4":
                this.setState({ rank: 'SrA' });
                this.setState({ rankInt: 4 });
                break;
            case "E-5":
                this.setState({ rank: 'SSgt' });
                this.setState({ rankInt: 5 });
                break;
            case "E-6":
                this.setState({ rank: 'TSgt' });
                this.setState({ rankInt: 6 });
                break;
            case "E-7":
                this.setState({ rank: 'MSgt' });
                this.setState({ rankInt: 7 });
                break;
            case "E-8":
                this.setState({ rank: 'SMSgt' });
                this.setState({ rankInt: 8 });
                break;
            case "E-9":
                this.setState({ rank: 'CMSgt' });
                this.setState({ rankInt: 9 });
                break;
            case 'O-1':
                this.setState({ rank: 'Lt' });
                this.setState({ rankInt: '10' });
            case 'O-2':
                this.setState({ rank: '2nd Lt' });
                this.setState({ rankInt: '11' });
            case 'O-3':
                this.setState({ rank: 'Capt' });
                this.setState({ rankInt: '12' });
            case 'O-4':
                this.setState({ rank: 'Maj' });
                this.setState({ rankInt: '13' });
            case 'O-5':
                this.setState({ rank: 'Lt Col' });
                this.setState({ rankInt: '14' });
            case 'O-6':
                this.setState({ rank: 'Col' });
                this.setState({ rankInt: '15' });
            case 'O-7':
                this.setState({ rank: 'Brig Gen' });
                this.setState({ rankInt: '16' });
            case 'O-8':
                this.setState({ rank: 'Maj Gen' });
                this.setState({ rankInt: '17' });
            case 'O-9':
                this.setState({ rank: 'Lt Gen' });
                this.setState({ rankInt: '18' });
            case 'O-10':
                this.setState({ rank: 'Gen' });
                this.setState({ rankInt: '19' });

        }
    }

    handleChangePaygrade = (e) => {
        this.setState({ paygrade: e.target.value })
        this.aliasRank(e.target.value);
    }

    handleChangeUnit = (e) => {
        this.setState({ unit: e.target.value });
    }
    handleChangeDOR = (e) => {
        this.setState({ DOR: e.target.value });

    }
    handleChangeAFSC = (e) => {
        this.setState({ AFSC: e.target.value });

    }
    handleChangeGender = (e) => {
        this.setState({ gender: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            paygrade: this.state.paygrade,
            rank: this.state.rank,
            rankInt: this.state.rankInt,
            sessionid: this.state.sessionid,
            AFSC: this.state.AFSC,
            gender: this.state.gender,
            unit: this.state.unit,
            DOR: this.state.DOR
        }
        this.props.addUser(body);
    }

    render() {
        return (
            <div>
                <h2> Register New User</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="FirstName">First Name</label>
                        <input type="text" class="form-control" id="fname" aria-describedby="First Name" placeholder="First Name" onChange={this.handleChangeFname}></input>

                        <label for="LastName">Last Name</label>
                        <input type="text" class="form-control" id="lname" aria-describedby="Last Name" placeholder="Last Name" onChange={this.handleChangeLname}></input>
                    </div>

                    <div class="form-group">
                        <label for="Unit">Gender</label>
                        <select class="form-control form-control-sm" id="selectGender" onChange={this.handleChangeGender}>
                            <option> </option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        {/* <small id="genderDis" class="form-text text-muted">At this time, only male and female are vaild gender identifiers</small> */}
                    </div>


                    <div class="form-group">
                        <label for="Unit">Unit</label>
                        <input type="text" class="form-control" id="unit" aria-describedby="Unit" placeholder="Unit" onChange={this.handleChangeUnit}></input>

                    </div>
                    {/* <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div> */}
                    <div class="form-group">
                        <label for="Rank">Rank</label>
                        <select class="form-control form-control-sm" id="selectPayGrade" onChange={this.handleChangePaygrade}>
                            <option></option>
                            <option>E-1</option>
                            <option>E-2</option>
                            <option>E-3</option>
                            <option>E-4</option>
                            <option>E-5</option>
                            <option>E-6</option>
                            <option>E-7</option>
                            <option>E-8</option>
                            <option>E-9</option>
                            <option>O-1</option>
                            <option>O-2</option>
                            <option>O-3</option>
                            <option>O-4</option>
                            <option>O-5</option>
                            <option>O-6</option>
                            <option>O-7</option>
                            <option>O-8</option>
                            <option>O-9</option>
                            <option>O-10</option>
                        </select>
                        <label for="Unit">Date Of Rank</label>
                        <input type="text" class="form-control" id="unit" aria-describedby="Unit" placeholder="mm/dd/yyyy" onChange={this.handleChangeDOR}></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default RegisterUser