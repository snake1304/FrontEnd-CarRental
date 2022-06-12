import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./HeaderHomepage.scss";
import axios from "axios";
import { setUser } from "../../store/actions/appActions";
import { connect } from "react-redux";

const { REACT_APP_PROFILE } = process.env;

class HeaderHomepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: "",
		};
	}
	componentDidMount() {
		let token = localStorage.getItem("token");

		if (token) {
			axios({
				url: process.env.REACT_APP_PROFILE + "/api/users/me",
				headers: { authorization: "Bearer " + token },
			}).then(({ data }) => {
				if (data.success) {
					this.props.setUser(data.data);
				} else {
					localStorage.clear();
					window.location.reload();
				}
			});
		}
	}

	handleLogin = () => {
		window.location.href =
			REACT_APP_PROFILE +
			`/Login?redirect=${process.env.REACT_APP_BASE_API}/login`;
	};
	hanldeLogout = () => {
		// window.location.href = `https://profile.vinhphancommunity.xyz/Login?redirect=${process.env.REACT_APP_BASE_API}/home`;
		localStorage.clear();
		this.props.logout();
		// window.location.reload();
	};

	handleRegister = () => {
		window.location.href = REACT_APP_PROFILE + "/signup";
	};

	render() {
		console.log("stateeee", this.state);

		return (
			<>
				<div className="above"></div>
				<div className="home-header-container">
					<div className="home-header-content">
						<div className="left-content">
							<i className="fas fa-bars"></i>
							<div className="header-logo"></div>
						</div>
						<div className="right-content">
							<div className="child-content">
								<p>Download App</p>
							</div>
							<div className="child-content">
								<p>Partnet with Us</p>
							</div>
							<div className="child-content">
								<p>Save</p>
							</div>
							<div className="child-content">
								<p>My Booking</p>
							</div>
							<div className="child-content">
								<p>EN</p>
							</div>
							<div className="child-content">
								<p>Pay</p>
							</div>
							{this.props.user ? (
								<>
									<a href="">
										{this.props.user.name}
									</a>
									<button
										type="button"
										className="btn btn-primary"
										onClick={this.hanldeLogout}
									>
										Logout
									</button>
								</>
							) : (
								<>
									{" "}
									<div className="child-content">
										<button
											type="button"
											className="btn btn-primary"
											onClick={
												this.handleLogin
											}
										>
											Login
										</button>
									</div>
									<div className="child-content">
										<button
											type="button"
											className="btn btn-primary"
											onClick={
												this.handleRegister
											}
										>
											Register
										</button>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
				<div className="home-header-banner"></div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.admin.isLoggedIn,
		user: state.app.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: (data) => dispatch(setUser(data)),
		logout: () => {
			dispatch(setUser(null));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHomepage);
