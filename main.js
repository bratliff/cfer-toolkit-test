import React from 'react';
import ReactDOM from 'react-dom';
import {TextPaneScroll} from 'cfer-toolkit';
import {AssessmentButton} from 'cfer-toolkit';

ReactDOM.render(
  <TextPaneScroll />,
  document.querySelector('.scrollbar')
);
ReactDOM.render(
  <AssessmentButton />,
  document.querySelector('.assessment-button')
);
