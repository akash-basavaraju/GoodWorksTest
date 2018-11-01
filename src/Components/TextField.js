import React from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../ActionTypes";

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateAnswer({ target: { value: "" } }, this.props.itemIndex);
  }
  render() {
    return (
      <div>
        <label className="space">{this.props.item.label}</label>
        <input
          className="space"
          type="text"
          value={this.props.item.answer}
          onChange={e => this.props.updateAnswer(e, this.props.itemIndex)}
        />
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return { item: state.flexiConfig.items[ownProps.itemIndex] };
}
function mapDispatchToProps(dispatch) {
  return {
    updateAnswer: (e, iIndex) =>
      dispatch({
        type: ActionTypes.UPDATE_ANSWER,
        payload: e.target.value,
        itemIndex: iIndex
      })
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextField);
