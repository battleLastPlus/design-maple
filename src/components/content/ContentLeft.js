import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/ContentLeft.css'

import LeftSectionText from './leftSection/LeftSectionText'
import LeftSectionMaterial from './leftSection/LeftSectionMaterial'

import {showLeftMenu} from '../../actions/leftMenuAction'

class ContentLeft extends Component {
    showLeftContent = (e) =>  {
    }
    render() {
        let content = (<LeftSectionText></LeftSectionText>);
        console.log("this.props.alias", this.props.leftMenu.alias);
        switch(this.props.leftMenu.alias){
            case 'material':
            console.log("--------material");
                content = <LeftSectionMaterial></LeftSectionMaterial>;
                break;
            default:
            console.log("--------text");
                content = <LeftSectionText></LeftSectionText>;
        }
        console.log("content", content);
        return (
            <div className="content-left">
                <div className="content-left-menu">
                    <div alias="text">
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-wenzi1"></use>
                        </svg>
                        <span className="butText">文字</span>
                    </div>
                    <div alias="material" onClick={this.props.showLeftMenu.bind()}>
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-tupian"></use>
                        </svg>
                        <span className="butText">素材</span>
                    </div>
                    <div alias="background">
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-background"></use>
                        </svg>
                        <span className="butText">背景</span>
                    </div>
                    <div alias="line">
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-fengexian"></use>
                        </svg>
                        <span className="butText">线条</span>
                    </div>
                    <div alias="upload">
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-fasong"></use>
                        </svg>
                        <span className="butText">上传</span>
                    </div>
                </div>

                <div className="content-left-main">
                    {content}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    leftMenu: state.leftMenu
})

export default connect(mapStateToProps, {showLeftMenu})(ContentLeft);