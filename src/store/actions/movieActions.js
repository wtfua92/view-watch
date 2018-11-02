export const makeFavorite = (item_id, category_id) => {
    return {
        type: "MAKE_FAVORITE",
        data: {
            item_id,
            category_id
        }
    };
};

export const moveToCategory = (item_id, old_category_id, new_category_id) => {
    return {
        type: "MOVE_TO_CATEGORY",
        data: {
            item_id,
            old_category_id,
            new_category_id
        }
    }
};

export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        data: {
            item
        }
    }
};