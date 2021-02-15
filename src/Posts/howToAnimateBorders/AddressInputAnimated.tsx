import React, { FunctionComponent, memo, useState, ChangeEvent } from "react";
import InputTextAnimated from "./InputTextAnimated";

const AddressInputAnimated: FunctionComponent = () => {

    const [value, setValue] = useState<string | undefined>(undefined);

    const processChange = (value: string | undefined) => {
        setValue(value);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value !== ''? event.target.value: undefined;
        processChange(value);
    }

    return (
        <div style={{ padding: '16px', backgroundColor: '#ddd', display: 'inline-flex', }}>
            <InputTextAnimated
                type="text"
                name="address-line-1"
                label="Address Line 1"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default memo(AddressInputAnimated);
