/** @jsx html */
"use strict";

import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import {html} from 'snabbdom-jsx';
import list from './list';


const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);

const main=(oldVnode, view)=> {
  const newVnode = view();
  patch(oldVnode, newVnode);
}



main(
  document.getElementById('root'), 
  list
);
