import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal } from "antd";
import { TimePicker } from 'antd'
import { required } from '../validations'
import { connect } from 'react-redux'
import { Input } from 'antd'
import { submit } from 'redux-form'
import { Form } from "antd";
import { bindActionCreators } from 'redux'
import "./forms.css"
import moment from "moment"

const format = "HH:mm"

const renderInput = ({
    label,
    input,
    meta: { touched, error },
    ...custom
}) => (
        <div>
            <Input placeholder={label} {...input} {...custom} className="legend" />
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
            <TimePicker format={format} onChange={onChange} value={!value ? null : moment(value)} />
            {touched && error && <span style={{ color: "red", display: "block" }}>{error}</span>}
        </div>
    )

let SubjectUpdateForm = props => {
    const { handleSubmit } = props;

    return (
        <Modal title="Basic Modal" visible={props.modalVisible} onCancel={props.handleCancel} onOk={e => props.submit("updatesubject")}>
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
            </Form>
        </Modal>
    );
};

SubjectUpdateForm = reduxForm({ form: "updatesubject" })(SubjectUpdateForm);
const mapDispatchToProps = dispatch => bindActionCreators({ submit }, dispatch)
export default connect(state => ({ initialValues: state.subjects.willUpdated }), mapDispatchToProps)(SubjectUpdateForm);
