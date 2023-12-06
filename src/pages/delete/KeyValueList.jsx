import React from 'react';

function KeyValueList({ data }) {
    const keyValueElements = [];

    const renderKeyValuePairs = (obj, parentKey = '') => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                const fullKey = parentKey ? `${parentKey}.${key}` : key;

                if (typeof value === 'object' && value !== null) {
                    renderKeyValuePairs(value, fullKey);
                } else {
                    keyValueElements.push(
                        <div key={fullKey}>
                            <strong>{fullKey}:</strong> {value}
                        </div>
                    );
                }
            }
        }
    };

    renderKeyValuePairs(data);

    return (
        <div>
            <h2>Key-Value Pairs</h2>
            {keyValueElements}
        </div>
    );
}

export default KeyValueList;
