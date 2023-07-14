import React from 'react'
import './App.css'

function MyApp() {
    const user = {
        name: 'Hedy Lamer',
        imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
        imagesize: 90,
      };
      let content;

  return (
    <>
     <button>i am button myaoo</button>
     <h1>{user.name}</h1>
     <img className='avatar' 
     src={user.imageUrl} alt={'photo of' + user.name}
     style={{
        width: user.imagesize,
        hieght: user.imagesize,
        
     }}
   
     />
    
     </>
   

  )

};

export default MyApp;