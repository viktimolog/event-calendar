import React from 'react'
import { connect } from 'react-redux'
import Header from 'components/Header'

const HeaderContainer = ({ findItems }) => {
    //   if (curItem === false) return null
    return (
        <Header 
        
        />
    )
}

const mapStateToProps = state => ({
    //   curItem: state.mainReducer.curItem
})

const mapDispatchToProps = {
    // findItems
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

