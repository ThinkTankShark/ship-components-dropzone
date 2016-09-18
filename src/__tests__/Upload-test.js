jest.dontMock('../UploadContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

let UploadContainer = require('../js/UploadContainer').default;
const noOp = function() {};
UploadContainer.prototype.componentDidUpdate = noOp;

// const shipBtnClass = 'ship-components-btn';

describe('<UploadContainer />', function(){
   it('should support button and a tagNames', function() {
      let className = 'testClass';
      ['section'].forEach(function(tagName){
         let reactTree = TestUtils.renderIntoDocument(
            <UploadContainer
               className={className}
               tag={tagName}
               onClick={noOp} />
         );

         let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);
         expect(ReactDOM.findDOMNode(el).childNodes[0].tagName.toLowerCase()).toEqual(tagName.toLowerCase());
      });
   });
});
