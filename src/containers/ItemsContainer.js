import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Items from 'components/Items'
import Header from 'components/Header'

import { getItems, setCurItem, findItems, addEvent } from 'actions/actionCreator'

const dayTime = 86400000;

class ItemsContainer extends React.Component {

  state = {
    month: [],
    firstDayMonth: null,
    lastDayMonth: null,
    countMonth: null,
    year: null,
    events: []
  }

  componentDidMount() {
    // this.props.getItems(this.getCurMonth())
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

    // alert('date.getMonth()='+date.getMonth())//ok

    // let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
    const firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // alert('lastDayMonth = '+lastDayMonth)//ok

    // alert(firstDay.getDay())//3 ok

    let firstDayScreen;

    if (firstDayMonth.getDay() === 0) firstDayScreen = firstDayMonth.getTime() - 6 * dayTime

    else firstDayScreen = firstDayMonth.getTime() - (firstDayMonth.getDay() - 1) * dayTime

    // alert('firstDayScreen = ' + new Date(firstDayScreen))

    const lastDayScreen = firstDayScreen + 42 * dayTime;

    // alert(new Date(one))//OK 30/07

    for (let i = firstDayScreen; i < lastDayScreen; i += dayTime)
      month.push(i)
    // month.push(new Date(i))//00-00-00
    // console.log('month=', month)//ok
    this.setState({
      month,
      firstDayMonth,
      lastDayMonth,
      countMonth: date.getMonth(),
      year: date.getFullYear(),
      events: this.props.events
        .filter(event => event.date >= firstDayScreen)
        .filter(event => event.date < lastDayScreen + dayTime)
    })
    // return month;
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
        />
        {/* <Search findItems={this.props.findItems} /> */}
        <Items
          // items={this.props.items}
          items={this.state.month}
          // events={this.state.events}
          events={this.props.events}

          
        />
      </div>)
  }
}

ItemsContainer.propTypes = {
  items: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  findItems: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  events: state.mainReducer.events,
})

const mapDispatchToProps = {
  setCurItem,
  getItems,
  findItems,
  addEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)

