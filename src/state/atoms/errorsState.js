import { atom } from "recoil";

export const errorsState = atom({
    key: 'errorsState',
    default: {
        emptyFields: 0,
        invalidFields: 0,
    }, // Replace with your default error values
});