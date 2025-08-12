import React, { Component } from 'react'
import { HiOutlineTrash } from "react-icons/hi"
import { HiOutlinePlus } from "react-icons/hi"
import { HiOutlineMinus } from "react-icons/hi"

export class Order extends Component {
  render() {
    return (
      <div className= 'item' >
            <img src={'./img/'+ this.props.item.img} />
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}</b>
            <HiOutlineTrash className='delete-icon' onClick={()=>this.props.onDelete(this.props.item.id)} />
            <HiOutlinePlus className='pluse-icon' onClick={()=>this.props.onDuplicate(this.props.item.id)} />
            <HiOutlineMinus  className='minus-icon' onClick={()=>this.props.onDuplicate(this.props.item.id)} />
           <br/><h3 id={this.props.item.id} >1</h3>

      </div>
    )
  }
}

export default Order