import React, { FC, useState, useEffect } from 'react';

interface InputComponentProps {
    className: string;
    columnWidth?: number;
    editMode?: boolean;
    data: string;
}

const InputComponent: FC<InputComponentProps> = ({
    className: className,
    columnWidth,
    editMode = false,
    data,
}) => {
    const [value, setValue] = useState(data);

    useEffect(() => {
        setValue(data);
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <input
            type="text"
            className={className}
            style={{ width: columnWidth }}
            value={value}
            onChange={handleChange}
            disabled={!editMode}
        />
    );
};

export default InputComponent;
