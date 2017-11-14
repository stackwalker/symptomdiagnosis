import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.onSelectChange = this.onSelectChange.bind(this)
    this.onInputSubmit = this.onInputSubmit.bind(this)
    this.onDeleteSymptom = this.onDeleteSymptom.bind(this)
    this.renderSymptoms = this.renderSymptoms.bind(this)

    this.state = { numberOfResults: 100, symptoms: [] }
  }


  onSelectChange(e) {
    const val = parseInt(e.target.value)
  
    this.setState({numberOfResults: val})
    this.props.onChange(val, this.state.symptoms)
  }


  onInputSubmit(e) {
    e.preventDefault()

    const input = this.input
    const newSx = this.state.symptoms.slice()
    newSx.push({ name: input.value })
    
    input.value = ''
    
    this.setState({symptoms: newSx})
    this.props.onChange(this.state.numberOfResults, newSx)
  }


  onDeleteSymptom(sx) {
    const newSx = this.state.symptoms.filter(function (symptom) {
      return symptom.name !== sx
    })

    this.setState({symptoms: newSx})
    this.props.onChange(this.state.numberOfResults, newSx)
  }


  renderSymptoms() {
    return (
      <ul>
        {this.state.symptoms.map((symptom, i) => {
          return (
            <li key={"symtom_" + i}>
              {symptom.name}
              <svg viewBox="0 0 40 40" onClick={function(){this.onDeleteSymptom(symptom.name)}.bind(this)}>
                <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </li>
          )
        })}
      </ul>
    )
  }


  render() {
    return (
      <div>
        <select onChange={this.onSelectChange} value={this.state.numberOfResults}>
          <option value="10">10</option>
          <option value="100">100</option>
          <option value="1000">1000</option>
          <option value="10000">10000</option>
        </select>

        <form onSubmit={this.onInputSubmit}>
          <input type="text" ref={function(input) {this.input = input}.bind(this)} />
        </form>

        {this.renderSymptoms()}
      </div>
    )
  }
}

export default Form
