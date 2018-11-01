import React from "react";
import { connect } from "react-redux";
import TextField from "./TextField";
import DropDown from "./DropDown";

class Flexi extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          switch (item.type) {
            case "TextField":
              return <TextField itemIndex={index} />;
            case "DropDown":
              return <DropDown itemIndex={index} />;
            default:
              return null;
          }
        })}
        <button
          className="space"
          type="button"
          onClick={() => {
            console.log(this.props.items);
            alert("The Json Object with the answers is printed in console");
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.flexiConfig.items
  };
}
export default connect(mapStateToProps)(Flexi);
