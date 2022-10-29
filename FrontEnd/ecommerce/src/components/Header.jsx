import React from 'react'
import {Link, navLink} from "react-router-dom"

function Header() {
  return (
    <header>
<div className='container'>
<div className='d-flex justify-content-between align-items-center'/>
<div className='logo'/>
<Link to = "/" className='brand'>
    Echrini
</Link>
</div>
<div className='nav nav-pills'>
<Link to = "/" className=''> Home</Link>
<Link to = "about" className=''>About</Link>
<Link to = "products" className=''>Products</Link>
<Link to = "posts" className=''>Posts</Link>
</div>
    </header>

  )
}

export default Header