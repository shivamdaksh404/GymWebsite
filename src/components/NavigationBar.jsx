import React from 'react'
import { linkData } from '../utils/data'
import { Link } from 'react-router-dom'
import style from './NavigationBar.module.css'
// import Button from '@mui/material/Button'

export default function NavigationBar() {

  



  return (
    <div className={style.mainContainer}>
      <img src="/logo.png"  height={100} width={150} alt="" />
    <div className={style.linksWrapper}>
      {linkData.map((ele,index)=> <li key={index}>
        <Link to={ele.path} >{ele.linkName}</Link>
      </li>)}
      {/* <Button variant="contained">Join Us</Button> */}
    </div>


    
    </div>
  )
}
