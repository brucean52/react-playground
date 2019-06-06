import React, { Component } from 'react'

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

  handleClear() {
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Enter Title' value={title} onChange={e => this.setState({title: e.target.value})}/>
          <input type="text" placeholder='Enter Description' value={description} onChange={({target}) => this.setState({description: target.value})}/>
          <button className='btn'  type="submit" >Submit</button>
          {/* binding this is usually donein constructor */}
          <button className='btn'  onClick={this.handleClear.bind(this)} >Clear</button>
        </form>
        <div>{outputMessage}</div>
      </div>
    );
  }
}

export default Home;