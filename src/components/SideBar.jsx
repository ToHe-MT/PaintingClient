import React from 'react'
import InfoList from './InfoList';
import LinkList from './LinkList';

const SideBar = () => {
    return (
        <>
            <div id="sidebar">
                <div>
                    <h1>Painting Database</h1>
                </div>
                <nav>
                    <LinkList/>
                    
                </nav>

            </div>
        </>
    );
}

export default SideBar