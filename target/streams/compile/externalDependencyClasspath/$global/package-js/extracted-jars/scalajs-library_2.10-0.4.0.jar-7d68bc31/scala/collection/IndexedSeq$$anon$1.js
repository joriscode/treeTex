/** @constructor */
ScalaJS.c.scala_collection_IndexedSeq$$anon$1 = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.call(this)
});
ScalaJS.c.scala_collection_IndexedSeq$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom();
ScalaJS.c.scala_collection_IndexedSeq$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_IndexedSeq$$anon$1;
ScalaJS.c.scala_collection_IndexedSeq$$anon$1.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_IndexedSeq().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_IndexedSeq$$anon$1.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.init___Lscala_collection_generic_GenTraversableFactory.call(this, ScalaJS.modules.scala_collection_IndexedSeq());
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_IndexedSeq$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_IndexedSeq$$anon$1.prototype = ScalaJS.c.scala_collection_IndexedSeq$$anon$1.prototype;
ScalaJS.is.scala_collection_IndexedSeq$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IndexedSeq$$anon$1)))
});
ScalaJS.as.scala_collection_IndexedSeq$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_IndexedSeq$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IndexedSeq$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_IndexedSeq$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IndexedSeq$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_IndexedSeq$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IndexedSeq$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IndexedSeq$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_IndexedSeq$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_IndexedSeq$$anon$1: 0
}, false, "scala.collection.IndexedSeq$$anon$1", ScalaJS.data.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom, {
  scala_collection_IndexedSeq$$anon$1: 1,
  scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_IndexedSeq$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_IndexedSeq$$anon$1;
//@ sourceMappingURL=IndexedSeq$$anon$1.js.map
