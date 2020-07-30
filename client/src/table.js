import React from 'react';

export const Table = (props) => {
    function getKeys(){
      if (!props.data?.length) {
        return [];
      }
      return Object.keys(props.data[0]);
    }
    
    function getHeader(){
      var keys = getKeys();
      return keys.map((key, index)=>{
        return <th key={index}>{key.toUpperCase()}</th>
      })
    }
    
    function getRowsData(){
      var items = props.data;
      var keys = getKeys();
      return items.map((row, index)=>{
        return <tr key={index}><RenderRow data={row} keys={keys}/></tr>
      })
    }
    
    return (
      <div>
        <table>
        <thead>
          <tr>{getHeader()}</tr>
        </thead>
        <tbody>
          {getRowsData()}
        </tbody>
        </table>
      </div>
    );
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={index}>{props.data[key]}</td>
  })
}