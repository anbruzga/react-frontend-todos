import {retrieveTodoApi} from "./api/TodoApiService";
import {useAuth} from "./security/AuthContext";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";

export default function TodoComponent () {
    // let todo = null

    // const authContext = useAuth()
    // const username = authContext.username

    const {id} = useParams()

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState("")


    useEffect(
        () => retrieveTodos(), [id]
    )

    function retrieveTodos() {
        retrieveTodoApi(id)
            .then(response => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            })
            .catch(error => console.log(error))
    }

    function onSubmit(values) {
        //logic here
    }

    function validate(values) {
        let errors = {}

        if (values.description.length < 5) {
            errors.description ='Enter at least 5 characters'
        }

        if (values.targetDate==null) {
            errors.targetDate ='Enter a target date'
        }

        return errors
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={ {description, targetDate} }
                        enableReinitialize={true} onSubmit={onSubmit}
                        validate={validate} validateOnChange={false} validateOnBlur={false}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />

                                <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />

                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}