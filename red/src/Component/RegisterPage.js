import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction from '../redux/Actions/userAction';
import { bindActionCreators } from 'redux';


class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ firstname: e.target.value });
    }

    componentWillReceiveProps(next) {
        if (next.registerResponce) {
            this.setState({ registerData: next.registerResponce.welcome, loading: false })
        }
    }
    handleSubmit = () => {
         this.props.userAction.getRegister()
    }

    render() {
        const { firstname } = this.state
        return (
            <div>
                <div >
                    <label>firstname:</label>
                    <input type="text" className="form-control" name="firstName" onChange={this.handleChange} />
                    hi !!!<p>{firstname}</p>
                    <button onClick={this.handleSubmit} value="submit">submit</button>
                    <div>{this.state.registerData}</div>
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
//    registerResponce: state.registerPage.register
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
