'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <Nav />
        <br/>
        <ProjectsList getProjectsData={this.props.getProjectsData}/>
      </div>
    )
  }
}


App.propTypes = {
  getProjectsData: React.PropTypes.func
}