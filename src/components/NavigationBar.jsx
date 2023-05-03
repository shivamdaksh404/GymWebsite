import React from 'react'
import { linkData } from '../utils/data'
import { Link } from 'react-router-dom'

export default function NavigationBar() {

  



  return (
    <div>
    <div>
      <img src="" alt="" />
      {linkData.map((ele,index)=> <li key={index}>
        <Link to={ele.link} >{ele.linkName}</Link>
      </li>)}
    </div>


    
    </div>
  )
}
