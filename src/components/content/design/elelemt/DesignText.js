import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DesignText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let texts = this.props.textele.texts;
        return (
            texts.map((text, index) => {
                let style = {width: "100px", height: "50px"}
                return <div key={index} className="text-div" style={{style}}>
                    <div className="text-ele">

                    </div>
                </div>
            })
        );
    }
}
const mapStateToProps = state => ({
    textele: state.textele
})

export default connect(mapStateToProps, null)(DesignText);