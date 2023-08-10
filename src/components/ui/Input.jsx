import React from 'react'

export const Input = ({ type, placeholder }) => {
    return (
        <input
            type={type}
            className="border bg-slate-200 border-gray-300 rounded-md  py-2 px-4"
            placeholder={placeholder}
        />
    );
};


