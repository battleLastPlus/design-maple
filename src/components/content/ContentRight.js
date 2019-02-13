import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/ContentRight.css'
import { Button, Radio, Icon } from 'antd'

// import {showRightMenu} from '../../actions/rightMenuAction'

class ContentRight extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content-right">
                <div className="top-menu">
                    <Radio.Group value="default" >
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     rightMenu: state.rightMenu
// })

// export default connect(mapStateToProps, {showRightMenu})(ContentRight);
export default ContentRight;