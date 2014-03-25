/** @constructor */
ScalaJS.c.scala_collection_generic_SetFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenSetFactory.call(this)
});
ScalaJS.c.scala_collection_generic_SetFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenSetFactory();
ScalaJS.c.scala_collection_generic_SetFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_SetFactory;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_SetFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_SetFactory.prototype = ScalaJS.c.scala_collection_generic_SetFactory.prototype;
ScalaJS.is.scala_collection_generic_SetFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_SetFactory)))
});
ScalaJS.as.scala_collection_generic_SetFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_SetFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.SetFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_SetFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_SetFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_SetFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_SetFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.SetFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_SetFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_SetFactory: 0
}, false, "scala.collection.generic.SetFactory", ScalaJS.data.scala_collection_generic_GenSetFactory, {
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_SetFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_SetFactory;
//@ sourceMappingURL=SetFactory.js.map
