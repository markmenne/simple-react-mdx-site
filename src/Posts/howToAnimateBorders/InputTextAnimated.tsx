import { FunctionComponent, InputHTMLAttributes, memo, useState } from "react";
import uniqueid from "lodash.uniqueid";
import './InputAnimated.css';

export interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
    label: string,
}

const InputTextAnimated: FunctionComponent<InputTextProps> = ({
    ...props
}) => {

    const [newId] = useState(uniqueid('gen-'));
    const id = props.id ?? newId;

    const className = `animated-input-container${props.value == null || props.value === '' ? '' : ' has-value'}`

    return (
        <span className={className}>
            <input id={id} {...props} />
            <label htmlFor={id}>{props.label}</label>
            <span />
        </span>
    );
}

export default memo(InputTextAnimated);
