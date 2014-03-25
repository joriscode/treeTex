/** @constructor */
ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1 = (function() {
  ScalaJS.c.scala_util_automata_DetWordAutom.call(this);
  this.nstates$2 = 0;
  this.delta$2 = null;
  this.default$2 = null;
  this.finals$2 = null
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1.prototype = new ScalaJS.inheritable.scala_util_automata_DetWordAutom();
ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1.prototype.constructor = ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1;
ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1.prototype.nstates__I = (function() {
  return this.nstates$2
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1.prototype.delta__ALscala_collection_mutable_Map = (function() {
  return this.delta$2
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1.prototype.$default__AI = (function() {
  return this.default$2
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1.prototype.finals__AI = (function() {
  return this.finals$2
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1.prototype.init___Lscala_util_automata_SubsetConstruction__I__ALscala_collection_mutable_Map__AI__AI = (function($$outer, nstatesR$1, deltaR$1, defaultR$1, finalsR$1) {
  ScalaJS.c.scala_util_automata_DetWordAutom.prototype.init___.call(this);
  this.nstates$2 = nstatesR$1;
  this.delta$2 = deltaR$1;
  this.default$2 = defaultR$1;
  this.finals$2 = finalsR$1;
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_util_automata_SubsetConstruction$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_automata_SubsetConstruction$$anon$1.prototype = ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1.prototype;
ScalaJS.is.scala_util_automata_SubsetConstruction$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_automata_SubsetConstruction$$anon$1)))
});
ScalaJS.as.scala_util_automata_SubsetConstruction$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_util_automata_SubsetConstruction$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.automata.SubsetConstruction$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_util_automata_SubsetConstruction$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_automata_SubsetConstruction$$anon$1)))
});
ScalaJS.asArrayOf.scala_util_automata_SubsetConstruction$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_automata_SubsetConstruction$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.automata.SubsetConstruction$$anon$1;", depth)
  }
});
ScalaJS.data.scala_util_automata_SubsetConstruction$$anon$1 = new ScalaJS.ClassTypeData({
  scala_util_automata_SubsetConstruction$$anon$1: 0
}, false, "scala.util.automata.SubsetConstruction$$anon$1", ScalaJS.data.scala_util_automata_DetWordAutom, {
  scala_util_automata_SubsetConstruction$$anon$1: 1,
  scala_util_automata_DetWordAutom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1.prototype.$classData = ScalaJS.data.scala_util_automata_SubsetConstruction$$anon$1;
//@ sourceMappingURL=SubsetConstruction$$anon$1.js.map
