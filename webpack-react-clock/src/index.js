'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Clock from './components/clock';
import '../styles/style.scss';

ReactDom.render( <Clock /> , document.getElementById('container'));