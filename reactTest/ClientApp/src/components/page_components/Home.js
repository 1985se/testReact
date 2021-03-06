﻿import React, { Component } from 'react';
import TopbarComponent from '../global_components/Topbar';
import axios from 'axios';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from '../../actions/page-action';
import * as pageAction from '../../actions/page-action';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            JsonResponse: [],
           
        }
    }
    componentDidMount() {
        this.props.PageAction.setPageID(1);
        this.loadData();
    }
    loadData() {
        var url = window.WebServiceEndpoint + '/api/home/product';
        axios.get(url)
            .then(res => {
                console.log(res.data);
                if (res.data != null) {
                    this.setState({ JsonResponse: res.data});
                } else {
                    console.log("Can not Load Data");
                }
            })
            .catch(function (error) {
                console.log("Load data Error", error);
            });
    }  
  
    render() {
        const products = this.state.JsonResponse;
        return (
            <React.Fragment>
                <center>
                    <TopbarComponent/>
                    <div className="main-banner">
                        <img src={require('../assets/image/banner.jpg')} style={{ width:'-webkit-fill-available' }} />
                    </div>
                    <div className="sku-home-header" >
                        <div className="sku-home-header-title">สินค้าทั้งหมด</div>
                    </div>
                    <div className="productlist-products productlist-products--sku" >
                        {
                            products.map(({
                                productID,
                                productNameEN,
                                price,
                                productImgURL_EN,
                            }) => <div key={productID}>
                                    <div className="productlist-product">
                                        <div className="productlist-product-image">
                                            <img src={productImgURL_EN} alt=""/>
                                        </div>
                                        <div className="productlist-product-data">
                                            <div className="productlist-product-data-title">
                                                {productNameEN}
                                            </div>
                                            <div className="productlist-product-data-price">
                                                {price} บาท
                                            </div>
                                        </div>

                                    </div>

                                </div>)
                        }
                    </div>
              
                </center>

            </React.Fragment>            
            );
    }

}

const mapDispatchToProps = dispatch => ({
    ProductAction: bindActionCreators(productAction, dispatch),
    PageAction: bindActionCreators(pageAction, dispatch)
});

export default connect(null, mapDispatchToProps)(Home);