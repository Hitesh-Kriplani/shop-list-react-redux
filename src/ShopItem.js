import React, { Component } from 'react';

export default class ShopItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.editShop = this.editShop.bind(this);
    this.editShopSubmit = this.editShopSubmit.bind(this);
    this.deleteShop = this.deleteShop.bind(this);
  }
  deleteShop() {
    const { id } = this.props.shop;
    this.props.deleteShop(id);
  }
  editShop() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));
  }
  editShopSubmit() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));
    this.props.editShopSubmit(
      this.props.shop.id,
      this.nameInput.value,
      this.areaInput.value,
      this.categoryInput.value,
      this.openDateInput.value,
      this.closeDateInput.value
    );
  }
  render() {
    const { name, area, category, openDate, closeDate } = this.props.shop;
    return this.state.isEdit === true ? (
      <tr className="bg-warning" key={this.props.index}>
        <td>
          <input
            ref={(nameInput) => (this.nameInput = nameInput)}
            defaultValue={name}
          />
        </td>
        <td>
          <input
            defaultValue={area}
            ref={(areaInput) => (this.areaInput = areaInput)}
          />
        </td>
        <td>
          <input
            ref={(categoryInput) => (this.categoryInput = categoryInput)}
            defaultValue={category}
          />
        </td>
        <td>
          <input
            ref={(openDateInput) => (this.openDateInput = openDateInput)}
            defaultValue={openDate}
          />
        </td>
        <td>
          <input
            ref={(closeDateInput) => (this.closeDateInput = closeDateInput)}
            defaultValue={closeDate}
          />
        </td>
        <td>
          <i className="far fa-save" onClick={this.editShopSubmit} />
        </td>
        <td>
          <i className="fas fa-trash" />
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{name}</td>
        <td>{area}</td>
        <td>{category}</td>
        <td>{openDate}</td>
        <td>{closeDate}</td>
        <td>
          <i className="far fa-edit" onClick={this.editShop} />
        </td>
        <td>
          <i className="fas fa-trash" onClick={this.deleteShop} />
        </td>
      </tr>
    );
  }
}
