import React from 'react';
import ReactDOM from 'react-dom';
import Toolkit from 'cfer-toolkit';

var TextPaneScroll = Toolkit.TextPaneScroll;
var Sample = Toolkit.Sample;

ReactDOM.render(
  <TextPaneScroll />,
  document.querySelector('.scrollbar')
);

ReactDOM.render(
  <Sample />,
    document.querySelector('.sample')
);
