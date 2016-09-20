import React, { Component } from 'react';
import script from 'scriptjs';

// load remote component and return it when ready
// display current children while loading
class JsPmLoader extends Component {
  state = {
    Component: null,
    error: null
  }
  static propTypes = {
    module: React.PropTypes.string.isRequired,
    props: React.PropTypes.object
  }
  componentDidMount() {
    // async load of remote UMD component
    script('https://jspm.io/system@0.19.js', () => {
      global.System.import(this.props.module).then(Component => {
        this.setState({
          error: null,
          Component: Component
        });
      }).catch(e => {
        const message = `Error loading ${this.props.module} : ${e}`;
        console.error(message);
        this.setState({
          error: message,
          Component: null
        });
      });
    });
  }

  render() {
    if (this.state.Component) {
      return <this.state.Component {...this.props.props || {} } />
    } else if (this.state.error) {
      return <div>{ this.state.error }</div>
    } else {
      return this.props.children
    }
  }
}


export default JsPmLoader
