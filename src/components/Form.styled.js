import styled from "styled-components/";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
display: flex;
gap: 10px;
`;

export const StyledField = styled(Field)`
:focus: yellow;
border-radius: 10%;
`;

export const SubmitButton = styled.button`
background-color: white;
border: 1px solid black;
border-radius: 10%;
margin-left: 10px;
`;

export const DeleteButton = styled.button`
background-color: white;
border: 1px solid black;
border-radius: 10%;
margin-left: 10px;
`;

export const SearchInput = styled.input`
border-radius: 10%;
:focus: yellow;
`;