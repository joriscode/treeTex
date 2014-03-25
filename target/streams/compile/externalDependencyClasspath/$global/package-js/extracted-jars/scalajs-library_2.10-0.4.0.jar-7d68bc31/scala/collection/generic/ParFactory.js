/** @constructor */
ScalaJS.c.scala_collection_generic_ParFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory.call(this)
});
ScalaJS.c.scala_collection_generic_ParFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory();
ScalaJS.c.scala_collection_generic_ParFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_ParFactory;
ScalaJS.c.scala_collection_generic_ParFactory.prototype.newCombiner__ = (function() {
  return this.newCombiner__Lscala_collection_parallel_Combiner()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ParFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ParFactory.prototype = ScalaJS.c.scala_collection_generic_ParFactory.prototype;
ScalaJS.is.scala_collection_generic_ParFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ParFactory)))
});
ScalaJS.as.scala_collection_generic_ParFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ParFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ParFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ParFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ParFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_ParFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ParFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ParFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ParFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_ParFactory: 0
}, false, "scala.collection.generic.ParFactory", ScalaJS.data.scala_collection_generic_GenTraversableFactory, {
  scala_collection_generic_ParFactory: 1,
  scala_collection_generic_GenericParCompanion: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ParFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_ParFactory;
//@ sourceMappingURL=ParFactory.js.map
