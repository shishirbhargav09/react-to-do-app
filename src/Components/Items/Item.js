import React, { useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import './Item.css'
function Item(props) {
  const {text} = props;
  const [deleteitem, setDeleteitem] = useState(0)
  const deleteitemHandler = () => {
    console.log("DELETD")
    if (deleteitem===1) {
      setDeleteitem(0)
    }
    else {
      setDeleteitem(1)
    }
    
    console.log(deleteitem)
    
  }
  return (<>
    <div className='item'>
    <div className='description' style={{
      textDecoration: deleteitem ? 'line-through red' : 'none'
    }}>{text}</div>
    <div className='delete'><AiOutlineDelete onClick={deleteitemHandler}
    /></div>
    </div>
    
    </>
  )
}

export default Item