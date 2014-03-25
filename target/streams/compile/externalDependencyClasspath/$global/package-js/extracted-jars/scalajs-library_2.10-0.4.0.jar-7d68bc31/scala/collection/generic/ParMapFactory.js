/** @constructor */
ScalaJS.c.scala_collection_generic_ParMapFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenMapFactory.call(this)
});
ScalaJS.c.scala_collection_generic_ParMapFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenMapFactory();
ScalaJS.c.scala_collection_generic_ParMapFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_ParMapFactory;
ScalaJS.c.scala_collection_generic_ParMapFactory.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return this.newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParMapFactory.prototype.newCombiner__ = (function() {
  return this.newCombiner__Lscala_collection_parallel_Combiner()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ParMapFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ParMapFactory.prototype = ScalaJS.c.scala_collection_generic_ParMapFactory.prototype;
ScalaJS.is.scala_collection_generic_ParMapFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ParMapFactory)))
});
ScalaJS.as.scala_collection_generic_ParMapFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ParMapFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ParMapFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ParMapFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ParMapFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_ParMapFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ParMapFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ParMapFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ParMapFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_ParMapFactory: 0
}, false, "scala.collection.generic.ParMapFactory", ScalaJS.data.scala_collection_generic_GenMapFactory, {
  scala_collection_generic_ParMapFactory: 1,
  scala_collection_generic_GenericParMapCompanion: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ParMapFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_ParMapFactory;
//@ sourceMappingURL=ParMapFactory.js.map
