import React from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../ActionTypes";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateSelected(
      { target: { value: this.props.item.values[0] } },
      this.props.itemIndex
    );
  }
  render() {
    return (
      <div>
        <label className="space">{this.props.item.label}</label>
        <select
          className="space"
          onChange={e => this.props.updateSelected(e, this.props.itemIndex)}
          value={this.props.item.answer}
        >
          {this.props.item.values.map(value => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return { item: state.flexiConfig.items[ownProps.itemIndex] };
}
function mapDispatchToProps(dispatch) {
  return {
    updateSelected: (e, iIndex) =>
      dispatch({
        type: ActionTypes.DROP_SELECTED,
        payload: e.target.value,
        itemIndex: iIndex
      })
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDown);
