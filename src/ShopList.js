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
        isEdit={this.props.isEdit}
        deleteShop={this.props.deleteShop}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}
