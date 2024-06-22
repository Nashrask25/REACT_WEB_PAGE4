import { useState } from 'react';
import './progress_bar.css';
import { propTypes } from 'react-bootstrap/esm/Image'; 
function Progress_bar(props){
    return(
        <div class="progress__wrapper">
            <div class="progress--block">
                <div class="progress--bar" style={{width:props.progress+'%'}}></div>
            </div>
            <span>{props.progress}% completed</span>
        </div>
    )
}
export default Progress_bar;