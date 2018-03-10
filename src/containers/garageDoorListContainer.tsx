import React from 'react'
import {connect} from "react-redux";
import {loadGarageDoors, triggerOpener} from "../actions/garageDoorActions";
import {bindActionCreators} from "redux";
import GarageDoorList from "../components/garageDoorList";

class GarageDoorListContainer extends React.Component {
    props: any;

    async componentDidMount() {
        await this.props.actions.loadGarageDoors();
    }

    render() {
        return (
            <GarageDoorList garageDoors={this.props.garageDoorList.garageDoors} triggerOpener={this.props.actions.triggerOpener}/>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        garageDoorList: state.garageDoorList
    };
}

function mapActionToProps(dispatch: any) {
    return {
        actions: bindActionCreators({loadGarageDoors, triggerOpener}, dispatch)
    };
}

export default connect(mapStateToProps, mapActionToProps)(GarageDoorListContainer);