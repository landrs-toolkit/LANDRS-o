var Hylar = require('hylar');
var fs = require('fs');
h = new Hylar();

//Files and settings
var mimeType = 'text/turtle';

query = 'construct { ?t ?s ?r.} where { ?t ?s ?r.}';



var triples = fs.readFileSync('./ontology.ttl', "utf8").toString();

var ntriples = '';


//Do reasoning and run query
h.load(triples, mimeType)
  .then(response => {
    return h.query(query);
  })
  .then(results => {
    ntriples = results.triples.toString().replace(/,/g, '')
    console.log(ntriples)
  });

