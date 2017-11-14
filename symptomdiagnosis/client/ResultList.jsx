import React from 'react'

class ResultList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.results && this.props.results.map(dx => {
            return <li key={dx.name}>{dx.name}</li>
          })
        }
      </div>
    )
  }
}

export default ResultList
