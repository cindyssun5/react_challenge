'use strict'

let getProjectsData = (callback) => {
  $.get('/api/projects', (data) => {
    if (callback) {
      callback(data);
    }
  })
  .fail((response) => {
    console.log(response);
  });
}