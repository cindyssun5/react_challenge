'use strict'

class ProjectsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allProjects: []
    }

    this.convertToDate = this.convertToDate.bind(this);
  }

  componentDidMount() {
    this.props.getProjectsData((data) => {
      this.setState({allProjects: data});
    })
    
  }

  convertToDate(unixTime) {
    return moment.unix(unixTime).format("MMMM Do YYYY, h:mm a");
  }

  render() {
    var allProjects = this.state.allProjects;

    return(
      <div>
        {allProjects.map((project, index) =>
          <ProjectsListEntry
            key={index}
            index={index}
            added={this.convertToDate(project.created)}
            title={project.title}
            type={project.type}
            castingDirector={project.responsible}
            startDate={this.convertToDate(project.modified)}
          />
        )}
      </div>
    )
  }
}

ProjectsList.propTypes = {
  getProjectsData: React.PropTypes.func
}