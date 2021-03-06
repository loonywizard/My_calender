import React from "react";
import { connect } from "react-redux";

class Plan extends React.Component {

    complete() {
        if (!this.props.completed) {
            this.props.onCompleted(this.props.index);
        }
    }

    remove() {
        this.props.onRemoveButtonPressed(this.props.index);
    }

    render() {

        const status = this.props.completed ? 
            <div className="complete completed" >Завершено</div> :
            <div onClick={this.complete.bind(this)} className="complete" >Завершить</div>;
        const tags = this.props.tags.length === 0 ?
            "" : <div className="tags">{this.props.tags}</div>;   
        return (
            <div className="plan">
                {status}
                <div className="delete" onClick={this.remove.bind(this)}>Удалить</div>
                <div className="text">{this.props.text}</div>
                {tags}
            </div>
        );

    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onCompleted: (indexOfPlan) => dispatch({
            type: 'PLAN_WAS_COMPLETED', indexOfPlan
        }),
        onRemoveButtonPressed: (indexOfPlan) => dispatch({
            type: 'REMOVE_PLAN_BUTTON_WAS_PRESSED', indexOfPlan
        })
    })
)(Plan);