class Button extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", null, "Button");
  }

}

function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    console.log(e.target.name);
  }

  return /*#__PURE__*/React.createElement("form", {
    action: "",
    name: props.name,
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "name"
  }), /*#__PURE__*/React.createElement(Button, null));
}

const container = document.querySelector('.root');
ReactDOM.render( /*#__PURE__*/React.createElement(Form, {
  name: "form"
}), container);
