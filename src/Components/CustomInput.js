import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";




export default function CustomInput(props) {
    return (
        <FormControl  className={"formControlClasses"}>
            {props.labelText !== undefined ? (
                <InputLabel
                >
                    {props.labelText}
                </InputLabel>
            ) : null}
            <Input
                value={props.value}
                onChange={props.handleChange}
            />
        </FormControl>
    );
}

CustomInput.propTypes = {
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    inputRootCustomClasses: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool
};
