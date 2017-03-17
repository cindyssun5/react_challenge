'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectsList = function (_React$Component) {
  _inherits(ProjectsList, _React$Component);

  function ProjectsList(props) {
    _classCallCheck(this, ProjectsList);

    var _this = _possibleConstructorReturn(this, (ProjectsList.__proto__ || Object.getPrototypeOf(ProjectsList)).call(this, props));

    _this.state = {
      allProjects: []
    };

    _this.convertToDate = _this.convertToDate.bind(_this);
    return _this;
  }

  _createClass(ProjectsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getProjectsData(function (data) {
        _this2.setState({ allProjects: data });
      });
    }
  }, {
    key: "convertToDate",
    value: function convertToDate(unixTime) {
      return moment.unix(unixTime).format("MMMM Do YYYY, h:mm a");
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var allProjects = this.state.allProjects;

      return React.createElement(
        "div",
        null,
        allProjects.map(function (project, index) {
          return React.createElement(ProjectsListEntry, {
            key: index,
            index: index,
            added: _this3.convertToDate(project.added),
            title: project.title,
            type: project.type,
            castingDirector: project.castingDirector,
            startDate: _this3.convertToDate(project.startDate)
          });
        })
      );
    }
  }]);

  return ProjectsList;
}(React.Component);

ProjectsList.propTypes = {
  getProjectsData: React.PropTypes.func
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzTGlzdC5qc3giXSwibmFtZXMiOlsiUHJvamVjdHNMaXN0IiwicHJvcHMiLCJzdGF0ZSIsImFsbFByb2plY3RzIiwiY29udmVydFRvRGF0ZSIsImJpbmQiLCJnZXRQcm9qZWN0c0RhdGEiLCJkYXRhIiwic2V0U3RhdGUiLCJ1bml4VGltZSIsIm1vbWVudCIsInVuaXgiLCJmb3JtYXQiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJhZGRlZCIsInRpdGxlIiwidHlwZSIsImNhc3RpbmdEaXJlY3RvciIsInN0YXJ0RGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhO0FBREYsS0FBYjs7QUFJQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBUGlCO0FBUWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQixXQUFLSixLQUFMLENBQVdLLGVBQVgsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFVO0FBQ25DLGVBQUtDLFFBQUwsQ0FBYyxFQUFDTCxhQUFhSSxJQUFkLEVBQWQ7QUFDRCxPQUZEO0FBSUQ7OztrQ0FFYUUsUSxFQUFVO0FBQ3RCLGFBQU9DLE9BQU9DLElBQVAsQ0FBWUYsUUFBWixFQUFzQkcsTUFBdEIsQ0FBNkIsc0JBQTdCLENBQVA7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSVQsY0FBYyxLQUFLRCxLQUFMLENBQVdDLFdBQTdCOztBQUVBLGFBQ0U7QUFBQTtBQUFBO0FBQ0dBLG9CQUFZVSxHQUFaLENBQWdCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLGlCQUNmLG9CQUFDLGlCQUFEO0FBQ0UsaUJBQUtBLEtBRFA7QUFFRSxtQkFBT0EsS0FGVDtBQUdFLG1CQUFPLE9BQUtYLGFBQUwsQ0FBbUJVLFFBQVFFLEtBQTNCLENBSFQ7QUFJRSxtQkFBT0YsUUFBUUcsS0FKakI7QUFLRSxrQkFBTUgsUUFBUUksSUFMaEI7QUFNRSw2QkFBaUJKLFFBQVFLLGVBTjNCO0FBT0UsdUJBQVcsT0FBS2YsYUFBTCxDQUFtQlUsUUFBUU0sU0FBM0I7QUFQYixZQURlO0FBQUEsU0FBaEI7QUFESCxPQURGO0FBZUQ7Ozs7RUF4Q3dCQyxNQUFNQyxTOztBQTJDakN0QixhQUFhdUIsU0FBYixHQUF5QjtBQUN2QmpCLG1CQUFpQmUsTUFBTUcsU0FBTixDQUFnQkM7QUFEVixDQUF6QiIsImZpbGUiOiJQcm9qZWN0c0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY2xhc3MgUHJvamVjdHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWxsUHJvamVjdHM6IFtdXG4gICAgfVxuXG4gICAgdGhpcy5jb252ZXJ0VG9EYXRlID0gdGhpcy5jb252ZXJ0VG9EYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmdldFByb2plY3RzRGF0YSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxsUHJvamVjdHM6IGRhdGF9KTtcbiAgICB9KVxuICAgIFxuICB9XG5cbiAgY29udmVydFRvRGF0ZSh1bml4VGltZSkge1xuICAgIHJldHVybiBtb21lbnQudW5peCh1bml4VGltZSkuZm9ybWF0KFwiTU1NTSBEbyBZWVlZLCBoOm1tIGFcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGFsbFByb2plY3RzID0gdGhpcy5zdGF0ZS5hbGxQcm9qZWN0cztcblxuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIHthbGxQcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PlxuICAgICAgICAgIDxQcm9qZWN0c0xpc3RFbnRyeVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGFkZGVkPXt0aGlzLmNvbnZlcnRUb0RhdGUocHJvamVjdC5hZGRlZCl9XG4gICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgIHR5cGU9e3Byb2plY3QudHlwZX1cbiAgICAgICAgICAgIGNhc3RpbmdEaXJlY3Rvcj17cHJvamVjdC5jYXN0aW5nRGlyZWN0b3J9XG4gICAgICAgICAgICBzdGFydERhdGU9e3RoaXMuY29udmVydFRvRGF0ZShwcm9qZWN0LnN0YXJ0RGF0ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5Qcm9qZWN0c0xpc3QucHJvcFR5cGVzID0ge1xuICBnZXRQcm9qZWN0c0RhdGE6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59Il19