import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addText } from '../../../actions/element/textAction'
import {Button} from 'antd';

import imgUrl from '../../../static/images/111.JPG'

class LeftSectionText extends Component {
    constructor(props) {
        super(props);
        this.addText = this.props.addText.bind(this);
    }
    render() {
        this.props.textele.texts.forEach((item) => {
            console.log("item");
        });
        return (
            <div className="lefe-section-text">
              Text
              <Button onClick={this.addText}>添加文字</Button>
              <img style={{width:'20px'}} src={imgUrl}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    textele: state.textele
})

export default connect(mapStateToProps, {addText})(LeftSectionText);