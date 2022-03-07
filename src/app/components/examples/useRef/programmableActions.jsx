import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = (params) => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleWidth = (params) => {
        inputRef.current.style.width = "200px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email :
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary m-2" onClick={handleClick}>
                Button
            </button>
            <button className="btn btn-primary m-2" onClick={handleWidth}>
                Width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
