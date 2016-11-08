import React from 'react';
import DropContainer from './DropContainer';
import FileStore from './FileStore';

import css from '../stylesheets/uploadcontainer.css';

export default class UploadContainer extends React.Component {
  /**
      * Base Container
      * @param  {Object} props
   */
  constructor (props) {
    super(props);

    this.state = {
       fileObj: ''
    };
    this.onAddHandler = this.onAddHandler.bind(this);
  }

  onAddHandler (file) {
    if(file){
      FileStore.addFile(file);

      this.setState({
        fileObj: FileStore.getFile()
      });
    }
  }

  render () {
    return (
      <section className={css.uploadContainerWrapper} >
        <DropContainer
          accept='image'
          buttonStyle={this.props.buttonStyle}
          buttonText={this.props.buttonText}
          backgroundColor={this.props.backgroundColor}
          files={this.state.fileObj}
          onAdd={this.onAddHandler}
        />
      </section>
    )
  }
}

/**
 * Defaults
 * @type {Object}
 */
UploadContainer.defaultProps = {
   buttonStyle:       'default'
};

/**
 * Type Checks
 * @type {Object}
 */
const { string } = React.PropTypes;

UploadContainer.propTypes = {
  buttonStyle:       string,
  buttonText:        string
};
