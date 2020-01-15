import React from 'react';

class BadgeForm extends React.Component{
	//Eventos del formulario
/*
	state = {
			primNombre:"",
			segNombre:"",
			email:"",
			trabajo:"",
			twitter:""
		};

	handleChange = e=> {

		this.setState({
			[e.target.name] : e.target.value,
		})
	}
*/
	/*handleSubmit = e =>{
		e.preventDefault();
		console.log('El formulario fue submitted');
		console.log(this.state);
	}*/

	handleClick = e =>{
		console.log('el boton fue apretado');
	}
//---------------Fin eventos----------------
	render(){
		return(
			<div>
				
				<form onSubmit ={this.props.onSubmit}>
					<div className="form-group">
						<label>Nombre</label>
						<input onChange={this.props.onChange} className="form-control" type="text" name="primNombre" value={this.props.formValues.primNombre}/>
					</div>

					<div className="form-group">
						<label>Apellido</label>
						<input onChange={this.props.onChange} className="form-control" type="text" name="segNombre" value={this.props.formValues.segNombre}/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
					</div>

					<div className="form-group">
						<label>Trabajo</label>
						<input onChange={this.props.onChange} className="form-control" type="text" name="trabajo" value={this.props.formValues.trabajo}/>
					</div>
					<div className="form-group">
						<label>Twitter</label>
						<input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
					</div>

					<button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
					{this.props.error && 
                       <div className="alert alert-danger mb-3" role="alert">
                           {this.props.error.message}
                       </div> 
                    } 

				</form>

			</div>

			);
	}

}
export default BadgeForm;