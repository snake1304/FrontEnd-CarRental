import actionTypes from "../actions/actionTypes";

const initContentOfConfirmModal = {
	isOpen: false,
	messageId: "",
	handleFunc: null,
	dataFunc: null,
};

const initialState = {
	started: true,
	language: "vi",
	systemMenuPath: "/system/user-manage",
	contentOfConfirmModal: {
		...initContentOfConfirmModal,
	},
	user: null,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return { ...state, user: action.payload };
		case actionTypes.APP_START_UP_COMPLETE:
			return {
				...state,
				started: true,
			};
		case actionTypes.SET_CONTENT_OF_CONFIRM_MODAL:
			return {
				...state,
				contentOfConfirmModal: {
					...state.contentOfConfirmModal,
					...action.contentOfConfirmModal,
				},
			};

		default:
			return state;
	}
};

export default appReducer;
