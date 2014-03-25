/** @constructor */
ScalaJS.c.scala_collection_generic_ImmutableMapFactory = (function() {
  ScalaJS.c.scala_collection_generic_MapFactory.call(this)
});
ScalaJS.c.scala_collection_generic_ImmutableMapFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_MapFactory();
ScalaJS.c.scala_collection_generic_ImmutableMapFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_ImmutableMapFactory;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ImmutableMapFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ImmutableMapFactory.prototype = ScalaJS.c.scala_collection_generic_ImmutableMapFactory.prototype;
ScalaJS.is.scala_collection_generic_ImmutableMapFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ImmutableMapFactory)))
});
ScalaJS.as.scala_collection_generic_ImmutableMapFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ImmutableMapFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ImmutableMapFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ImmutableMapFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ImmutableMapFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_ImmutableMapFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ImmutableMapFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ImmutableMapFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ImmutableMapFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_ImmutableMapFactory: 0
}, false, "scala.collection.generic.ImmutableMapFactory", ScalaJS.data.scala_collection_generic_MapFactory, {
  scala_collection_generic_ImmutableMapFactory: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ImmutableMapFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_ImmutableMapFactory;
//@ sourceMappingURL=ImmutableMapFactory.js.map
