/** @jsx html */

import { html } from 'snabbdom-jsx';

const view=({task})=>
{
    return <div><li >{task.title}</li></div>;
}


export default view;






