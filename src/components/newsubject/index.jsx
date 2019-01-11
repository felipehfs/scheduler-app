import React from 'react'
import SubjectForm from './SubjectForm'

import { reset} from 'redux-form'
import uuidv4 from 'uuid/v4'
import SubjectList from './SubjectList';
import { newSubject } from '../../redux/actions/subject'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { SubmissionError } from 'redux-form'
import { dropSubject } from '../../redux/actions/subject'


class SubjectPage extends React.Component {
    
    state = {
        modalVisible: false,
    }

    submit = (values, dispatch) => {  
        const fields = ['name', 'starts', 'ends']

        const isOk = fields.reduce((acum, field) => Object.keys(values).includes(field) && acum, true)
        values.key = uuidv4();
        
        if (isOk) {
            dispatch(newSubject(values))
        }

        dispatch(reset('subject'))
    };


    render() {
        return (
            <div style={{ width: "40%" }}>
                <SubjectForm onSubmit={this.submit} />
                <SubjectList items={this.props.subjects} onRemove={this.props.dropSubject} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    subjects: state.subjects
})

const mapDispatchToProps = dispatch => bindActionCreators({ dropSubject }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SubjectPage)