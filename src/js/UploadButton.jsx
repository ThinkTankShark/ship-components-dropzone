import React from 'react';
import classNames from 'classnames';
import css from '../stylesheets/uploadbutton.css';

export default class UploadButton extends React.Component {
   /**
      * Base Button
      * @param  {Object} props
   */
   constructor (props) {
      super(props);
      this.state = { checkBoxState: false };

      // bind events scope to UploadButton Component
      this.handleChange = this.handleChange.bind(this);
      this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
   }

   /**
      * Handle the button text label after component rendered
   */
   componentDidMount () {

   }

   /**
      * Handle the button state
      * @param  {Event]} event
   */
   handleChange (e) {

      this.setState({
         buttonLabel: e.target.value.split(/(\\|\/)/g).pop()
      });
      if (this.props.onChange) {
         this.props.onChange(e);
      }
   }

   onButtonClickHandler () {
      this.setState({
         checkBoxState: true
      });

      // Trigger file input click event
      this.triggerInputButotn();

      // Trigger checkbox back to be unchecked
      let that = this;
      setTimeout(function() {
         that.setState({
            checkBoxState: false
         });
      }, 2000)
   }

   triggerInputButotn () {
      this.refs.inputFileButton.click();
   }

   render () {
      // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
      let { buttonStyle } = this.props;

      let uploadButtonContainer = classNames(
            css.animationButton,
            css.raised,
            css.hoverable,
            css[buttonStyle]
         )

      return (
         <div
            className={uploadButtonContainer}
            onClick={this.onButtonClickHandler}>
            <input
               type='file'
               ref='inputFileButton'
               className={css.inputHidden}
               onChange={this.props.onChange}
            />
            <input
               type='checkbox'
               checked={this.state.checkBoxState}
               className={css.toggle}
               ref='inputCheckbox'
            />
            <div
               className={css.anim}>
            </div>
            <span className={css.buttonTextSpan}>{this.props.buttonLabel || 'Upload'}</span>
         </div>
      );
   }
}

/**
 * Type Checks
 * @type {Object}
 */
const { string, func } = React.PropTypes;

UploadButton.propTypes = {
   buttonLabel:   string,
   buttonStyle:   string,
   onChange:      func
};
