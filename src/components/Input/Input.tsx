import React from 'react';

import { InputField, Label } from './Input.styled';

interface InputI {
    name: string;
    placeholder: string;
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, name, onChange, placeholder }: InputI) => {
    return (
        <>
            {label && <Label htmlFor={name}>{label}</Label>}

            <InputField
                id={name}
                name={name}
                placeholder={placeholder}
                type="text"
                onChange={onChange}
            />
        </>
    );
};
