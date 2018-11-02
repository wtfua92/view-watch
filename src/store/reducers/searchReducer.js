const initState = {
  query: ""
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
      case "UPDATE_QUERY": {
          return {
              query: action.data.query
          }
      }
      default:
          return state;
  }
};

export default searchReducer;