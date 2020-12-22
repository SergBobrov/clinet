import React, {useEffect} from 'react'
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import {Delete} from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import axios from 'axios';

const initialValues = {
    email: 'sergeibobrov92@gmail.com',
    description: [
        {
            title: 'test test',
            price: '1111',
        },
    ],
};

export const InvoiceForm = () => {

    const sendDataToServer = (invoiceData) => {
        try {
            axios.post('/api/invoice', invoiceData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((data) => {
                    console.log(data);
                }
            )
        } catch (error) {
            alert(error.message)
        }


    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, {resetForm}) => {
                    await sendDataToServer(JSON.stringify(values))
                    resetForm({})
                }}
            >
                {({values}) => (
                    <Form>
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            style={{marginBottom: "10px"}}
                        />
                        <FieldArray name="description">
                            {({remove, push}) => (
                                <div>
                                    {values.description.length > 0 &&
                                    values.description.map((item, index) => (
                                        <div className="row" key={index}>
                                            <Paper style={{padding: "15px", margin: "10px"}}>
                                                <div className="col">
                                                    <Field
                                                        name={`description.${index}.title`}
                                                        placeholder="Job title"
                                                        type="text"
                                                        style={{margin: "5px 0"}}
                                                    />
                                                    <ErrorMessage
                                                        name={`description.${index}.title`}
                                                        component="div"
                                                        className="field-error"
                                                    />
                                                </div>
                                                <div className="row" key={index}>
                                                    <div className="col">
                                                        <Field
                                                            name={`description.${index}.price`}
                                                            placeholder="Price"
                                                            type="text"
                                                            style={{margin: "5px 0"}}
                                                        />
                                                        <ErrorMessage
                                                            name={`description.${index}.price`}
                                                            component="div"
                                                            className="field-error"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <Button onClick={() => remove(index)}
                                                            type="button"
                                                            size="small">
                                                        <Delete/>
                                                    </Button>
                                                </div>
                                            </Paper>


                                        </div>
                                    ))}
                                    <Button onClick={() => push({title: '', price: ''})}
                                            style={{margin: "10px 0"}}
                                            color="primary"
                                            variant="contained"
                                            size="small"
                                            type="button">
                                        Add description
                                    </Button>
                                </div>
                            )}
                        </FieldArray>
                        <Button color="primary"
                                variant="contained"
                                type="submit"
                                size="small"
                                style={{marginBottom: "5px"}}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
