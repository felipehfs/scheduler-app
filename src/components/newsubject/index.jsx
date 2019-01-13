import React from 'react';
import SubjectForm from './SubjectForm';
import { reset, initialize,  } from 'redux-form';
import uuidv4 from 'uuid/v4';
import SubjectList from './SubjectList';
import { newSubject, dropSubject, updateSubject } from '../../redux/actions/subject'
import { connect,  } from 'react-redux';
import UpdateForm  from './UpdateForm';
import { bindActionCreators } from 'redux';

class SubjectPage extends React.Component {
    
    state = {
        modalVisible: false,
    }

    // submit event inserts the new subject into store
    submit = (values, dispatch) => {  
        const fields = ['name', 'starts', 'ends']

        const isOk = fields.reduce((acum, field) => Object.keys(values).includes(field) && acum, true)
        values.key = uuidv4();
        
        if (isOk) {
            dispatch(newSubject(values))
        }

        dispatch(reset('subject'))
    };

    // handleUpdate makes the change into store
    handleUpdate = (values, dispatch) => {
        const fields = ['name', 'starts', 'ends'];
        const isOk = fields.reduce((acum, field) => Object.keys(values).includes(field) && acum, true);
        if (isOk){
            dispatch(updateSubject(values))
            this.closeModal()
        }
    }
    
    // closeModal 
    closeModal = () => this.setState({ modalVisible: false })


    // setupdateMode initialize the modal 
    setupdateMode = data => {
        this.props.initialize('updatesubject', data)
        this.setState({...this.state, modalVisible: true })
    }

    render() {
        return (
            <div style={{ width: "40%" }}>
                <SubjectForm onSubmit={this.submit} />
                <UpdateForm onSubmit={this.handleUpdate} 
                    modalVisible={this.state.modalVisible} handleCancel={this.closeModal}/>
                <SubjectList items={this.props.subjects} onRemove={this.props.dropSubject}
                    onUpdate={this.setupdateMode}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    subjects: state.subjects.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ dropSubject, reset,  initialize }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SubjectPage)