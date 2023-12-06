import React, { useState } from "react";
export const MasterInput = (props) => {
    if (props.type === "checkbox") {
        const {
            label,
            errorMessage,
            onChange,
            id,
            type,
            options,
            checkbox,
            defaultValue,
            wishlist,
            ...inputProps
        } = props;
        
        return (
            <div className="checkboxform">
                <h2>{label}</h2>
                <div className="grid-checkbox">
                    {checkbox.map((ele) => (
                        <div key={ele.No} className="checkbox">
                            <input
                                defaultChecked={wishlist.includes(ele._id)}
                                {...inputProps}
                                type={type}
                                onChange={onChange}
                                id={ele.id}
                                name={inputProps.name}
                                value={ele._id}
                            />
                            <label htmlFor={ele.No}>
                                {ele.No}
                                {ele.title}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else if (props.type === "select") {
        const {
            label,
            errorMessage,
            onChange,
            id,
            type,
            options,
            defaultValue,
            ...inputProps
        } = props;

        return (
            <div className="grid-select-radio">
                <label>{label}</label>
                <select
                    {...inputProps}
                    type={type}
                    onChange={onChange}
                    id={id}
                >
                    {options.map((ele, idx) => (
                        <option value={ele._id || ele.value} key={idx}>
                            {ele.paper ?
                                ele.paper.isFullCotton ?
                                    `${ele.tools} on 100% cotton, ${ele.paper.gsm} gsm ${ele.paper.type} paper`
                                    :
                                    `${ele.tools} on ${ele.paper.gsm} gsm ${ele.paper.type} paper`
                                    :
                                    ' '
                            }
                            {ele.label}{ele.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    } else {
        const [focused, setFocused] = useState(false);
        const {
            label,
            errorMessage,
            onChange,
            id,
            type,
            defaultValue,
            ...inputProps
        } = props;

        const handleFocus = () => {
            setFocused(true);
        };

        return (
            <div className={`formInput ${focused ? "focused" : ""}`}>
                <>
                    <label>{label}</label>
                    <input
                        {...inputProps}
                        type={type}
                        onChange={onChange}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                    />
                    <span>{errorMessage}</span>
                </>
            </div>
        );
    }
}
export const TextFormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {
        label,
        errorMessage,
        onChange,
        id,
        type,
        defaultValue,
        ...inputProps
    } = props;

    const handleFocus = () => {
        setFocused(true);
    };

    return (
        <div className={`formInput ${focused ? "focused" : ""}`}>
            <>
                <label>{label}</label>
                <input
                    {...inputProps}
                    type={type}
                    onChange={onChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />
                <span>{errorMessage}</span>
            </>
        </div>
    );
};
export const SelectRadioFormInput = (props) => {
    const {
        label,
        errorMessage,
        onChange,
        id,
        type,
        options,
        defaultValue,
        ...inputProps
    } = props;

    return (
        <div className="grid-select-radio">
            <label>{label}</label>
            <select
                {...inputProps}
                type={type}
                onChange={onChange}
                id={id}
            >
                {options.map((ele) => (
                    <option value={ele.value} key={ele.id}>
                        {ele.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
export const CheckboxFormInput = (props) => {
    const {
        label,
        errorMessage,
        onChange,
        id,
        type,
        options,
        checkbox,
        defaultValue,
        ...inputProps
    } = props;

    return (
        <div className="checkboxform">
            <h2>{label}</h2>
            <div className="grid-checkbox">
                {checkbox.map((ele) => (
                    <div key={ele.No} className="checkbox">
                        <input
                            {...inputProps}
                            type={type}
                            onChange={onChange}
                            id={ele.id}
                            name={inputProps.name}
                            value={ele._id}
                        />
                        <label htmlFor={ele.No}>
                            {ele.No}
                            {ele.title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};