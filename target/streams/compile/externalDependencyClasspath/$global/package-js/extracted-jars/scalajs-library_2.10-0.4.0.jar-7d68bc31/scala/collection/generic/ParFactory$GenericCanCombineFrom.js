/** @constructor */
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.call(this)
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom();
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.constructor = ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom;
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.apply__Lscala_collection_parallel_ParIterable__Lscala_collection_parallel_Combiner = (function(from) {
  return from.genericCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.apply__Lscala_collection_parallel_Combiner = (function() {
  return this.scala$collection$generic$ParFactory$GenericCanCombineFrom$$$outer__Lscala_collection_generic_ParFactory().newBuilder__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.scala$collection$generic$ParFactory$GenericCanCombineFrom$$$outer__Lscala_collection_generic_ParFactory = (function() {
  return ScalaJS.as.scala_collection_generic_ParFactory(this.$$outer$f)
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.apply__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_parallel_ParIterable__Lscala_collection_parallel_Combiner(ScalaJS.as.scala_collection_parallel_ParIterable(from))
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.apply__O__Lscala_collection_parallel_Combiner = (function(from) {
  return this.apply__Lscala_collection_parallel_ParIterable__Lscala_collection_parallel_Combiner(ScalaJS.as.scala_collection_parallel_ParIterable(from))
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.apply__Lscala_collection_GenTraversable__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_parallel_ParIterable__Lscala_collection_parallel_Combiner(ScalaJS.as.scala_collection_parallel_ParIterable(from))
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.init___Lscala_collection_generic_ParFactory = (function($$outer) {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.init___Lscala_collection_generic_GenTraversableFactory.call(this, $$outer);
  return this
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.scala$collection$generic$ParFactory$GenericCanCombineFrom$$$outer__ = (function() {
  return this.scala$collection$generic$ParFactory$GenericCanCombineFrom$$$outer__Lscala_collection_generic_ParFactory()
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.apply__Lscala_collection_parallel_ParIterable__ = (function(from) {
  return this.apply__Lscala_collection_parallel_ParIterable__Lscala_collection_parallel_Combiner(from)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ParFactory$GenericCanCombineFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype = ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype;
ScalaJS.is.scala_collection_generic_ParFactory$GenericCanCombineFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ParFactory$GenericCanCombineFrom)))
});
ScalaJS.as.scala_collection_generic_ParFactory$GenericCanCombineFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ParFactory$GenericCanCombineFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ParFactory$GenericCanCombineFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ParFactory$GenericCanCombineFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ParFactory$GenericCanCombineFrom)))
});
ScalaJS.asArrayOf.scala_collection_generic_ParFactory$GenericCanCombineFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ParFactory$GenericCanCombineFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ParFactory$GenericCanCombineFrom;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ParFactory$GenericCanCombineFrom = new ScalaJS.ClassTypeData({
  scala_collection_generic_ParFactory$GenericCanCombineFrom: 0
}, false, "scala.collection.generic.ParFactory$GenericCanCombineFrom", ScalaJS.data.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom, {
  scala_collection_generic_ParFactory$GenericCanCombineFrom: 1,
  scala_collection_generic_CanCombineFrom: 1,
  scala_collection_Parallel: 1,
  scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ParFactory$GenericCanCombineFrom.prototype.$classData = ScalaJS.data.scala_collection_generic_ParFactory$GenericCanCombineFrom;
//@ sourceMappingURL=ParFactory$GenericCanCombineFrom.js.map
