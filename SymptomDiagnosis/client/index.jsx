import React from 'react'
import { render } from 'react-dom'

import Form from './Form.jsx'
import ResultList from './ResultList.jsx'

const styles = {
  fontFamily: 'sans-serif'
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getDx = this.getDx.bind(this)

    this.state = { results: null, data: null}
  }


  getDx(numResults, symptomsArr) {
    const that = this
    if (symptomsArr.length) {
     fetch(
       '/api/diagnoses',
       {
         method: 'POST',
         mode: 'cors',
         body: JSON.stringify(
           {
             "fileName": `encounters${numResults}.json`,
             "reportedSymptoms": symptomsArr           }
         )
       }
     )
       .then(function (response) {
         return response.json()
       })
       .then(function (json) {
         that.setState({results: json.results, data: json.data})
       })
    } else {
        this.setState({ results: [], data: []})
    }

  }


  render() {
    console.log(this.state)      
    return (
      <div style={styles}>

        <Form onChange={this.getDx} />

        <ResultList
          results={this.state.results}
          data={this.state.data}
        />

      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
