import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DesignElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let elements = this.props.eleBase;
        return (
            elements.map((ele, index) => {
                let style = {width: "100px", height: "50px"};
                return <div aa="wwwwwwwwwwwwwwwwwwww"></div>
                // <div key={index} className={ele.alias + '-div'} alias={ele.alias} style={{style}}>
                //     <div className={ele.alias + '-ele'}>

                //     </div>
                // </div>
            })
        );
    }
}
const mapStateToProps = state => ({
    eleBase: state.designElement.page
})

export default connect(mapStateToProps, null)(DesignElement);