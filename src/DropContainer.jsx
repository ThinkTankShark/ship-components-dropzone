import React from 'react';
import classNames from 'classnames';
import accepts from 'attr-accept';

import css from './button.css';
import UploadButton from './UploadButton';
import ImagePreview from './ImagePreview';

export default class DropContainer extends React.Component {
   /**
      * Base Container
      * @param  {Object} props
   */
   constructor(props) {
      super(props);
      this.state = {
         imageFile: '',
         isDragActive: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.onDragOver = this.onDragOver.bind(this);
      this.onDrop = this.onDrop.bind(this);
      this.onDragLeave = this.onDragLeave.bind(this);
      this.onDragEnter = this.onDragEnter.bind(this);
      // this.onDragStart = this.onDragStart.bind(this);
      // this.onClick = this.onClick.bind(this);
   }

   componentDidMount() {
      this.enterCounter = 0;
   }

  onDragEnter(e) {
    e.preventDefault();

    // Count the dropzone and any children that are entered.
    ++this.enterCounter;

    // This is tricky. During the drag even the dataTransfer.files is null
    // But Chrome implements some drag store, which is accesible via dataTransfer.items
    const dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

    // Now we need to convert the DataTransferList to Array
    const allFilesAccepted = this.fileAccepted(Array.prototype.slice.call(dataTransferItems));

    this.setState({
      isDragActive: allFilesAccepted,
      isDragReject: !allFilesAccepted
    });

    if (this.props.onDragEnter) {
      this.props.onDragEnter.call(this, e);
    }
  }

   /**
      * Handle the drag over event
      * @param  {Event]} event
   */
   onDragOver (e) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = 'copy';

      // this.setState({
      //    isDragActive: true
      // });

      return false;
      // let $this = $(this.myTextInput),
      //    label = 'please drag ';
      // console.log($this);
      // $this.attr('data-content', label);
   }

   /**
      * Handle the drag leave event
   */
   onDragLeave (e) {
      e.preventDefault();

      // Only deactivate once the dropzone and all children was left.
      if (--this.enterCounter > 0) {
         return;
      }

      this.setState({
         isDragActive: false,
         isDragReject: false
      });

      if (this.props.onDragLeave) {
         this.props.onDragLeave.call(this, e);
      }
  }

   /**
      * Handle the drop event
      * @param  {Event]} event
   */
   onDrop (e) {
      e.preventDefault();
      this.setState({
         isDragActive: false
      });

      this.handleChange.call(this, e);
   }

   /**
      * Handle the click event on drop container
   */
   // onClick () {
   //  this.refs.fileInput.myTextInput.click()
   // }

   /**
      * Handle the image state
      * If image is available, will create a URL obj
      * And modify the state value
      * @param  {Event]} event
   */
   handleChange (event) {
      let e = event.nativeEvent, imageFile;

      // Setting the state image source
      // With drag & drop event
      if(e.dataTransfer) {
         let evt = e.dataTransfer.files[0];

         if(evt !== undefined) {
            imageFile = URL.createObjectURL(evt);
            console.log('**DRAGGED** SELECTED FILE', evt);
            this.setState({
               imageFile: imageFile
            });
         } else {
            console.warn('Warning: no image selected');
         }

      // Setting the state image source
      // With click button event
      } else {
         let evt = event.target.files[0];

         // Image src to pass it to ImagePreview Component
         if(evt !== undefined) {
            imageFile = URL.createObjectURL(event.target.files[0]);
            console.log('SELECTED FILE', event.target.files[0]);

            this.setState({
               imageFile: imageFile
            });
         } else {
            console.warn('Warning: no image selected');
         }
      }
   }

   fileAccepted(file) {
      console.log(file);
      return file.every(f => accepts(f, this.props.accept));
   }

   /**
      * Handle the button footer color
      * @param  {string} color
      * @return {string}
   */
   setColor (val = 'blue') {
      let color = val.toLowerCase();

      if(val === 'green') {
         color = 'green';
      }else if (val === 'gray') {
         color = 'gray';
      } else if ( val === 'white') {
         color = 'white';
      }
      return color;
   }

   /**
      * Handle the button label text
      * @param  {string} label
      * @return {string}
   */
   setText (label = 'Upload') {
      return label;
   }

   render () {
      // define styles
      let color = this.props.buttonColor,
         text = this.props.buttonText,
         borderStyle = this.state.isDragActive ? 'dragBorder' : '',
         visibility = this.state.isDragActive ? 'hide' : 'show',
         outerClasses = classNames(css.groupWrapper, css[borderStyle]),
         innerClasses = classNames(css[visibility]);

      return (
         <section
            ref={(ref) => this.myTextInput = ref}
            className={outerClasses}
            onDragOver={this.onDragOver}
            onDragLeave={this.onDragLeave}
            onDragStart={this.onDragStart}
            onDragEnter={this.onDragEnter}
            onDrop={this.onDrop}>
            <section className={classNames(innerClasses, css.groupWrapper)}>
               <ImagePreview imgSrc={this.state.imageFile} />
               <form className={classNames(css.flexContainer)}>
                  <UploadButton
                     ref='fileInput'
                     accept='.png, .gif, .jpg, .jpeg'
                     onChange={this.handleChange.bind(this)}
                     color={this.setColor(color)}
                     label={this.setText(text)}
                  />
               </form>
            </section>
         </section>
      );
   }
}

/**
 * Type Checks
 * @type {Object}
 */
const { string } = React.PropTypes;

DropContainer.propTypes = {
  buttonColor: string,
  buttonText: string
};
