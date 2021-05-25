import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Actions from '../Actions';
import Heading from '../Heading';
import Icons from '../Icons';

import styles from './styles.module.scss';

interface Props {
    className?: string;
    headingContainerClassName?: string;
    iconsContainerClassName?: string;
    actionsContainerClassName?: string;
    heading?: React.ReactNode;
    icons?: React.ReactNode;
    actions?: React.ReactNode;
    size?: 'extraSmall' | 'small' | 'medium' | 'large';
}

function Header(props: Props) {
    const {
        className,
        headingContainerClassName,
        iconsContainerClassName,
        actionsContainerClassName,
        heading,
        actions,
        icons,
        size,
    } = props;

    return (
        <div className={_cs(className, styles.header)}>
            { icons && (
                <Icons className={_cs(styles.icons, iconsContainerClassName)}>
                    { icons }
                </Icons>
            )}
            <Heading
                size={size}
                className={_cs(styles.heading, headingContainerClassName)}
            >
                { heading }
            </Heading>
            { actions && (
                <Actions className={_cs(styles.actions, actionsContainerClassName)}>
                    { actions }
                </Actions>
            )}
        </div>
    );
}

export default React.memo(Header);
