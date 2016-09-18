/**
 * ES6 Dropzone Upload Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { UploadContainer } from '../src/js';

class UploadButtonExamples extends React.Component {
  render() {
   return (
      <section>
         <h1>Dropzone & Upload Button Examples</h1>
         <section className='example-group'>
            <div className='inner-example-left'>
               <UploadContainer
                  buttonStyle='primary-red'
                  buttonText='Press'
                  // backgroundColor='#d23f31'
               />
            </div>
            <div className='inner-example-right'>
               <UploadContainer
                  buttonStyle='primary-pink'
                  buttonText='Upload'
                  // backgroundColor='#d23f31'
               />
            </div>
         </section>
         <section className='example-group'>
            <div className='inner-example-left'>
               <UploadContainer
                  buttonStyle='primary-purple'
                  buttonText='Press'
                  // backgroundColor='#d23f31'
               />
            </div>
            <div className='inner-example-right'>
               <UploadContainer
                  buttonStyle='primary-indigo'
                  buttonText='Upload'
                  // backgroundColor='#d23f31'
               />
            </div>
         </section>
         <section className='example-group'>
            <div className='inner-example-left'>
               <UploadContainer
                  buttonStyle='primary-blue'
                  buttonText='Press'
                  // backgroundColor='#d23f31'
               />
            </div>
            <div className='inner-example-right'>
               <UploadContainer
                  buttonStyle='primary-cyan'
                  buttonText='Upload'
                  // backgroundColor='#d23f31'
               />
            </div>
         </section>
         <section className='example-group'>
            <div className='inner-example-left'>
               <UploadContainer
                  buttonStyle='primary-teal'
                  buttonText='Press'
                  // backgroundColor='#d23f31'
               />
            </div>
            <div className='inner-example-right'>
               <UploadContainer
                  buttonStyle='primary-green'
                  buttonText='Upload'
                  // backgroundColor='#d23f31'
               />
            </div>
         </section>
         <section className='example-group'>
            <div className='inner-example-left'>
               <UploadContainer
                  buttonStyle='primary-lime'
                  buttonText='Press'
                  // backgroundColor='#d23f31'
               />
            </div>
            <div className='inner-example-right'>
               <UploadContainer
                  buttonStyle='secondary-blue'
                  buttonText='Upload'
                  // backgroundColor='#d23f31'
               />
            </div>
         </section>
         <section className='example-group'>
            <div className='inner-example-left'>
               <UploadContainer
                  buttonStyle='primary-amber'
                  buttonText='Press'
                  // backgroundColor='#d23f31'
               />
            </div>
            <div className='inner-example-right'>
               <UploadContainer
                  buttonStyle='primary-orange'
                  buttonText='Upload'
                  // backgroundColor='#d23f31'
               />
            </div>
         </section>
         <section className='example-group'>
            <div className='inner-example-left'>
               <UploadContainer
                  buttonStyle='primary-deepOrange'
                  buttonText='Press'
                  // backgroundColor='#d23f31'
               />
            </div>
            <div className='inner-example-right'>
               <UploadContainer
                  buttonStyle='primary-brown'
                  buttonText='Upload'
                  // backgroundColor='#d23f31'
               />
            </div>
         </section>
         <section className='example-group'>
            <div className='inner-example-left'>
               <UploadContainer
                  buttonStyle='primary-grey'
                  buttonText='Press'
                  // backgroundColor='#d23f31'
               />
            </div>
            <div className='inner-example-right'>
               <UploadContainer
                  buttonStyle='primary-blueGrey'
                  buttonText='Upload'
                  // backgroundColor='#d23f31'
               />
            </div>
         </section>
         <section className='example-group'>
            <div className='inner-example-left'>
               <UploadContainer
                  buttonStyle='primary-black'
                  buttonText='Press'
                  // backgroundColor='#d23f31'
               />
            </div>
            <div className='inner-example-right'>
               <UploadContainer
                  buttonStyle='primary-white'
                  buttonText='Upload'
                  // backgroundColor='#d23f31'
               />
            </div>
         </section>
      </section>
    )
  }
}

ReactDOM.render(<UploadButtonExamples />, document.getElementById('examples'));
