import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import ReactDOM from 'react-dom';
import DeleteBadgeModal from '../components/DeleteBadgeModal';




export default function BadgeDetails(props){
	
	const badge = props.badge; 
	return(
		<React.Fragment>
				<div className="BadgeDetails__hero">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<img src={confLogo} alt="Logo"/>
							</div>
							<div className="col-6 BadgeDetails__hero-attendant-name">
							<h1>{badge.primNombre} {badge.segNombre}</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
             			   primNombre={badge.primNombre}
             			   segNombre={badge.segNombre}
             			   email={badge.email}
             			   twitter={badge.twitter}
             			   trabajo={badge.trabajo}
             				 />

						</div>
						<div className="col">
							<h2>Acciones</h2>
            			  <div>
                			<div>
                			
                				<Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                    			Editar
                  				</Link>
                			</div>

        			        <div>
                			  

                			  <button onClick={props.onOpenModal} className="btn btn-danger">Borrar</button>
               				 	
               				 	<DeleteBadgeModal isOpen = {props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
               				 </div>
              			   </div>

						</div>
					</div>

				</div>

			</React.Fragment>
			);

}