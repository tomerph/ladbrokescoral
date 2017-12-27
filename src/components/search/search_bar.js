import React, {Component} from 'react';
import List from './list';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''}
  }
  render(){
    return (
    <div className='btnsearch'>
        <input
        placeholder='Search'
        onChange={event => {this.onInputChange(event.target.value)}}/>

        <button onClick ={event => {this.props.onSearch(this.state.term)}}>GO</button>
    </div>
    );
  }

  search(){
    this.props.onSearch(this.state.term);
  }

onInputChange(term){
  this.setState({term});
}

}


export default SearchBar;
