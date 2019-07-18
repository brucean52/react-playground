import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class Home extends Component {
  // class components has state
  constructor(props){
    super(props);

    this.state = {
        title: '',
        description: '',
        outputMessage: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
      event.preventDefault();
      this.setState({
          title: '',
          description: '',
          outputMessage: 'Enter clicked!'
      });
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({
      title: '',
      description: '',
      outputMessage: 'Clear clicked!'
  });
  }
  // Render method is called whenever state changes
  render() {
    const { title, description, outputMessage } = this.state;
    // return JSX
    return (
      <div>
        <h2>Simple Form</h2>
        {/* Inputs implemented in different ways */}
        <form >
          <Input type="text" placeholder='Enter Title' value={title} onChange={e => this.setState({title: e.target.value})}/>
          <Input type="text" placeholder='Enter Description' value={description} onChange={({target}) => this.setState({description: target.value})}/>
          <Button className='btn' color="primary" onClick={this.handleSubmit} >Submit</Button>
          {/* binding this is usually done in constructor */}
          <Button className='btn' color="danger" onClick={this.handleClear.bind(this)} >Clear</Button>
        </form>
        <div>{outputMessage}</div>
      </div>
    );
  }
}

export default Home;