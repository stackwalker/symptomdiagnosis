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

  componentWillReceiveProps(nextProps) {}

  onSelectChange(e) {
    const val = parseInt(e.target.value)
  
    this.setState({numberOfResults: val})
    this.props.onChangeNumberOfResults(val)
  }

  onInputSubmit(e) {
    e.preventDefault()

    const input = this.input
    const newSx = this.state.symptoms.slice()
    newSx.push(input.value)
    
    input.value = ''
    
    this.setState({symptoms: newSx})
    this.props.onChangeSymptoms(newSx)
  }

  onDeleteSymptom(sx) {
    const newSx = this.state.symptoms.filter(function (symptom) {
      return symptom !== sx
    })

    this.setState({symptoms: newSx})
  }

  renderSymptoms() {
    return (
      <ul>
        {this.state.symptoms.map(symptom => {
          return (
            <li>
              {symptom}
              <svg viewBox="0 0 40 40" onClick={function(){this.onDeleteSymptom(symptom)}.bind(this)}>
                <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
        <div className='configuration-sidebar'>
            <div className='config-box'>
                <div>Load Dataset</div>
                <select onChange={this.onSelectChange} value={this.state.numberOfResults}>
                    <option value="100">100</option>
                    <option value="1000">1000</option>
                </select>
            </div>
            <div className='config-box'>
                <div>Add a Symptom:</div>
                <form onSubmit={this.onInputSubmit}>
                    <input type="text" ref={function(input) {this.input = input}.bind(this)} />
                    <button type="submit">Add</button>
                </form>
            </div>
            <div className='config-box'>
                {this.renderSymptoms()}
            </div>
        </div>
    )
  }
}

export default Form
