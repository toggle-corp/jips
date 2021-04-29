import React from 'react';
import './styles.css';
import image from './jips.png';

interface JipsNavBarProps {
    title: string,
    subTitle: string,
}

export default function JipsNavBar(props: JipsNavBarProps) {
    const { title, subTitle } = props;
    return (
        <nav>
            <div className="container">
                <div className="d-flex-row">
                    <img src={image} className="logo" alt="JIPS Logo" />
                    <div className="right">
                        <div className="title-wrapper">
                            <div className="title">
                                {title}
                            </div>
                            <div className="sub-title">
                                {subTitle}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}