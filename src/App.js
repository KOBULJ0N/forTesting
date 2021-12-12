import './App.css';
import React, { Component } from 'react';
import { Datalist } from './data';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      count: 0,
      data: { Datalist },
    };
  }

  render() {
    {
      /*Functions */
    }
    const decrement = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    };

    const increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    const onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    const onDelete = (e) => {
      let res = this.state.data.Datalist.filter((value) => value.id !== e);
      this.setState({
        data: {
          ...this.data,
          Datalist: res,
        },
      });
    };
    {
      /*Functions  End*/
    }
    return (
      <div className='main'>
        <div>
          <button onClick={decrement}>-</button>
          <button className='btn'>{this.state.count}</button>
          <button onClick={increment}>+</button>
          <br />
          {/* Name Input */}
          <div>
            <h1>{this.state.name}</h1>
            <input
              onChange={onChange}
              type='text'
              name='name'
              placeholder='name'
              value={this.state.name}
            />
          </div>{' '}
          <br />
          {/* Name Input */}
          <div>
            <h1>{this.state.surname}</h1>
            <input
              onChange={onChange}
              type='text'
              name='surname'
              placeholder='Surname'
              value={this.state.surname}
            />
          </div>
          <br />
          {!this.state.data.Datalist.length ? (
            <h1>No Data</h1>
          ) : (
            this.state.data.Datalist.map((value) => (
              <div key={value.id}>
                <h1>
                  {value.id} {value.name}{' '}
                  <button onClick={() => onDelete(value.id)}>delete</button>
                </h1>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
