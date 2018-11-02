export const updateQuery = (query) => {
    return {
        type: "UPDATE_QUERY",
        data: {
            query
        }
    }
};