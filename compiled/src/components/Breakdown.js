"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breakdown = function (_React$Component) {
  _inherits(Breakdown, _React$Component);

  function Breakdown(props) {
    _classCallCheck(this, Breakdown);

    return _possibleConstructorReturn(this, (Breakdown.__proto__ || Object.getPrototypeOf(Breakdown)).call(this, props));
  }

  _createClass(Breakdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getProjectsData(function (data) {
        console.log(data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container-fluid" },
        "BLAHBLAHBLAH"
      );
    }
  }]);

  return Breakdown;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrZG93bi5qc3giXSwibmFtZXMiOlsiQnJlYWtkb3duIiwicHJvcHMiLCJnZXRQcm9qZWN0c0RhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFFbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtBLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQixVQUFDQyxJQUFELEVBQVU7QUFDbkNDLGdCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUFBO0FBQUEsT0FERjtBQUtEOzs7O0VBakJxQkcsTUFBTUMsUyIsImZpbGUiOiJCcmVha2Rvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCcmVha2Rvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZ2V0UHJvamVjdHNEYXRhKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgIEJMQUhCTEFIQkxBSFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19