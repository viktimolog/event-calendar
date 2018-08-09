import React from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import { TextConstants } from '../constants/TextConstants'

const ItemDetail = ({item}) => {
  const paddingStyle = {
    paddingTop: '20px'
  }
  return (
    <Item.Group>
      <Item>
        <Item.Image
          src={item.general.avatar}/>
        <Item.Content>
          <Item.Header>{item.general.firstName} {item.general.lastName}</Item.Header>
          <Item.Description>
            <h3 style={paddingStyle}>{TextConstants.JOBTITLE}</h3>
            <p>{TextConstants.COMPANYTITLE}{item.job.company}</p>
            <p>{TextConstants.TITLECLIENT}{item.job.title}</p>
          </Item.Description>
          <Item.Description>
            <h3 style={paddingStyle}>{TextConstants.CONTACTTITLE}</h3>
            <p>{TextConstants.EMAILTITLE}{item.contact.email}</p>
            <p>{TextConstants.PHONETITLE}{item.contact.phone}</p>
          </Item.Description>
          <Item.Description>
            <h3 style={paddingStyle}>{TextConstants.ADDRESSTITLE}</h3>
            <p>{TextConstants.STREETTITLE}{item.address.street}</p>
            <p>{TextConstants.CITYTITLE}{item.address.city}</p>
            <p>{TextConstants.ZIPCODETITLE}{item.address.zipCode}</p>
            <p>{TextConstants.COUNTRYTITLE}{item.address.country}</p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

ItemDetail.propTypes = {
  curItem: PropTypes.object
}

export default ItemDetail