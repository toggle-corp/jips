import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.scss';

//import SmartLink from '#components/SmartLink';
//import { RouteData, Attrs } from '#hooks/useRouteMatching';

export interface LinkProps {
    title?: string | null;
    className?: string;
    //route: RouteData;
    //attrs?: Attrs;
}
function LinkCell(props: LinkProps) {
    const {
        title,
        //route,
        //attrs,
        //className,
    } = props;

    return (
        //<SmartLink
        //    className={_cs(styles.link, className)}
        //    route={route}
        //    attrs={attrs}
        //>
        //    {title}
        //</SmartLink>
        <div>
            {title}
        </div>
    );
}
export default LinkCell;
