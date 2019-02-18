import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/Design.css'

import imgUrl from '../../static/images/design.png'

class Design extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="design" ss={this.props.rightMenu.alias}>
                <div className="design-main">
                    <div className="design-canvas">
                        <div className="design-page">
                            <img src={imgUrl} alt=""/>
                        </div>
                    </div>
                    {/* <div className="design-cut"></div> */}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    rightMenu: state.rightMenu
})

export default connect(mapStateToProps, null)(Design);