'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        React.createElement('br', null),
        React.createElement(ProjectsList, { getProjectsData: this.props.getProjectsData })
      );
    }
  }]);

  return App;
}(React.Component);

App.propTypes = {
  getProjectsData: React.PropTypes.func
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJnZXRQcm9qZWN0c0RhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxR0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFHUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsR0FBRCxPQURGO0FBRUUsdUNBRkY7QUFHRSw0QkFBQyxZQUFELElBQWMsaUJBQWlCLEtBQUtBLEtBQUwsQ0FBV0MsZUFBMUM7QUFIRixPQURGO0FBT0Q7Ozs7RUFkZUMsTUFBTUMsUzs7QUFrQnhCSixJQUFJSyxTQUFKLEdBQWdCO0FBQ2RILG1CQUFpQkMsTUFBTUcsU0FBTixDQUFnQkM7QUFEbkIsQ0FBaEIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8UHJvamVjdHNMaXN0IGdldFByb2plY3RzRGF0YT17dGhpcy5wcm9wcy5nZXRQcm9qZWN0c0RhdGF9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGdldFByb2plY3RzRGF0YTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn0iXX0=