import React from 'react'
import { connect } from 'react-redux'
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = ({curItem}) => {
  if (curItem === false) return null
  return (<ItemDetail item={curItem}/>)
}

const mapStateToProps = state => ({
  curItem: state.mainReducer.curItem
})

export default connect(mapStateToProps, null)(ItemDetailContainer)

