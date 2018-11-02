const initState = {
    currentItem: {}
};

const currentItemReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_CURRENT_ITEM": {
            return {
                currentItem: action.data.item
            }
        }
        default:
            return state;
    }
};

export default currentItemReducer;