import validator from "validator";

const required = (value) => {
    if (!value.toString().trim().length) {
        return 'Trường này không được bỏ trống!';
    }
};

const email = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} không hợp lệ.`
    }
};

export const validate = {
    required,
    email
}