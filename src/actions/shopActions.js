export function addShop(shop) {
  return {
    type: 'ADD_SHOP',
    payload: shop,
  };
}

export function deleteShop(Id) {
  return {
    type: 'DELETE_SHOP',
    payload: Id,
  };
}

export function updateShop(shop) {
  return {
    type: 'UPDATE_SHOP',
    payload: shop,
  };
}
