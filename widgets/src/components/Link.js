
import React from 'react';
const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metaKey || EventTarget.ctrlKey) {
            return;
        }

        event.preventDefault(); //<< prevent default of full page reload
        window.history.pushState({}, '', href);  // << Change url

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;
