import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import FormControls from './FormControls'

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className="row">
                <div className='col-sm-2'>

                    <FormControls
                        onChangeNumberOfResults={function(num) { }}
                        onChangeSymptoms={function(sxArr) { }}
                    />

                </div>
                <div className='col-sm-6'>
                    <h3>Results</h3>
                </div>
                <div className='col-sm-3'>
                    <h3>Data</h3>
                </div>
            </div>
        )
    }
}
