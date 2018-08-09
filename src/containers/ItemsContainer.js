import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Items from '../components/Items'
import Search from '../components/Search'
import { getItems, setCurItem, findItems } from '../actions/actionCreator'

class ItemsContainer extends React.Component {

  componentDidMount() {
    this.props.getItems(this.getCurMonth())
  }

  getCurMonth = () => {
    const dayTime = 86400000
    let month = []
    let date = new Date()
    // let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    // alert(firstDay.getDay())//3 ok
    let one = firstDay.getTime() - (firstDay.getDay() - 1) * dayTime

    // alert(new Date(one))//OK 30/07

    for (let i = one; i < one + 42 * dayTime; i += dayTime)
      month.push(i)
    // console.log('month=', month)//ok
    return month;
  }

  render() {
    return (
      <div>
        {/* <Search findItems={this.props.findItems} /> */}
        <Items
          items={this.props.items}
          setCurItem={this.props.setCurItem} />
      </div>)
  }
}

ItemsContainer.propTypes = {
  items: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  findItems: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  items: state.mainReducer.items
})

const mapDispatchToProps = {
  setCurItem,
  getItems,
  findItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)

