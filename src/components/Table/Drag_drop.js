import React from 'react';
import './Drag_drop.css';

class Drag_drop extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(
      `Selected file - ${this.fileInput.current.files[0]}`
    );
    var csv = this.fileInput.current.files[0];
     fetch('http://localhost:3000/file', {
      method: 'post',
      headers: {'Content-Type': 'text/plain',
                'email': this.props.user.email},
      body: this.fileInput.current.files[0]
  })
}

  render() {
    return (
      <div className="dragDropField">
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Drag_drop