import React from 'react';

import ListItem from './list_item'

const List = props => {


   const listItem = props.tracks.map((track,i) =>{
     while(i <=6){
       return (
         <ListItem  track={track}
         key = {track.user_id}
         onSongSelect = {props.onSongSelect}/>
       )
     }

   });
   return (
     <ul>
     {listItem}

     </ul>);

}

export default List;
