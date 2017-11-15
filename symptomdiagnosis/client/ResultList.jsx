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
            const opacity = scale(dx.count, 0.5, 1, this.props.results[this.props.results.length-1].count, this.props.results[0].count)
            // JavaScript laughing in the face of its strongly typed relatives:
            const fontSize = opacity * 48 + 'px'

            return <li style={{ opacity: opacity, fontSize: fontSize }} key={dx.name}>{dx.name} ({dx.count})</li>
          })
        }
      </div>
    )
  }
}

export default ResultList
