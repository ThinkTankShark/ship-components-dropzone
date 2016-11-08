import React from 'react';
import classNames from 'classnames';
import accepts from 'attr-accept';
import css from '../stylesheets/dropcontainer.css';
import UploadButton from './UploadButton';
import ImagePreview from './ImagePreview';

export default class DropContainer extends React.Component {
   /**
      * Base Container
      * @param  {Object} props
   */
   constructor (props) {
      super(props);

      this.state = {
         fileSrc: '',
         dropzoneStyle: '',
         isDragActive: false,
         visibility: 'show'
      };
      this.onDragOver = this.onDragOver.bind(this);
      this.onDrop = this.onDrop.bind(this);
      this.onDragLeave = this.onDragLeave.bind(this);
      this.onDragEnter = this.onDragEnter.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleInputButtonClick = this.handleInputButtonClick.bind(this);
   }

   componentDidMount () {
      this.enterCounter = 0;
   }

   /**
      * Handle the drag enter event
      * @param  {Event]} event
   */
   onDragEnter (event) {
      event.preventDefault();

      // Count the dropzone and any children that are entered.
      ++this.enterCounter;

      // This is tricky. During the drag even the dataTransfer.
      // files is null But Chrome implements some drag store,
      // which is accesible via dataTransfer.items
      const dataTransferItems = this.extractData(event);

      // Now we need to convert the DataTransferList to Array
      const fileFormat = this.fileFormatFinder(this.props.accept);

      // Check to make sure file is valid based on
      // user's file format input
      const isFileValid = this.validateFileFormat(
         Array.prototype.slice.call(dataTransferItems),
         fileFormat
      );

      this.setState({
         isDragActive: isFileValid,
         dropzoneStyle: 'dragBorder',
         visibility: 'hide'
      });

      // DropContainer turns green if valid format
      // Otherwise turns red for warning
      if (isFileValid) {
         this.correctFormatBorderStyle()
      } else {
         this.incorrectFormatBorderStyle();
      }
   }

   /**
      * Handle the drag over event
      * @param  {Event]} event
   */
   onDragOver (event) {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.dropEffect = 'copy';
      return false;
   }

   /**
      * Handle the drag leave event
   */
   onDragLeave (event) {
      event.preventDefault();

      // Only deactivate once the dropzone and all children was left.
      if (--this.enterCounter > 0) {
         return;
      }

      this.setState({
         isDragActive: false,
         isDragReject: false,
         dropzoneStyle: '',
         visibility: 'show'
      });
  }

   /**
      * Handle the drop event
      * @param  {Event]} event
   */
   onDrop (event) {
      event.preventDefault();
      this.setState({
         isDragActive: false,
         dropzoneStyle: '',
         visibility: 'show'
      });

      // Call handleChange function
      this.handleChange.call(this, event);
   }

   /**
      * Handle Input Button Click
      * @param  {Event]} event
   */
   handleInputButtonClick (event) {
      this.handleChange(event);
   }

   /**
      * Handle the file state
      * If file is valid => create a URL obj
      * And modify the state value so the
      * parent (UploadContainer) can access it
      * @param  {Event]} event
   */
   handleChange (event) {
      let e = event.nativeEvent;
      let dataTransferItems = this.extractData(event);
      let fileFormat = this.fileFormatFinder(this.props.accept);
      let isFileValid = this.validateFileFormat(
         Array.prototype.slice.call(dataTransferItems),
         fileFormat
      );

      // Check to make sure the dropped file
      // is in correct format - e.g image/*
      if(isFileValid){
         let eventFile = e.dataTransfer || event.target;

         if(eventFile) {
            this.dragAndDropFileUrlGenerator(eventFile);
         } else {
            this.inputButtonFileUrlGenerator(eventFile);
         }
      }
   }

   dragAndDropFileUrlGenerator (eventFile) {
      let file = eventFile.files[0], uploadFile;

      if(typeof file !== 'undefined') {
         uploadFile = URL.createObjectURL(file);

         this.setState({
            fileSrc: uploadFile
         });

         this.props.onAdd(file);
      }
   }

   inputButtonFileUrlGenerator (eventFile) {
      let uploadFile;

      if(typeof eventFile !== 'undefined') {
         uploadFile = URL.createObjectURL(eventFile);

         this.setState({
            fileSrc: uploadFile
         });

         this.props.onAdd(uploadFile);
      }
   }

   /**
    * Handle file type validation
    * make sure the file is an image
    * @param  {Event]} event
    * @return {object}
    */
   extractData (event) {
      return event.dataTransfer && event.dataTransfer.items ?
               event.dataTransfer.items : [];
   }

   fileFormatFinder (props) {
      const FILE_FORMATS = {
         image: 'image/*',
         text: 'text/*',
         pdf: 'application/pdf',
         zip: 'application/zip',
         video: 'video/*',
         audio: 'audio/*',
         app: 'application/*'
      }
      return FILE_FORMATS[props];
   }

   /**
    * Handle file type validation
    * make sure the file is an image
    * @param  {Event]} event
    * @return {bool}
    */
   validateFileFormat (file, fileFormat) {
      return file.every(f => accepts(f, fileFormat));
   }


   /**
    * Handle border color
    * if file type is correct
    * make border GREEN
    */
   correctFormatBorderStyle () {
      this.setState({
         dropzoneStyle: 'correctFormat'
      });
   }

   /**
    * Handle border color
    * if file type is incorrect
    * make border RED
    */
   incorrectFormatBorderStyle () {
      this.setState({ dropzoneStyle: 'incorrectFormat' });
   }

   render () {
      // define styles
      let { dropzoneStyle, visibility } = this.state;
      let dropContainerStyle = classNames(css.dropzoneContainer, css[dropzoneStyle]);

      return (
         <section
            ref='dropContainer'
            className={dropContainerStyle}
            onDragOver={this.onDragOver}
            onDragLeave={this.onDragLeave}
            onDragStart={this.onDragStart}
            onDragEnter={this.onDragEnter}
            onClick={this.onClick}
            onDrop={this.onDrop}>
            <div className={css[visibility]}>
               <ImagePreview imgSrc={this.state.fileSrc}/>
               <form>
                  <UploadButton
                     ref='inputFile'
                     buttonStyle={this.props.buttonStyle}
                     buttonLabel={this.props.buttonText}
                     onChange={this.handleInputButtonClick}
                  />
               </form>
            </div>
         </section>
      );
   }
}

/**
 * Type Checks
 * @type {Object}
 */
const { string, func, array } = React.PropTypes;

DropContainer.propTypes = {
   accept:            string.isRequired,
   buttonStyle:       string,
   buttonText:        string,
   files:             array,
   onAdd:             func
};
