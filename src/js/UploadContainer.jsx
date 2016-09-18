import React from 'react';
import DropContainer from './DropContainer';

import css from '../stylesheets/uploadcontainer.css';

export default class UploadContainer extends React.Component {
  render () {
    return (
      <section className={css.uploadContainerWrapper} >
        <DropContainer
          accept='image'
          buttonStyle={this.props.buttonStyle || 'default'}
          buttonText={this.props.buttonText}
          backgroundColor={this.props.backgroundColor}
        />
      </section>
    );
  }
}

/**
 * Type Checks
 * @type {Object}
 */
const { string } = React.PropTypes;

UploadContainer.propTypes = {
  buttonStyle:       string,
  buttonText:        string
};
