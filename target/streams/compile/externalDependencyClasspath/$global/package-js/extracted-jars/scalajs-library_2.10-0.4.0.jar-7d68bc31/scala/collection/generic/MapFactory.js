/** @constructor */
ScalaJS.c.scala_collection_generic_MapFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenMapFactory.call(this)
});
ScalaJS.c.scala_collection_generic_MapFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenMapFactory();
ScalaJS.c.scala_collection_generic_MapFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_MapFactory;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_MapFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_MapFactory.prototype = ScalaJS.c.scala_collection_generic_MapFactory.prototype;
ScalaJS.is.scala_collection_generic_MapFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_MapFactory)))
});
ScalaJS.as.scala_collection_generic_MapFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_MapFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.MapFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_MapFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_MapFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_MapFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_MapFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.MapFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_MapFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_MapFactory: 0
}, false, "scala.collection.generic.MapFactory", ScalaJS.data.scala_collection_generic_GenMapFactory, {
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_MapFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_MapFactory;
//@ sourceMappingURL=MapFactory.js.map
