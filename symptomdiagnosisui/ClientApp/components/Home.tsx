import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className="row">
                <div className='col-sm-2'>
                    <div className='configuration-sidebar'>
                        <div className='config-box'>
                            <div>Load Dataset</div>
                            <select>
                                <option>10 Encounters</option>
                                <option>10000 Encounters</option>
                            </select>
                        </div>
                        <div className='config-box'>
                            <div>Add a Symptom:</div>
                            <input type="text"/>
                            <button>Add</button>
                        </div>
                        <div className='config-box'>

                        </div>
                    </div>
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
