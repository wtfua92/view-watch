export const changeCurrentItem = (item) => {
  return {
      type: "CHANGE_CURRENT_ITEM",
      data: {
          item
      }
  }
};