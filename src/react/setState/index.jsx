import React from "react";


export default class CustomComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        name: "john",
        age: 18,
      },
    };
  }
  handleClick = () => {
    this.state.formData.name = "abc";
    const { formData } = this.state;
    console.log(formData === this.state.formData);
    this.setState({
      formData,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>按钮</button>
        {this.state.formData.name}
        {this.state.formData.age}
      </>
    );
  }
}
