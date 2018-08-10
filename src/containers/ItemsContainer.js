import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Items from 'components/Items'
import Header from 'components/Header'

import { getItems, setCurItem, findItems, addEvent, editEvent } from 'actions/actionCreator'

const dayTime = 86400000;

class ItemsContainer extends React.Component {

  state = {
    month: [],
    firstDayMonth: null,
    lastDayMonth: null,
    countMonth: null,
    year: null
  }

  componentDidMount() {
    // this.props.getItems(this.getCurMonth())
    this.getCurMonth(new Date())
  }

  handleUpdate = () => {
    this.getCurMonth(new Date())
  }

  handleRight = () => {
    this.getCurMonth(new Date(this.state.lastDayMonth.getTime() + dayTime))
  }

  handleLeft = () => {
    this.getCurMonth(new Date(this.state.firstDayMonth.getTime() - dayTime))
  }

  getCurMonth = date => {
    let month = []

    const firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let firstDayScreen;

    if (firstDayMonth.getDay() === 0) firstDayScreen = firstDayMonth.getTime() - 6 * dayTime

    else firstDayScreen = firstDayMonth.getTime() - (firstDayMonth.getDay() - 1) * dayTime


    const lastDayScreen = firstDayScreen + 42 * dayTime;

    for (let i = firstDayScreen; i < lastDayScreen; i += dayTime)
      month.push(i);

    this.setState({
      month,
      firstDayMonth,
      lastDayMonth,
      countMonth: date.getMonth(),
      year: date.getFullYear()
    })
  }

  render() {
    // console.log(this.props.events)//ok
    return (
      <div>
        <Header
          countMonth={this.state.countMonth}
          year={this.state.year}
          handleRight={this.handleRight}
          handleLeft={this.handleLeft}
          addEvent={this.props.addEvent}
          handleUpdate={this.handleUpdate}
        />
        {/* <Search findItems={this.props.findItems} /> */}
        <Items
          // items={this.props.items}
          items={this.state.month}
          events={this.props.events}
          editEvent={this.props.editEvent}

          
        />
      </div>)
  }
}

ItemsContainer.propTypes = {
  items: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  findItems: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  editEvent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  events: state.mainReducer.events,
})

const mapDispatchToProps = {
  setCurItem,
  getItems,
  findItems,
  addEvent  ,
  editEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)

