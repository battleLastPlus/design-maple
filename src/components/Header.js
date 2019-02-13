import React, { Component } from 'react';
import MyIcon from './common/MyIcon'
import '../css/Header.css'
import logoTextPath from '../static/images/logotext.png'
import logoPath from '../static/images/logo.png'
import Input from 'antd/lib/input'

class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="logo">
                    <img className="logotext" src={logoTextPath} />
                    <img className="logoimg" src={logoPath} />
                </div>
                <div className="left-header">
                    <div className="create">
                        <span className="butText">新建设计</span>
                    </div>

                    <div className="size">
                        <span className="butText">尺寸:</span>
                        <span className="butText">90x50</span>
                    </div>

                    <div className="setting">
                        {/* <svg className="icon" aria-hidden="true">
                            <use href="#icon-cog"></use>
                        </svg> */}
                        <MyIcon className="top-icon" type="icon-cog" />
                        <span className="butText">设置</span>
                    </div>

                    <div className="undo">
                        <MyIcon className="top-icon" type="icon-undo" />
                        <span className="butText">撤销</span>
                    </div>

                    <div className="repeat">
                        <MyIcon className="top-icon" type="icon-repeat" />
                        <span className="butText">还原</span>
                    </div>
                </div>



                <div className="right-header">
                    <div className="template-name">
                        {/* <el-input v-model="templateName" placeholder="请输入内容"></el-input> */}
                        <Input defaultValue='设置名字'></Input>
                    </div>
                    <div className="preview">
                        <MyIcon className="top-icon" type="icon-eye" />
                        <span className="butText">预览</span>
                    </div>
                    <div className="share">
                        <MyIcon className="top-icon" type="icon-paper-plane" />
                        <span className="butText">分享</span>
                    </div>
                    <div className="save">
                        <MyIcon className="top-icon" type="icon-floppy-o" />
                        <span className="butText">保存</span>
                    </div>
                    <div className="save">
                        <MyIcon className="top-icon" type="icon-download" />
                        <span className="butText">下载</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;