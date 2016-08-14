import React from 'react';
import {findDOMNode} from 'react-dom';
 
export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.props.onUserInput(
          findDOMNode(this.refs.filterTitleText).value.trim(),
          findDOMNode(this.refs.filterUserIdText).value.trim()
        );
    }

    render() {
        return ( 
          <form  className="form-inline" role="form" >
            <label   htmlFor="Filters " >Filters :</label>
            < input  className="form-control" 
                type="text" ref="filterTitleText" placeholder=" By Title..."
                value={this.props.filterTitleText}
                onChange={this.onChange} /> 
              
              < input className="form-control" 
                type="text" ref="filterUserIdText" placeholder=" By User ID ..."
                value={this.props.filterUserIdText}
                onChange={this.onChange} /> 
          </form>
        );
      }
 
};
