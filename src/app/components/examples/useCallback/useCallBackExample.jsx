import React, { useRef, useState, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const WORef = useRef(0);
    const WRef = useRef(0);
    const handleChange = ({ target }) => {
        console.log(target);
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
        console.log(data);
    };
    const validateWithOutCallback = (data) => {
        console.log("DATA =", data);
    };

    const validateWithCallback = useCallback((data) => {
        console.log("DATA =", data);
    }, []);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    useEffect(() => {
        WORef.current++;
    }, [validateWithOutCallback]);
    useEffect(() => {
        WRef.current++;
    }, [validateWithCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOut Callback {WORef.current}</p>
            <p>Render with Callback {WRef.current}</p>
            <label htmlFor="email" className="form-label">
                Email :
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChange}
                name="email"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
