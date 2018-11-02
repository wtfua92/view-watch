const initState = {
  addNewItemModalOpen: false
};

const modalReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_MODAL": {
            const { modalType } = action.data;
            return {
                ...state,
                [modalType]: !state[modalType]
            }
        }
        default:
            return state;
    }
};

export default modalReducer;