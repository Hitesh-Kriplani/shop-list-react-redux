const shopReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SHOP':
      let stateCopy = [...state, action.payload];
      localStorage.setItem('shops', JSON.stringify(stateCopy));
      return stateCopy;

    case 'DELETE_SHOP':
      stateCopy = state.filter((x) => x.id !== action.payload);
      localStorage.setItem('shops', JSON.stringify(stateCopy));
      return stateCopy;

    case 'UPDATE_SHOP':
      stateCopy = state.map((shop) => {
        const {
          id,
          name,
          area,
          category,
          openDate,
          closeDate,
        } = action.payload;
        if (shop.id === id) {
          shop.name = name;
          shop.area = area;
          shop.category = category;
          shop.openDate = openDate;
          shop.closeDate = closeDate;
        }
        return shop;
      });
      localStorage.setItem('shops', JSON.stringify(stateCopy));
      return stateCopy;

    default:
      return state;
  }
};
export default shopReducer;
