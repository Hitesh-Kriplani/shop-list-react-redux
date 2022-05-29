import React, { Component } from 'react';
import './App.css';
import ShopList from './ShopList.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addShop, deleteShop, updateShop } from './actions/shopActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.addNewShop = this.addNewShop.bind(this);
    this.deleteShop = this.deleteShop.bind(this);
    this.editShopSubmit = this.editShopSubmit.bind(this);
  }
  componentWillMount() {}
  addNewShop() {
    this.props.addShop({
      id:
        Math.max(
          ...this.props.shopList.map(function(o) {
            return o.id;
          })
        ) + 1,
      name: '',
      area: '',
      category: '',
      openDate: '',
      closeDate: '',
    });
  }

  deleteShop(id) {
    let r = window.confirm('Do you want to delete this item');
    if (r === true) {
      this.props.deleteShop(id);
    }
  }
  editShopSubmit(id, name, area, category, openDate, closeDate) {
    this.props.updateShop({
      id: id,
      name: name,
      area: area,
      category: category,
      openDate: openDate,
      closeDate: closeDate,
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">Shop List App</div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Name</th>
                      <th>Area</th>
                      <th>Category</th>
                      <th>openDate</th>
                      <th>closeDate</th>
                      <th>Edit/Save</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <ShopList
                    deleteShop={this.deleteShop}
                    shopList={this.props.shopList}
                    editShopSubmit={this.editShopSubmit}
                  />
                </table>
                <button
                  className="btn btn-dark pull-left"
                  onClick={this.addNewShop}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shopList: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addShop: addShop,
      deleteShop: deleteShop,
      updateShop: updateShop,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
