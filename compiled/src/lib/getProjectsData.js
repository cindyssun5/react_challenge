'use strict';

var getProjectsData = function getProjectsData(callback) {
  $.get('/api/projects', function (data) {
    if (callback) {
      callback(data);
    }
  }).fail(function (response) {
    console.log(response);
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZ2V0UHJvamVjdHNEYXRhLmpzIl0sIm5hbWVzIjpbImdldFByb2plY3RzRGF0YSIsImNhbGxiYWNrIiwiJCIsImdldCIsImRhdGEiLCJmYWlsIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLFFBQUQsRUFBYztBQUNsQ0MsSUFBRUMsR0FBRixDQUFNLGVBQU4sRUFBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQy9CLFFBQUlILFFBQUosRUFBYztBQUNaQSxlQUFTRyxJQUFUO0FBQ0Q7QUFDRixHQUpELEVBS0NDLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJDLFlBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNELEdBUEQ7QUFRRCxDQVREIiwiZmlsZSI6ImdldFByb2plY3RzRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5sZXQgZ2V0UHJvamVjdHNEYXRhID0gKGNhbGxiYWNrKSA9PiB7XG4gICQuZ2V0KCcvYXBpL3Byb2plY3RzJywgKGRhdGEpID0+IHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH1cbiAgfSlcbiAgLmZhaWwoKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICB9KTtcbn0iXX0=