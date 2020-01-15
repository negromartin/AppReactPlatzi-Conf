import React from 'react';

import confLogo from '../images/badge-header.svg';

import './styles/Badge.css';
import Gravatar from './Gravatar';
class Badge extends React.Component {
        render() {

            return ( 
            	<div className ="Badge">
            		<div className="Badge__header">
            			<img src={confLogo} alt=""/>
            		</div>
            	
            		<div className="Badge__section-name">
            		
            			<Gravatar className="Badge__avatar " email={this.props.email} alt="avatar"/>
            			<h1>{this.props.primNombre}<br/>{this.props.segNombre}</h1>
            		</div>
            	
            		<div className="Badge__section-info">
            			<h3>{this.props.trabajo}</h3>
            			<div>@{this.props.twitter}</div>
            		</div>
            	
            		<div className="Badge__footer">
            			#BlackpeopleCompany
            		</div>
            	</div>

            	)
            }
        }


 export default Badge;