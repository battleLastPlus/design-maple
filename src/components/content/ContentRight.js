import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/ContentRight.css'

// import {showRightMenu} from '../../actions/rightMenuAction'

class ContentRight extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content-right">
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     rightMenu: state.rightMenu
// })

// export default connect(mapStateToProps, {showRightMenu})(ContentRight);
export default ContentRight;