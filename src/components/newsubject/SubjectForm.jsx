import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "antd";
import { TimePicker } from 'antd'
import { required } from '../validations'

import { Input } from 'antd'
import { Form } from "antd";

import "./forms.css"
import moment from "moment"

const format = "HH:mm"

const renderInput = ({
    label,
    input,
    meta: { touched, error},
    ...custom
}) => (
    <div>
        <Input placeholder={label} {...input} {...custom}  className="legend" />
        {touched && error && <span style={{ color: "red" }}>{error}</span>}
    </div>
)

const renderTimeInput = ({ 
    input: {
        onChange,
        value
    },
    meta: {
        touched, error
    }
}) => (
    <div>
        <TimePicker format={format} onChange={onChange} value={!value? null: moment(value) }/>
        {touched && error && <span style={{ color: "red", display: "block" }}>{error}</span>}
    </div>
)



let SubjectForm = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Nome">
          <Field name="name" component={renderInput} type="text" validate={required} />
      </Form.Item>
      <Form.Item label="Início">
        <Field name="starts" component={renderTimeInput} validate={required} />
      </Form.Item>
      <Form.Item label="Término">
        <Field name="ends" component={renderTimeInput} validate={required} />
      </Form.Item>
      <Button type="primary" onClick={handleSubmit}>Salvar</Button>
    </Form>
  );
};

SubjectForm = reduxForm({ form: "subject" })(SubjectForm);

export default SubjectForm;
