import React from 'react'

class ResultList extends React.Component {
  render() {
    // scale the values to determine opacity
    const scale = function (num, lowScale, hiScale, min, max) {
      return (hiScale - lowScale) * (num - min) / (max - min) + lowScale
    }

    return (
      <div>
        {
          this.props.results && this.props.results.map(dx => {
            const width = scale(dx.count, 5, 100, this.props.results[this.props.results.length - 1].count, this.props.results[0].count)

            return (
              <li key={dx.name}>
                {dx.name}
                <span className="bar" style={{width: width + '%'}}>{dx.count}</span>
              </li>
            )
          })
        }
      </div>
    )
  }
}

export default ResultList
