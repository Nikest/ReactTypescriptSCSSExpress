import * as React from 'react';
import {cd} from 'Services';

@cd(() => require('./Base.scss'))
export class Base extends React.Component {
    render(c?) {
        return (
            <div className={c('container')}>
                <h1>Framework</h1>
                <h2>React SCSS</h2>
                <h2>Node Express</h2>
            </div>
        )
    }
}
