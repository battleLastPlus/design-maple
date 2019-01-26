import React, { Component } from 'react';
import '../css/Header.css'
import logoTextPath from '../static/images/logotext.png'
import logoPath from '../static/images/logo.png'
import Input from 'antd/lib/input'

class Header extends Component {
    render() {
        return (
            <div class="app-header">
                <div class="logo">
                    <img class="logotext" src={logoTextPath} />
                    <img class="logoimg" src={logoPath} />
                </div>
                <div class="left-header">
                    <div class="create">
                        <span class="butText">新建设计</span>
                    </div>

                    <div class="size">
                        <span class="butText">尺寸:</span>
                        <span class="butText">90x50</span>
                    </div>

                    <div class="setting">
                        <svg class="icon" aria-hidden="true">
                            <use href="#icon-cog"></use>
                        </svg>
                        <span class="butText">设置</span>
                    </div>

                    <div class="undo">
                        <svg class="icon" aria-hidden="true">
                            <use href="#icon-undo"></use>
                        </svg>
                        <span class="butText">撤销</span>
                    </div>

                    <div class="repeat">
                        <svg class="icon" aria-hidden="true">
                            <use href="#icon-repeat"></use>
                        </svg>
                        <span class="butText">还原</span>
                    </div>
                </div>



                <div class="right-header">
                    <div class="template-name">
                        {/* <el-input v-model="templateName" placeholder="请输入内容"></el-input> */}
                        <Input defaultValue='设置名字'></Input>
                    </div>
                    <div class="preview">
                        <svg class="icon" aria-hidden="true">
                            <use href="#icon-eye"></use>
                        </svg>
                        <span class="butText">预览</span>
                    </div>
                    <div class="share">
                        <svg class="icon" aria-hidden="true">
                            <use href="#icon-paper-plane"></use>
                        </svg>
                        <span class="butText">分享</span>
                    </div>
                    <div class="save">
                        <svg class="icon" aria-hidden="true">
                            <use href="#icon-floppy-o"></use>
                        </svg>
                        <span class="butText">保存</span>
                    </div>
                    <div class="save">
                        <svg class="icon" aria-hidden="true">
                            <use href="#icon-download"></use>
                        </svg>
                        <span class="butText">下载</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;