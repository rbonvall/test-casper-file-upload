var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(
        '<html>' +
        'Upload!' +
        '<form method="post" action="upload">' +
        '  <input type="file" name="thing">' +
        '  <input type="submit">' +
        '</form>');
});

app.post('/upload', function (req, res) {
    console.log(req.files);
    res.send('Uploaded!');
});

var server = app.listen(6699, function () {
    console.log('Listening on port %d', server.address().port);
});
