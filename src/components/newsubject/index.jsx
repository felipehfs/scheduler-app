import React from 'react'
import SubjectForm from './SubjectForm'

import { reset, initialize } from 'redux-form'
import uuidv4 from 'uuid/v4'
import SubjectList from './SubjectList';
import Modal from './Modal'
import UpdateInput from './UpdateInput'
import { newSubject, dropSubject, loadSubject } from '../../redux/actions/subject'
import { connect,  } from 'react-redux'
import { bindActionCreators } from 'redux';
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

    openModal = (data) => {
        this.props.initialize('updateSubject', data)
        this.setState({ modalVisible: true })
    }

    closeModal = (data) => {
        this.props.reset('updateSubject')
        this.setState({ modalVisible: false })
    }
    
    render() {
        return (
            <div style={{ width: "40%" }}>
                <SubjectForm onSubmit={this.submit} onClear={this.clear}/>
                <Modal visible={this.state.modalVisible} handleConfirm={this.closeModal} handleCancel={this.closeModal}>
                    <UpdateInput />
                </Modal>
                <SubjectList items={this.props.subjects} onRemove={this.props.dropSubject} onUpdate={this.openModal}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    subjects: state.subjects.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ dropSubject, reset, initialize }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SubjectPage)