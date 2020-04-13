import React from 'react';

import { InputField, Label } from './Input.styled';

interface InputI {
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ name, onChange, placeholder }: InputI) => (
    <InputField
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
    />
);
