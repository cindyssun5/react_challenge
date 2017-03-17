'use strict'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="navbar navbar-default">
        <div className="col-md-6 col-md-offset-3">
          <div className="navbar-header">
            <center><a className="navbar-brand" href="#">Projects List</a></center>
          </div>
        </div>
      </div>
    )
  }
}