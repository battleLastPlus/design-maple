import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/ContentRight.css'
import { Button, Radio, Icon } from 'antd'

import RightSectionPage from './rightSection/RightSectionPage'
import RightSectionText from './rightSection/RightSectionText'

import { showRightMenu } from '../../actions/rightMenuAction'


class ContentRight extends Component {
    constructor(props) {
        super(props);
        this.showRightMenu = this.props.showRightMenu.bind(this);
    }
    render() {
        let content = null;
        switch(this.props.rightMenu.alias){
            case 'text':
                content = (<div className="content-right-main"><RightSectionText></RightSectionText></div>);
                break;
            default:
                content = (<div className="content-right-main"><RightSectionPage></RightSectionPage></div>);
        }

        return (
            <div className="content-right">
                <div className="top-menu">
                    <Radio.Group value={this.props.rightMenu.alias} onChange={this.showRightMenu} >
                        <Radio.Button value="text" aa={this.props.rightMenu.alias}>文字</Radio.Button>
                        <Radio.Button value="page">页面</Radio.Button>
                    </Radio.Group>
                </div>
                <div className="tools">
                    {content}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    rightMenu: state.rightMenu
})

export default connect(mapStateToProps, {showRightMenu})(ContentRight);