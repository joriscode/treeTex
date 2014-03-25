/** @constructor */
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1 = (function() {
  ScalaJS.c.scala_util_automata_NondetWordAutom.call(this);
  this.nstates$2 = 0;
  this.labels$2 = null;
  this.initials$2 = null;
  this.finals$2 = null;
  this.delta$2 = null;
  this.default$2 = null
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype = new ScalaJS.inheritable.scala_util_automata_NondetWordAutom();
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.constructor = ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1;
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.nstates__I = (function() {
  return this.nstates$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.labels__Lscala_collection_immutable_List = (function() {
  return this.labels$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.initials__p2__AI = (function() {
  return this.initials$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.finals__AI = (function() {
  return this.finals$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.delta__ALscala_collection_mutable_Map = (function() {
  return this.delta$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.$default__ALscala_collection_immutable_BitSet = (function() {
  return this.default$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.labels__Lscala_collection_Seq = (function() {
  return this.labels__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.init___Lscala_util_automata_WordBerrySethi__AI__AI__ALscala_collection_mutable_Map__ALscala_collection_immutable_BitSet = (function($$outer, finalsArr$1, initialsArr$1, deltaArr$1, defaultArr$1) {
  ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.init___.call(this);
  this.nstates$2 = $$outer.pos__I();
  this.labels$2 = $$outer.labels__Lscala_collection_mutable_HashSet().toList__Lscala_collection_immutable_List();
  this.initials$2 = initialsArr$1;
  this.finals$2 = finalsArr$1;
  this.delta$2 = deltaArr$1;
  this.default$2 = defaultArr$1;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_util_automata_WordBerrySethi$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_automata_WordBerrySethi$$anon$1.prototype = ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype;
ScalaJS.is.scala_util_automata_WordBerrySethi$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_automata_WordBerrySethi$$anon$1)))
});
ScalaJS.as.scala_util_automata_WordBerrySethi$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_util_automata_WordBerrySethi$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.automata.WordBerrySethi$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_util_automata_WordBerrySethi$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_automata_WordBerrySethi$$anon$1)))
});
ScalaJS.asArrayOf.scala_util_automata_WordBerrySethi$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_automata_WordBerrySethi$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.automata.WordBerrySethi$$anon$1;", depth)
  }
});
ScalaJS.data.scala_util_automata_WordBerrySethi$$anon$1 = new ScalaJS.ClassTypeData({
  scala_util_automata_WordBerrySethi$$anon$1: 0
}, false, "scala.util.automata.WordBerrySethi$$anon$1", ScalaJS.data.scala_util_automata_NondetWordAutom, {
  scala_util_automata_WordBerrySethi$$anon$1: 1,
  scala_util_automata_NondetWordAutom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1.prototype.$classData = ScalaJS.data.scala_util_automata_WordBerrySethi$$anon$1;
//@ sourceMappingURL=WordBerrySethi$$anon$1.js.map
