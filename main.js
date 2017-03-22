import React from 'react';
import ReactDOM from 'react-dom';
//import * as Scroll from 'react-scroll';
import TextPaneScroll from './node_modules/cfer-toolkit/src/assets/toolkit/scripts/components/react/scroller/TextPaneScroll.jsx';
//import Sample from './node_modules/cfer-toolkit/src/assets/toolkit/scripts/components/react/sample/ReactSample.jsx';
import sample from 'cfer-toolkit';

ReactDOM.render(
  <TextPaneScroll />,
  document.querySelector('.scrollbar')
);

ReactDOM.render(
  <Sample />,
    document.querySelector('.sample')
);
