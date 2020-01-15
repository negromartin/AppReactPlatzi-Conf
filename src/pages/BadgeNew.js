import React from 'react';
import api from '../api';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading';
import BadgeForm from '../components/BadgeForm';
class BadgeNew extends React.Component{
	 state = {
	 	loading:false,
	 	error:null,
    form: {
      primNombre: '',
      segNombre: '',
      email: '',
      trabajo: '',
      twitter: '',
    },
  };
//evento que modifica el badge
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  //----funcion de insertar datos en la api (Post)
  handleSubmit = async e =>{
  	e.preventDefault();
  	this.setState({loading:true , error:null});
  	try{
  		await api.badges.create(this.state.form);
  		this.setState({loading:false});
  		this.props.history.push('/badges');

  	}catch(error){
  		this.setState({loading:false , error:error});
  	}
  };

	render(){

		if(this.state.loading){
			return <PageLoading />;

		}
		return(
			<React.Fragment>
				
				<div className="BadgeNew__hero">
					<img className="BadgeNew__hero-img img-fluid" src={header} alt="logo"/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col">
							<Badge 
								primNombre={this.state.form.primNombre||'Nombre'}
								segNombre={this.state.form.segNombre ||'Apellido'}
								trabajo={this.state.form.trabajo ||'Trabajo'}
								twitter={this.state.form.twitter ||'Twitter'}
								email={this.state.form.email || 'EMAIL'} 

							/>

						</div>
						<div className="col-6">
							<h1>Nuevo Asistente</h1>
							<BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error} />
						</div>
						
					</div>

				</div>



			</React.Fragment>

			);
	}

}

export default BadgeNew;