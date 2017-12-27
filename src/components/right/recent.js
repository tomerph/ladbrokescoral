import React from 'react';

const RecentSearch = props =>{

  const recent = props.recent.map(recentSearch =>{
    return (
    <li key={recentSearch} onClick={()=> props.search(recentSearch)}>{recentSearch}</li>
    )
  });


  return (
    <div>
    <h3>Recent Search</h3>
    <ul>
    {recent}
    </ul>
    </div>)
}

export default RecentSearch;
