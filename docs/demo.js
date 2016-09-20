import React from 'react';

import JsPmLoader from '../src';

const SAMPLE_PROPS = {
  json: [{
    task: "Learn React",
    done: true
  }, {
    task:"Share XP",
    done: false
  }, {
    task:"Write Book",
    done: false
  }, {
    task:"Have fun",
    done: true
  }, {
    task:"Profit",
    done: false
  }]
};

class Demo extends React.Component {
  render() {
    return (<div style={ { textAlign:'center', margin: '0 auto' } }>
              <h3>async loading of react-json-viewer component with JSPM</h3>
              <center>
                <JsPmLoader module="npm:react-json-viewer" props={ SAMPLE_PROPS }>
                    <div>Loading remote component...</div>
                </JsPmLoader>
              </center>
            </div>)
  }
}

export default Demo
