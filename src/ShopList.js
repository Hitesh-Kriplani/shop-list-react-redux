import React, { Component } from 'react';
import ShopItem from './ShopItem.js';

export default class ShopList extends Component {
  render() {
    let shops = this.props.shopList;
    const trItem = shops.map((item, index) => (
      <ShopItem
        key={index}
        shop={item}
        index={index}
        editShopSubmit={this.props.editShopSubmit}
        deleteShop={this.props.deleteShop}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}
