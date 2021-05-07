import React from 'react';


export interface LinkProps {
    title?: string | null;
    className?: string;
}
function LinkCell(props: LinkProps) {
    const {
        title,
    } = props;

    return (
        <div>
            {title}
        </div>
    );
}
export default LinkCell;
