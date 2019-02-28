/** @jsx html */
import { html } from 'snabbdom-jsx';
import Listitem from './listitem';
import Header from './header';
import Addbutton from './addbutton';
import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

let listArray=[{title:"hii"},{title:"bye"}];
 
let text="good things to do";


const patch = snabbdom.init([
    require('snabbdom/modules/class'),          // makes it easy to toggle classes
    require('snabbdom/modules/props'),          // for setting properties on DOM elements
    require('snabbdom/modules/style'),          // handles styling on elements with support for animations
    require('snabbdom/modules/eventlisteners'), // attaches event listeners
  ]);


const view =()=> {
    const listItems = listArray.map((task) =><Listitem task={task}></Listitem> ) 
    
    return <div>
        <div>
            <Header children={[<h1>Good things to do</h1>,
            <Addbutton container={listArray}/>]}/>
         
        </div>
        {listItems}
    </div>;
}

export default view;



