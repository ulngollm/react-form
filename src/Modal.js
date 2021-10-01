import React from 'react';
import './Modal.css';
import Form from './Form';


export default class Modal extends React.Component{
    constructor(props){  
        super(props);
        this.state = { isOpen: props.isOpen };
        // this.closeModal = this.closeModal.bind(this);
    }
    static openModal(e){
        const modalId = e.target.dataset.modal;
        const modal = document.querySelector(`.modal[data-modal=${modalId}]`);
        modal.classList.add('modal_open');
    }
    closeModal(e){
        console.log('close');
        this.setState({isOpen: false});
    }
    render(){
        return (
            <div className={this.state.isOpen? 'modal modal_open': 'modal'} data-modal={this.props.id}>
                <button title="close modal" onClick={this.closeModal.bind(this)}>X</button>
                <Form></Form>
            </div>
        );
    }
}