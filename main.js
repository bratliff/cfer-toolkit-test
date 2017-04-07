import React from 'react';
import ReactDOM from 'react-dom';
import {TextPaneScroll, Sample} from 'cfer-toolkit';

ReactDOM.render(
  <TextPaneScroll />,
  document.querySelector('.scrollbar')
);

ReactDOM.render(
  <Sample />,
    document.querySelector('.sample')
);
