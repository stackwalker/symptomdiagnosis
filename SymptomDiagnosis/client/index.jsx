import React from 'react'
import { render } from 'react-dom'

import Form from './Form'
import ResultList from './ResultList'

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

    // fetch(
    //   'url.com',
    //   {
    //     method: 'GET',
    //     mode: 'cors',
    //     body: JSON.stringify(
    //       {
    //         "fileName": "encounters10000.json",
    //         "reportedSymptoms": [
    //           { "name": "cough" },
    //           { "name": "runny nose" }
    //         ]
    //       }
    //     )
    //   }
    // )
    //   .then(function (response) {
    //     return response.json()
    //   })
    //   .then(function (json) {
    //     that.setState({results: json.results, data: json.data})
    //   })

///////////////////////////////////////////////////////////////////////////////
// TEMPORARY UNTIL FETCH IS WIRED
///////////////////////////////////////////////////////////////////////////////
    this.setState({
      results: [
        {
          "Name": "influenza",
          "Count": 1894
        },
        {
          "Name": "bronchiolitis",
          "Count": 1231
        },
        {
          "Name": "allergies",
          "Count": 706
        },
        {
          "Name": "cold",
          "Count": 573
        },
        {
          "Name": "bronchitis",
          "Count": 198
        },
        {
          "Name": "sinusitis",
          "Count": 189
        },
        {
          "Name": "pertussis",
          "Count": 98
        },
        {
          "Name": "croup",
          "Count": 25
        },
        {
          "Name": "pneumonia",
          "Count": 1
        }
      ],
      data: [
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 1
        },
        {
          "Name": "pertussis",
          "SimilarityIndex": 1
        },
        {
          "Name": "pertussis",
          "SimilarityIndex": 1
        },
        {
          "Name": "bronchiolitis",
          "SimilarityIndex": 1
        },
        {
          "Name": "bronchiolitis",
          "SimilarityIndex": 1
        },
        {
          "Name": "bronchiolitis",
          "SimilarityIndex": 1
        },
        {
          "Name": "bronchiolitis",
          "SimilarityIndex": 1
        },
        {
          "Name": "bronchiolitis",
          "SimilarityIndex": 1
        },
        {
          "Name": "bronchiolitis",
          "SimilarityIndex": 1
        },
        {
          "Name": "bronchiolitis",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "allergies",
          "SimilarityIndex": 1
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "cold",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        },
        {
          "Name": "influenza",
          "SimilarityIndex": 0.66666666666666663
        }
      ]
    })
///////////////////////////////////////////////////////////////////////////////
// END TEMPORARY PIECE
///////////////////////////////////////////////////////////////////////////////
  }


  render() {
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
