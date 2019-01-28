import React, { Component } from 'react';
import '../../css/ContentLeft.css'
import LeftSectionText from './leftSection/LeftSectionText'
import LeftSectionMaterial from './leftSection/LeftSectionMaterial'

class ContentLeft extends Component {
    constructor() {
        super();
        this.state = {
            alias : "text"
        }
    }

    showLeftContent = (e) =>  {
        console.log("aaaaaa");
        this.setState({
            alias: "material"
        })
        console.log(this.state.alias);
    }
    render() {
        let content = (<LeftSectionText></LeftSectionText>);
        switch(this.state.alias){
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
                    <div alias="material" onClick={this.showLeftContent.bind()}>
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

export default ContentLeft;