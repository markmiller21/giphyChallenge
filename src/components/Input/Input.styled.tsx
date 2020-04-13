import styled from 'styled-components';

export const InputField = styled.input`
    padding: 8px;
    max-width: 450px;
    min-width: 320px;
    border: 0, 0, 2px solid #bdc3c7;
    border-radius: 5px;
    font-size: 24px;

    &:focus {
        outline: 0;
        box-shadow: 0 0 3pt 2pt #3fc1c9;
    }
`;
