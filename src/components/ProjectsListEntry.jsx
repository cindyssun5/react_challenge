'use strict'

class ProjectsListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      checked: "" 
    }

    this.toggleChecked = this.toggleChecked.bind(this);
  }
  
  componentWillMount() {
    let isChecked = 'isChecked' + this.props.index;

    if (localStorage.getItem ( isChecked )) {
      this.setState( { checked: "checked" } ) 
    } else {
      this.setState( { checked: "" } ) 
    }
  }

  toggleChecked() {
    let isChecked = 'isChecked' + this.props.index;

    if (localStorage.getItem( isChecked )) {
      localStorage.setItem( isChecked , "" );
      this.setState( { checked: "" } );
    } else {
      localStorage.setItem( isChecked , "checked" );
      this.setState( { checked: "checked" } );
    }
  }

  render() {
    return(
      <div className="col-md-6 col-md-offset-3">
        <div className="panel panel-default">
          <div className="panel-heading"><b>TITLE</b>: {this.props.title}</div>
          <ul className="list-group">
            <li className="list-group-item"><b>Added</b>: {this.props.added}</li>
            <li className="list-group-item"><b>Type</b>: {this.props.type}</li>
            <li className="list-group-item"><b>Casting Director</b>: {this.props.castingDirector}</li>
            <li className="list-group-item"><b>Start Date</b>: {this.props.startDate}</li>
            <li className="list-group-item">
              <input type="checkbox" checked={this.state.checked} onClick={this.toggleChecked}></input><b> &nbsp; I'm Interested</b>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

ProjectsListEntry.propTypes = {
  index: React.PropTypes.number,
  title: React.PropTypes.string,
  added: React.PropTypes.string,
  type: React.PropTypes.string,
  castingDirector: React.PropTypes.string,
  startDate: React.PropTypes.string   
}