import * as React from "react";

export const IconDelete = ((props) => {
    return (
        <div className="button-content">
            <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="25px"
                width="25px"
                {...props}
            >
                <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
            </svg>
        </div>
    );
})
export const IconView = ((props) => {
    return (
        <div className="button-content">
            <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="25px"
                width="24px"
                {...props}
            >
                <path d="M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </div>
    );
})
export const IconEdit = ((props) => {
    return (
        <div className="button-content">
            <svg
                viewBox="0 0 21 21"
                fill="currentColor"
                height="25px"
                width="24px"
                {...props}
            >
                <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M17 4a2.121 2.121 0 010 3l-9.5 9.5-4 1 1-3.944 9.504-9.552a2.116 2.116 0 012.864-.125zM9.5 17.5h8M15.5 6.5l1 1" />
                </g>
            </svg>
        </div>
    );
})

