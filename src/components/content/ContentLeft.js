import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/ContentLeft.css'

import LeftSectionText from './leftSection/LeftSectionText'
import LeftSectionMaterial from './leftSection/LeftSectionMaterial'

import {showLeftMenu} from '../../actions/leftMenuAction'

class ContentLeft extends Component {
    constructor(props) {
        super(props);
        this.showLeftMenu = this.props.showLeftMenu.bind(this);
    }
    showLeftContent = (e) =>  {
    }
    render() {
        let content = null;
        if(this.props.leftMenu.isShow){
            switch(this.props.leftMenu.alias){
                case 'material':
                    content = (<div className="content-left-main"><LeftSectionMaterial></LeftSectionMaterial></div>);
                    break;
                default:
                    content = (<div className="content-left-main"><LeftSectionText></LeftSectionText></div>);
            }
        }
        return (
            <div className="content-left">
                <div className="content-left-menu">
                    <div className={this.props.leftMenu.alias === 'text' ? 'div-selected':null} alias="text" onClick={this.showLeftMenu}>
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-wenzi1"></use>
                        </svg>
                        <span className="butText">文字</span>
                    </div>
                    <div className={this.props.leftMenu.alias === 'material' ? 'div-selected':null} alias="material" onClick={this.showLeftMenu}>
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-tupian"></use>
                        </svg>
                        <span className="butText">素材</span>
                    </div>
                    <div className={this.props.leftMenu.alias === 'background' ? 'div-selected':null} alias="background" onClick={this.showLeftMenu}>
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-background"></use>
                        </svg>
                        <span className="butText">背景</span>
                    </div>
                    <div className={this.props.leftMenu.alias === 'line' ? 'div-selected':null} alias="line" onClick={this.showLeftMenu}>
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-fengexian"></use>
                        </svg>
                        <span className="butText">线条</span>
                    </div>
                    <div className={this.props.leftMenu.alias === 'upload' ? 'div-selected':null} alias="upload" onClick={this.showLeftMenu}>
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-fasong"></use>
                        </svg>
                        <span className="butText">上传</span>
                    </div>
                </div>

                {content}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    leftMenu: state.leftMenu
})

export default connect(mapStateToProps, {showLeftMenu})(ContentLeft);