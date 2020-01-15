import React from 'react';
import './styles/BadgesList.css';
import {Link} from 'react-router-dom';
import Gravatar from './Gravatar';
class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar className="BadgesListItem__avatar"
          email={this.props.badge.email} />

        <div>
          <strong>
            {this.props.badge.primNombre} {this.props.badge.segNombre}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.trabajo}
        </div>
      </div>
    );
  }
}

//----Hookcustom del filtrador de badges por nombre y apellido
function useBuscadorBadges(badges){
  const [query,setQuery]=React.useState('');
  const [filtradorBadges,setFiltradorBadges] = React.useState(badges);
 
  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.primNombre} ${badge.segNombre}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFiltradorBadges(result);
  }, [badges, query]);

  return { query, setQuery, filtradorBadges };
};

//--------------------------------



function BadgesList (props) {
  const badges = props.badges;
  const { query, setQuery, filtradorBadges } = useBuscadorBadges(badges);//llamada al filtrador Hook de badges

    if (filtradorBadges.length === 0) {
      return (
        <div>
         <div className="form-group">
           <label className="font-weight-bold"> Filtrador de Badges</label>
           <input type="text" className="form-control" value={query} onChange={(e)=>{ setQuery(e.target.value);}}/>

         </div>

          <h3>No se encontro ningun badge<span role = "img" aria-label = "oveja"> 🐑 </span></h3>
          <Link className="btn btn-primary" to="/badges/new">
            Crea un nuevo Badge
          </Link>
        </div>
      );
    }



    return (
      <div className="BadgesList">
         <div className="form-group">
           <label className="font-weight-bold"> Filtrador de Badges</label>
           <input type="text" className="form-control" value={query} onChange={(e)=>{ setQuery(e.target.value);}}/>

         </div>


        <ul className="list-unstyled">
          {filtradorBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  
}

export default BadgesList;