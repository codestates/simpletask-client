import React from 'react';

const TextEntry = ({texts}) =>{

    return(
        <div className="contents">
            <div className="title">{texts.title}</div>
            <div className="text">{texts.text}</div>
            <div className="date">{texts.createdAt}</div>
       </div>
    )
}
   
   

export default TextEntry;
