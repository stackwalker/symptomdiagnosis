import React from 'react'

class DataList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.data && this.props.data.map((dx,i) => {
            return (
              <li key={i}>
                {dx.name} ({ (dx.similarityIndex + '').substring(0, 4) })
              </li>
            )
          })
        }
      </div>
    )
  }
}

export default DataList
