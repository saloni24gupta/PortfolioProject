import React from 'react'

const MenuCard = ({menuData}) => {
    console.log(menuData)
  return (
    <div className='card-container'>
    <div className="card">
        <div className="card-body">
            <span className='card-number card-circle subtle' >1</span>
             <span className='card-author sbtle' style={{color: "red"}}>BreakFast</span>
             <h2 className="card-title">Maggie</h2>
             <span className="card-description subtle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit eum praesentium sapiente. Laboriosam animi cumque recusandae aliquid, deleniti ad itaque at libero placeat impedit quas cum modi quidem? Exercitationem!
             </span>
           <div className="card-read">Read</div>

        </div>
        {/* <img src={image} alt="images"  className='card-media'/> */}
        <span className='card-tag subtle'>Order Now</span>
    </div>
</div>
  )
}

export default MenuCard