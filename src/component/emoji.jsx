import React from 'react';

const Emoji = (props) => {
    const style = 'emoji ' + props.size;
    return (
        <div className="text-center">
            <span
                className={style}
                role="img"
                aria-label={props.label ? props.label : ''}
                aria-hidden={props.label ? 'false' : 'true'}
            >
                {props.icon}
            </span>
            <span> {props.text}</span>
        </div>
    );
};
export default Emoji;
