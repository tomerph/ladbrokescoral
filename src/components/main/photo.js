import React from 'react';


const Photo = ({track, play}) =>{
  // console.log(props.track);

  if(!track){
    return(
      <div>Please Search Your Song...</div>
    )
  }

  return(
    <div>
    <img src={track.artwork_url} onClick={()=>{play(track.id)}} />
    <p>Title: {track.title}</p>
    <p>Genre: {track.genre} </p>

</div>
  )


}


export default Photo;
