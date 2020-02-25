# Landrs Ontology Development Project
The Landrs Ontology project consists of several ontology development efforts in support of the LANDRS toolkit for Drone data.

## UxS-Core
UxS-core is a lightweight family of vocabularies for [Unmanned Systems](https://www.opengeospatial.org/projects/groups/uxsdwg) backed by a more expressive ontology that provide deeper logics for applications that require it. UxS-Core is modeled off of a similar modular pattern used to implement the W3C Semantic Sensor Network family of ontologies where <http://www.w3.org/ns/sosa/> is modeled using [Schema.org-style](https://schema.org) semantic enrichment and <http://www.w3.org/ns/ssn/> utilizes SOSA through owl:imports and extends the semantics though deeper OWL relationships.

## Mavlink-o
Mavlink-o is a lightweight taxonomy modeled in a similar style to the [Vehicle Signal and Attribute Ontology](https://github.com/klotzbenjamin/vss-ontology/) for automotive applications. Just as VSSo is based on the proposed [Vehicle Signal Specification standard](https://github.com/GENIVI/vehicle_signal_specification), Mavlink-o proposes to provide a lightweight semantic layer on top of the [Mavlink](https://mavlink.io/en/) lightweight messaging protocol for communicating with drones and between onboard drone components. A alignment module will provide a crosswalk between VSSo and Mavlink-o with the aim of providing a common bridge between signal specifications used in the UAV and UGV application space.

#Build GUI with Widoco
## Prerequisits
maven
java-sdk

## Build
```
$ cd Widoco //Submodule so clone with --recursive
$ mvn build
$ mvn package

java -jar jar/widoco-1.4.13-jar-with-dependencies.jar -ontFile ../LANDRS-o/ontology.ttl -outFolder doc -rewriteAll -useCustomStyle  -includeImportedOntologies -htaccess -webVowl -licensius -ignoreIndividuals -doNotDisplaySerializations -displayDirectImportsOnly -excludeIntroduction -uniteSections 
```

## Quick and dirty local demo
```
$ cd doc/
$ ln -s index-en.html index.html
$ python3 -m http.server 8080
View in browser.
```
![OntologyDocs](OntologyDocs.png)
