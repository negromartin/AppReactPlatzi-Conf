import React from 'react';
import Modal from './Modal';

export default function DeleteBadgeModal(props){

	return <Modal isOpen={props.isOpen} onClose={props.onClose}>
		<div className="DeleteBadgeModal">
			<h1>Esta usted seguro?</h1>
			<p>Puede evitar borrar el badge por accidente</p>

			<div>
				<button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Borrar</button>
				<button onClick={props.onClose} className="btn btn-primary">Cancelar</button>

			</div>


		</div>


	</Modal>


}