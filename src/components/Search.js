import React from 'react'
import { Input } from 'semantic-ui-react'
import { TextConstants } from 'constants/TextConstants';

export default class Search extends React.Component {
  state = {text: ''}

  handleTextChange = event => {
    this.setState({
      text: event.target.value.trim()
    })
    // this.props.findItems(event.target.value.trim())
  }

  render () {
    return (
      <Input
        style={{marginLeft: '40px'}}
        icon='search'
        value={this.state.text}
        placeholder={TextConstants.PLACEHOLDERSEARCH}
        onChange={this.handleTextChange}
      />
    )      
  }
}
