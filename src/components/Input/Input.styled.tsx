import styled from 'styled-components';

export const Label = styled.label`
    margin-bottom: 8px;
    display: block;
    color: white;
`;

export const InputField = styled.input`
    padding: 8px;
    max-width: 450px;
    min-width: 320px;
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid #bdc3c7;
    border-left: 0;
    font-size: 24px;
    transition: border-bottom-color 0.15s ease-in;

    &:focus {
        outline: 0;
        border-bottom-color: #3fc1c9;
    }
`;
