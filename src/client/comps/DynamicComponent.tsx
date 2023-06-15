import React, { FC, Suspense, lazy, ReactElement } from 'react';

interface InputProps {
    data: {
        id: number;
        label: string;
        component: string | ReactElement;
        className: string;
        columnWidth?: number;
        editMode?: boolean;
        data: any;
    }
}

const DynamicComponent: FC<InputProps> = (props: InputProps) => {
    const { label, component, data,className, columnWidth, editMode } = props.data;

    let ComponentToRender;

    if (typeof component === 'string') {
        ComponentToRender = lazy(() => import(`./${component}`));
    } else {
        ComponentToRender = () => component;  // If it's a JSX element, just render it as is
    }

    return (
        <div className={`block`} style={{ width: columnWidth }}>
            <label
                htmlFor={label.toLowerCase()}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <Suspense fallback={<div>Loading...</div>}>
                    <ComponentToRender className={className} columnWidth={columnWidth} editMode={editMode} data={data} />
                </Suspense>
            </div>
        </div>
    );
};

export default DynamicComponent;