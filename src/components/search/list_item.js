import React from 'react';

const ListItem = ({track, onSongSelect}) =>{



return (

  <li
  onClick={()=>{onSongSelect(track)}}

  >
  <img width='100px' height='100px' src={track.artwork_url} />
  {track.title}

  </li>
);
}

export default ListItem;
