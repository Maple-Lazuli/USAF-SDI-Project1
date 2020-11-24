const { render } = require("react-dom");

class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            firstName: '',
            lastName: '',
            paygrade: 0,
            AFSC: '',
            unit: '',
            DOR: ''
        }
    }


    handleChangeFname = (e) => {
        this.setState({ sender: e.target.value });
    }

    handleChangeLname = (e) => {
        this.setState({ recipient: e.target.value });
    }

    handle

    handleChangePaygrade = (e) => {
        this.setState({ subject: e.target.value });
    }

    handleChangeUnit = (e) => {
        this.setState({ message: e.target.value });
    }
    handleChangeDOR = (e) => {
        this.setState({ message: e.target.value });

    }


    handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            sender: this.state.sender,
            recipient: this.state.recipient,
            subject: this.state.subject,
            message: this.state.message
        }
        this.props.addUser(body);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="FirstName">First Name</label>
                    <input type="text" class="form-control" id="fname" aria-describedby="First Name" placeholder="First Name" onChange={this.handleChangeFname}></input>
                    <label for="LastName">Last Name</label>
                    <input type="text" class="form-control" id="lname" aria-describedby="Last Name" placeholder="Last Name" onChange={this.handleChangeLname}></input>
                    <label for="Unit">Unit</label>
                    <input type="text" class="form-control" id="unit" aria-describedby="Unit" placeholder="Unit" onChange={this.handleChangeUnit}></input>

                </div>
                {/* <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div> */}
                <div class="form-group">
                <label for="Unit">Date Of Rank</label>
                    <input type="text" class="form-control" id="unit" aria-describedby="Unit" placeholder="Unit" onChange={this.handleChangeDOR}></input>

                    <label for="Rank">Rank</label>
                    <select class="form-control form-control-sm" id="exampleFormControlSelect1" onChange={this.handleChangePaygrade}>
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
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default RegisterUser