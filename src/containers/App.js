import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";

import {
	userIsAuthenticated,
	userIsNotAuthenticated,
} from "../hoc/authentication";

import { path } from "../utils";

import Home from "../routes/Home";
import HomePage from "./HomePage/HomePage.js";
import Login from "../routes/Login";
import Header from "./Header/Header";
import System from "../routes/System";
import CarDetail from "./Client/Cars/CarDetail";
import CarBooking from "./Client/Cars/CarBooking";
import CarBooking2 from "./Client/Cars/Payment/CarBooking2";

import DetailRental from "./Client/Rental/DetailRental";
import DetailCarInList from "./Client/Cars/DetailCarInList";

import CarListHomepage from "./HomePage/CarListHomepage";
import { CustomToastCloseButton } from "../components/CustomToast";
import ConfirmModal from "../components/ConfirmModal";

class App extends Component {
	handlePersistorState = () => {
		const { persistor } = this.props;
		let { bootstrapped } = persistor.getState();
		if (bootstrapped) {
			if (this.props.onBeforeLift) {
				Promise.resolve(this.props.onBeforeLift())
					.then(() => this.setState({ bootstrapped: true }))
					.catch(() => this.setState({ bootstrapped: true }));
			} else {
				this.setState({ bootstrapped: true });
			}
		}
	};

	componentDidMount() {
		this.handlePersistorState();
	}

	render() {
		return (
			<Fragment>
				<Router history={history}>
					<div className="main-container">
						<ConfirmModal />
						{this.props.isLoggedIn && <Header />}

						<span className="content-container">
							<Switch>
								<Route
									path={path.HOME}
									exact
									component={Home}
								/>
								<Route
									path={path.LOGIN}
									component={userIsNotAuthenticated(
										Login
									)}
								/>
								<Route
									path={path.SYSTEM}
									component={userIsAuthenticated(
										System
									)}
								/>
								<Route
									path={path.HOMEPAGE}
									component={HomePage}
								/>
								<Route
									path="/detail-cars/:id"
									component={CarDetail}
								/>
								<Route
									path="/detail-cars-booking/:id"
									component={CarBooking}
								/>
								<Route
									path="/detail-cars-booking2/:id"
									component={CarBooking2}
								/>

								<Route
									path="/detail-rental/:id"
									component={DetailRental}
								/>
								<Route
									path="/detail-car-in-list/:id"
									component={DetailCarInList}
								/>

								<Route
									path="/search-car"
									component={CarListHomepage}
								/>
							</Switch>
						</span>

						<ToastContainer
							className="toast-container"
							toastClassName="toast-item"
							bodyClassName="toast-item-body"
							autoClose={false}
							hideProgressBar={true}
							pauseOnHover={false}
							pauseOnFocusLoss={true}
							closeOnClick={false}
							draggable={false}
							closeButton={<CustomToastCloseButton />}
						/>
					</div>
				</Router>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		started: state.app.started,
		isLoggedIn: state.admin.isLoggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
