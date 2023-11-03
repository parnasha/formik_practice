"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
    name: Yup.string().min(2).required("name is required"),
    email: Yup.string().email().required("email is required"),
    password: Yup.string().min(7).required("password is required"),
});

const initialValues = {
    name: "",
    email: "",
    password: "",
};

const Form = () => {
    const { values, touched, errors, handleBlur, handleSubmit, handleChange } =
        useFormik({
            initialValues: initialValues,
            validationSchema: schema,
            onSubmit: (values) => {
                console.log("helllo", values);
            },
        });
    console.log(errors);

    return (
        <>
            Form
            <form onSubmit={handleSubmit}>
                <div className="container bg-slate-400 text-lg border-4 border-slate-500">
                    <div className="text-blue-400 font-bold">Name</div>
                    <input
                        type="name"
                        name="name"
                        placeholder="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 required"
                    />
                    {errors.name && touched.name ? <p>{errors.name}</p> : null}
                    <div className="text-blue-400 font-bold">Email</div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                        <p>{errors.email}</p>
                    ) : null}
                    <div className="text-blue-400 font-bold">Password</div>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                        <p>{errors.password}</p>
                    ) : null}
                    <button className="bg-blue-400 py-2 px-3" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
