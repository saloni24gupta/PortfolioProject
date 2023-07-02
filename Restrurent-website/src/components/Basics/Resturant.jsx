import React, { useState } from 'react';
import './style.css';
import image from '/src/assets/allupakoida.jpg'
import MenuCard from './MenuCard';
import Menu from '../MenuApi';
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
console.log(menuData)
  return (

    <MenuCard menuData={menuData}/>
  )
}

export default Resturant