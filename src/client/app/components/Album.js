
import $ from 'jquery';
import React from 'react';
import SearchBar from './SearchBar' ;
import MainTable from './MainTable' ;


export default class Album extends React.Component{

    constructor(props){

        super(props);
        this.state = {
          data: [],
          filterTitleText: "",
          filterUserIdText:""
        };

        this.onUserInput = this.onUserInput.bind(this);
        
    }

    loadData() {

        $.ajax({
          url: this.props.url,
          method: 'GET',
          success: (data)=> {
            this.setState({
              data: data
            });
          } ,
          error: (xhr, status, err)=> {
            console.error(this.props.url, status, err.toString());
          } 
        });

      }

      onUserInput(title, userId) {
        this.setState({
          filterTitleText: title,
          filterUserIdText:userId
        });
      }

 

      componentDidMount () {
        this.loadData();
      }


      render() {
        return ( 
          <div>
            <SearchBar 
                filterTitleText={this.state.filterTitleText}  
                filterUserIdText={this.state.filterUserIdText}
                onUserInput={this.onUserInput} /> 
            
            <MainTable 
                data={this.state.data} 
                filterTitleText={this.state.filterTitleText}  
                filterUserIdText={this.state.filterUserIdText} /> 
          </div>
        );
      }

 
};



    