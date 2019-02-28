/** @jsx html */
import { html } from 'snabbdom-jsx';

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
    
  }

const view=({children})=>{

    return <div class="header">{children}</div>

}

export default view;
