import React, { Component } from 'react';
import '../../css/ContentLeft.css'

class ContentLeft extends Component {
    render() {
        return (

            <div className="content-left">
                <div className="content-left-menu">
                    <div alias="text">
                        <svg className="icon" aria-hidden="true">
                            <use href="#icon-wenzi1"></use>
                        </svg>
                        <span className="butText">文字</span>
                    </div>
                    <div alias="material">
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
                </div>
            </div>
        );
    }
}

export default ContentLeft;