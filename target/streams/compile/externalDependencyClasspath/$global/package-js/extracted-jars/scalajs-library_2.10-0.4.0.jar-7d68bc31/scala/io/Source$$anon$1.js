/** @constructor */
ScalaJS.c.scala_io_Source$$anon$1 = (function() {
  ScalaJS.c.scala_io_Source.call(this);
  this.iter$2 = null
});
ScalaJS.c.scala_io_Source$$anon$1.prototype = new ScalaJS.inheritable.scala_io_Source();
ScalaJS.c.scala_io_Source$$anon$1.prototype.constructor = ScalaJS.c.scala_io_Source$$anon$1;
ScalaJS.c.scala_io_Source$$anon$1.prototype.iter__Lscala_collection_Iterator = (function() {
  return this.iter$2
});
ScalaJS.c.scala_io_Source$$anon$1.prototype.init___Lscala_collection_Iterable = (function(iterable$1) {
  ScalaJS.c.scala_io_Source.prototype.init___.call(this);
  this.iter$2 = iterable$1.iterator__Lscala_collection_Iterator();
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_io_Source$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Source$$anon$1.prototype = ScalaJS.c.scala_io_Source$$anon$1.prototype;
ScalaJS.is.scala_io_Source$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Source$$anon$1)))
});
ScalaJS.as.scala_io_Source$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_io_Source$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Source$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_io_Source$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Source$$anon$1)))
});
ScalaJS.asArrayOf.scala_io_Source$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Source$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Source$$anon$1;", depth)
  }
});
ScalaJS.data.scala_io_Source$$anon$1 = new ScalaJS.ClassTypeData({
  scala_io_Source$$anon$1: 0
}, false, "scala.io.Source$$anon$1", ScalaJS.data.scala_io_Source, {
  scala_io_Source$$anon$1: 1,
  scala_io_Source: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Source$$anon$1.prototype.$classData = ScalaJS.data.scala_io_Source$$anon$1;
//@ sourceMappingURL=Source$$anon$1.js.map
