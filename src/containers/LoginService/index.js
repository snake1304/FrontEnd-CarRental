import { useEffect } from "react";
import axios from "axios";
import { setUser } from "../../store/actions/appActions";
import { connect } from "react-redux";

const LoginPage = ({ user, setUser }) => {
	useEffect(() => {
		const search = new URLSearchParams(window.location.search);
		const token = search.get("token");
		if (token) {
			axios({
				url: process.env.REACT_APP_PROFILE + "/api/users/me",
				headers: { authorization: "Bearer " + token },
			}).then(({ data }) => {
				if (data.success) {
					setUser(data.data);
					localStorage.setItem("token", token);
					if (window.location.search) {
						window.location.href = "/home";
					}
				} else {
					localStorage.clear();
					window.location.reload();
				}
			});
		}
	}, []);
	return <></>;
};

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.admin.isLoggedIn,
		user: state.app.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: (data) => dispatch(setUser(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
