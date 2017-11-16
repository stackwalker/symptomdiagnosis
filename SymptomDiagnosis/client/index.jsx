import React from 'react'
import { render } from 'react-dom'

import Form from './Form.jsx'
import ResultList from './ResultList.jsx'
import DataList from './DataList.jsx'

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
    return (
      <div className="container">
        <div className="row">
          <div className="column column-25">
            <Form onChange={this.getDx} />
          </div>
          <div className="column">
            <ResultList
              results={this.state.results}
              data={this.state.data}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <DataList data={this.state.data}/>
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
