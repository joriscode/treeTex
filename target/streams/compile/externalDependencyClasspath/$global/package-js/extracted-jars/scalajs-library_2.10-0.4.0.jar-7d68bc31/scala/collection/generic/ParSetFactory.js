/** @constructor */
ScalaJS.c.scala_collection_generic_ParSetFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenSetFactory.call(this)
});
ScalaJS.c.scala_collection_generic_ParSetFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenSetFactory();
ScalaJS.c.scala_collection_generic_ParSetFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_ParSetFactory;
ScalaJS.c.scala_collection_generic_ParSetFactory.prototype.newBuilder__Lscala_collection_parallel_Combiner = (function() {
  return this.newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParSetFactory.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return this.newBuilder__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_generic_ParSetFactory.prototype.newCombiner__ = (function() {
  return this.newCombiner__Lscala_collection_parallel_Combiner()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ParSetFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ParSetFactory.prototype = ScalaJS.c.scala_collection_generic_ParSetFactory.prototype;
ScalaJS.is.scala_collection_generic_ParSetFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ParSetFactory)))
});
ScalaJS.as.scala_collection_generic_ParSetFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ParSetFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ParSetFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ParSetFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ParSetFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_ParSetFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ParSetFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ParSetFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ParSetFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_ParSetFactory: 0
}, false, "scala.collection.generic.ParSetFactory", ScalaJS.data.scala_collection_generic_GenSetFactory, {
  scala_collection_generic_ParSetFactory: 1,
  scala_collection_generic_GenericParCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ParSetFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_ParSetFactory;
//@ sourceMappingURL=ParSetFactory.js.map
