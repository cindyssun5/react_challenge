'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectsListEntry = function (_React$Component) {
  _inherits(ProjectsListEntry, _React$Component);

  function ProjectsListEntry(props) {
    _classCallCheck(this, ProjectsListEntry);

    var _this = _possibleConstructorReturn(this, (ProjectsListEntry.__proto__ || Object.getPrototypeOf(ProjectsListEntry)).call(this, props));

    _this.state = {
      checked: ""
    };

    _this.toggleChecked = _this.toggleChecked.bind(_this);
    return _this;
  }

  _createClass(ProjectsListEntry, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var isChecked = 'isChecked' + this.props.index;

      if (localStorage.getItem(isChecked)) {
        this.setState({ checked: "checked" });
      } else {
        this.setState({ checked: "" });
      }
    }
  }, {
    key: 'toggleChecked',
    value: function toggleChecked() {
      var isChecked = 'isChecked' + this.props.index;

      if (localStorage.getItem(isChecked)) {
        localStorage.setItem(isChecked, "");
        this.setState({ checked: "" });
      } else {
        localStorage.setItem(isChecked, "checked");
        this.setState({ checked: "checked" });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'col-md-6 col-md-offset-3' },
        React.createElement(
          'div',
          { className: 'panel panel-default' },
          React.createElement(
            'div',
            { className: 'panel-heading' },
            React.createElement(
              'b',
              null,
              'TITLE'
            ),
            ': ',
            this.props.title
          ),
          React.createElement(
            'ul',
            { className: 'list-group' },
            React.createElement(
              'li',
              { className: 'list-group-item' },
              React.createElement(
                'b',
                null,
                'Added'
              ),
              ': ',
              this.props.added
            ),
            React.createElement(
              'li',
              { className: 'list-group-item' },
              React.createElement(
                'b',
                null,
                'Type'
              ),
              ': ',
              this.props.type
            ),
            React.createElement(
              'li',
              { className: 'list-group-item' },
              React.createElement(
                'b',
                null,
                'Casting Director'
              ),
              ': ',
              this.props.castingDirector
            ),
            React.createElement(
              'li',
              { className: 'list-group-item' },
              React.createElement(
                'b',
                null,
                'Start Date'
              ),
              ': ',
              this.props.startDate
            ),
            React.createElement(
              'li',
              { className: 'list-group-item' },
              React.createElement('input', { type: 'checkbox', checked: this.state.checked, onClick: this.toggleChecked }),
              React.createElement(
                'b',
                null,
                ' \xA0 I\'m Interested'
              )
            )
          )
        )
      );
    }
  }]);

  return ProjectsListEntry;
}(React.Component);

ProjectsListEntry.propTypes = {
  index: React.PropTypes.number,
  title: React.PropTypes.string,
  added: React.PropTypes.string,
  type: React.PropTypes.string,
  castingDirector: React.PropTypes.string,
  startDate: React.PropTypes.string
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJQcm9qZWN0c0xpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJjaGVja2VkIiwidG9nZ2xlQ2hlY2tlZCIsImJpbmQiLCJpc0NoZWNrZWQiLCJpbmRleCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRTdGF0ZSIsInNldEl0ZW0iLCJ0aXRsZSIsImFkZGVkIiwidHlwZSIsImNhc3RpbmdEaXJlY3RvciIsInN0YXJ0RGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztJQUVNQSxpQjs7O0FBQ0osNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSUFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVM7QUFERSxLQUFiOztBQUlBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFQaUI7QUFRbEI7Ozs7eUNBRW9CO0FBQ25CLFVBQUlDLFlBQVksY0FBYyxLQUFLTCxLQUFMLENBQVdNLEtBQXpDOztBQUVBLFVBQUlDLGFBQWFDLE9BQWIsQ0FBdUJILFNBQXZCLENBQUosRUFBd0M7QUFDdEMsYUFBS0ksUUFBTCxDQUFlLEVBQUVQLFNBQVMsU0FBWCxFQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS08sUUFBTCxDQUFlLEVBQUVQLFNBQVMsRUFBWCxFQUFmO0FBQ0Q7QUFDRjs7O29DQUVlO0FBQ2QsVUFBSUcsWUFBWSxjQUFjLEtBQUtMLEtBQUwsQ0FBV00sS0FBekM7O0FBRUEsVUFBSUMsYUFBYUMsT0FBYixDQUFzQkgsU0FBdEIsQ0FBSixFQUF1QztBQUNyQ0UscUJBQWFHLE9BQWIsQ0FBc0JMLFNBQXRCLEVBQWtDLEVBQWxDO0FBQ0EsYUFBS0ksUUFBTCxDQUFlLEVBQUVQLFNBQVMsRUFBWCxFQUFmO0FBQ0QsT0FIRCxNQUdPO0FBQ0xLLHFCQUFhRyxPQUFiLENBQXNCTCxTQUF0QixFQUFrQyxTQUFsQztBQUNBLGFBQUtJLFFBQUwsQ0FBZSxFQUFFUCxTQUFTLFNBQVgsRUFBZjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSwwQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFBK0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUEvQjtBQUFBO0FBQThDLGlCQUFLRixLQUFMLENBQVdXO0FBQXpELFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSSxXQUFVLFlBQWQ7QUFDRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxpQkFBZDtBQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWhDO0FBQUE7QUFBK0MsbUJBQUtYLEtBQUwsQ0FBV1k7QUFBMUQsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGlCQUFkO0FBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBaEM7QUFBQTtBQUE4QyxtQkFBS1osS0FBTCxDQUFXYTtBQUF6RCxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsaUJBQWQ7QUFBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFoQztBQUFBO0FBQTBELG1CQUFLYixLQUFMLENBQVdjO0FBQXJFLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxpQkFBZDtBQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWhDO0FBQUE7QUFBb0QsbUJBQUtkLEtBQUwsQ0FBV2U7QUFBL0QsYUFKRjtBQUtFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGlCQUFkO0FBQ0UsNkNBQU8sTUFBSyxVQUFaLEVBQXVCLFNBQVMsS0FBS2QsS0FBTCxDQUFXQyxPQUEzQyxFQUFvRCxTQUFTLEtBQUtDLGFBQWxFLEdBREY7QUFDMkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQzRjtBQUxGO0FBRkY7QUFERixPQURGO0FBZ0JEOzs7O0VBbEQ2QmEsTUFBTUMsUzs7QUFxRHRDbEIsa0JBQWtCbUIsU0FBbEIsR0FBOEI7QUFDNUJaLFNBQU9VLE1BQU1HLFNBQU4sQ0FBZ0JDLE1BREs7QUFFNUJULFNBQU9LLE1BQU1HLFNBQU4sQ0FBZ0JFLE1BRks7QUFHNUJULFNBQU9JLE1BQU1HLFNBQU4sQ0FBZ0JFLE1BSEs7QUFJNUJSLFFBQU1HLE1BQU1HLFNBQU4sQ0FBZ0JFLE1BSk07QUFLNUJQLG1CQUFpQkUsTUFBTUcsU0FBTixDQUFnQkUsTUFMTDtBQU01Qk4sYUFBV0MsTUFBTUcsU0FBTixDQUFnQkU7QUFOQyxDQUE5QiIsImZpbGUiOiJQcm9qZWN0c0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jbGFzcyBQcm9qZWN0c0xpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBjaGVja2VkOiBcIlwiIFxuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlQ2hlY2tlZCA9IHRoaXMudG9nZ2xlQ2hlY2tlZC5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgbGV0IGlzQ2hlY2tlZCA9ICdpc0NoZWNrZWQnICsgdGhpcy5wcm9wcy5pbmRleDtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoIGlzQ2hlY2tlZCApKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKCB7IGNoZWNrZWQ6IFwiY2hlY2tlZFwiIH0gKSBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSggeyBjaGVja2VkOiBcIlwiIH0gKSBcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDaGVja2VkKCkge1xuICAgIGxldCBpc0NoZWNrZWQgPSAnaXNDaGVja2VkJyArIHRoaXMucHJvcHMuaW5kZXg7XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oIGlzQ2hlY2tlZCApKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggaXNDaGVja2VkICwgXCJcIiApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSggeyBjaGVja2VkOiBcIlwiIH0gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIGlzQ2hlY2tlZCAsIFwiY2hlY2tlZFwiICk7XG4gICAgICB0aGlzLnNldFN0YXRlKCB7IGNoZWNrZWQ6IFwiY2hlY2tlZFwiIH0gKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+PGI+VElUTEU8L2I+OiB7dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPjxiPkFkZGVkPC9iPjoge3RoaXMucHJvcHMuYWRkZWR9PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj48Yj5UeXBlPC9iPjoge3RoaXMucHJvcHMudHlwZX08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPjxiPkNhc3RpbmcgRGlyZWN0b3I8L2I+OiB7dGhpcy5wcm9wcy5jYXN0aW5nRGlyZWN0b3J9PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj48Yj5TdGFydCBEYXRlPC9iPjoge3RoaXMucHJvcHMuc3RhcnREYXRlfTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2hlY2tlZH0+PC9pbnB1dD48Yj4gJm5ic3A7IEknbSBJbnRlcmVzdGVkPC9iPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5Qcm9qZWN0c0xpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIGluZGV4OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgYWRkZWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNhc3RpbmdEaXJlY3RvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc3RhcnREYXRlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nICAgXG59Il19