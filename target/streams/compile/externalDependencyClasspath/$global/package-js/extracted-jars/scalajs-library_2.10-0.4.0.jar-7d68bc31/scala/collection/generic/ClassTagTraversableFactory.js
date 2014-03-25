/** @constructor */
ScalaJS.c.scala_collection_generic_ClassTagTraversableFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenericClassTagCompanion.call(this)
});
ScalaJS.c.scala_collection_generic_ClassTagTraversableFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenericClassTagCompanion();
ScalaJS.c.scala_collection_generic_ClassTagTraversableFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_ClassTagTraversableFactory;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ClassTagTraversableFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ClassTagTraversableFactory.prototype = ScalaJS.c.scala_collection_generic_ClassTagTraversableFactory.prototype;
ScalaJS.is.scala_collection_generic_ClassTagTraversableFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ClassTagTraversableFactory)))
});
ScalaJS.as.scala_collection_generic_ClassTagTraversableFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ClassTagTraversableFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ClassTagTraversableFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ClassTagTraversableFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ClassTagTraversableFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_ClassTagTraversableFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ClassTagTraversableFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ClassTagTraversableFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ClassTagTraversableFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_ClassTagTraversableFactory: 0
}, false, "scala.collection.generic.ClassTagTraversableFactory", ScalaJS.data.scala_collection_generic_GenericClassTagCompanion, {
  scala_collection_generic_ClassTagTraversableFactory: 1,
  scala_collection_generic_GenericClassTagCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ClassTagTraversableFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_ClassTagTraversableFactory;
//@ sourceMappingURL=ClassTagTraversableFactory.js.map
