import React, { Component } from "react";

class TOC extends Component{
    // 성능 향상을 위한 shouldComponentUpdate사용하기 위해 concat
    // 성능 향상 고려하지 않을 경우 push를 사용해도 됨
    shouldComponentUpdate(newProps, newState){
      if(this.props.data === newProps.data){
        return false;
      }
      return true;
    }
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
          href={"/content/"+data[i].id}
          // data-id={data[i].id}
          onClick={function(id, e){
            e.preventDefault();
            this.props.onChangePage(id);
          }.bind(this, data[i].id)}
          >{data[i].title}</a>
          </li>);
        i = i + 1;
      }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

  export default TOC;