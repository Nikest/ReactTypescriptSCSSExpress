import * as React from 'react';
import { cd } from 'Services';
import { Base } from 'Components';

@cd(() => require('./Core.scss'))
export class Core extends React.Component {
  render(c?) {
    return (
      <div className={c('container')}>
        <Base/>
      </div>
    )
  }
}

