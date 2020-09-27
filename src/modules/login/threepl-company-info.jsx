import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React from 'react';

 export default class ThreePLCompanyInformation  extends React.Component {
    render=() =>(
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>3PL Setup</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item active">3PL Setup</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card card-purple">
                    <div className="card-header">
                        <h3 className="card-title">3PL Setup</h3>
                    </div>
                    <div className="card-body">
                        <p>Please provide the following information to setup  3PL Compnay</p>
                        <Formik
                            initialValues={{ companyName: '', companyDisplayName: '', units: '', address1: '', address2: '', city: '', state: '', country: '', zipcode: '' }}
                            validationSchema={
                                yup.object().shape({
                                    companyName: yup.string().required('Company name is required'),
                                    units: yup.string().required('Units is required'),
                                    address1: yup.string().required('Address1 is required'),
                                    city: yup.string().required('City name is required'),
                                    zipcode: yup.number().required('Zipcode is required'),
                                    state: yup.string().required('State is required'),
                                    country: yup.string().required('Country is required')
                                })
                            }
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >

                            {() => (
                                <Form>
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">Compnay Information</legend>
                                        <div className="row">
                                            <div className="form-group col-lg-2">
                                                <label htmlFor="companyName">Company Name</label>
                                            </div>
                                            <div className="form-group col-lg-4">
                                                <Field type="text" className="form-control" name="companyName" maxLength="100" id="companyName" placeholder="Company Name"></Field>
                                                <ErrorMessage name="companyName" component="span" className="text-danger" />
                                            </div>
                                            <div className="form-group col-lg-2">
                                                <label htmlFor="companyDisplayName">Company Display Name</label>
                                            </div>
                                            <div className="form-group col-lg-4">
                                                <Field type="text" className="form-control" maxLength="100" id="companyDisplayName" name="companyDisplayName"
                                                    placeholder="Company Display Name"></Field>
                                            </div>
                                            <div className="form-group col-lg-2">
                                                <label htmlFor="units">Units</label>
                                            </div>
                                            <div className="form-group col-lg-10">
                                                <Field as="select" className="form-control" name="units" maxLength="100" id="units" >
                                                    <option value="">Select Units</option>
                                                    <option value="1"> Feet-Inches </option>
                                                    <option value="2"> Meter-Centimeter </option>
                                                </Field >
                                                <ErrorMessage name="units" component="span" className="text-danger" />
                                            </div>

                                        </div>
                                        <fieldset >
                                            <legend> Company Address</legend>
                                            <div className="row">
                                                <div className="col-lg-2 form-group">
                                                    <label htmlFor="address1">Address 1</label>
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <Field type="text" id="address1" name="address1" placeholder="Address1" className="form-control" ></Field>
                                                    <ErrorMessage component="span" className="text-danger" name="address1"></ErrorMessage>
                                                </div>
                                                <div className="col-lg-2 form-group"><label htmlFor="address2">Address 2</label></div>
                                                <div className="col-lg-4 form-group">
                                                    <Field type="text" id="address2" name="address2" placeholder="Address2" className="form-control" ></Field>
                                                </div>
                                                <div className="col-lg-2 form-group">
                                                    <label htmlFor="city">City</label>
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <Field type="text" id="city" name="city" placeholder="City" className="form-control" ></Field>
                                                    <ErrorMessage name="city" className="text-danger" component="span"></ErrorMessage>
                                                </div>
                                                <div className="col-lg-2 form-group"><label htmlFor="state">State</label></div>
                                                <div className="col-lg-4 form-group">
                                                    <Field type="text" id="state" name="state" placeholder="State" className="form-control" ></Field>
                                                    <ErrorMessage name="state" className="text-danger" component="span"></ErrorMessage>
                                                </div>
                                                <div className="col-lg-2 form-group">
                                                    <label htmlFor="country">Country</label>
                                                </div>
                                                <div className="col-lg-4 form-group">
                                                    <Field as="select" id="country" name="country" className="form-control" >
                                                        <option value="">--Select Country--</option>
                                                        <option value="1">USA</option>
                                                        <option value="2">Austrailia</option>
                                                        <option value="3">Canada</option>
                                                    </Field>
                                                    <ErrorMessage name="country" className="text-danger" component="span"></ErrorMessage>
                                                </div>
                                                <div className="col-lg-2 form-group"><label htmlFor="zipcode">Zipcode</label></div>
                                                <div className="col-lg-4 form-group">
                                                    <Field type="text" id="zipcode" name="zipcode" placeholder="Zipcode" className="form-control" ></Field>
                                                    <ErrorMessage name="zipcode" className="text-danger" component="div" ></ErrorMessage>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <button className="btn btn-success float-right" type="submit">SAVE</button>
                                    </fieldset>

                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">Warehouse Location Details</legend>
                                    </fieldset>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
        </div>
    )
}

