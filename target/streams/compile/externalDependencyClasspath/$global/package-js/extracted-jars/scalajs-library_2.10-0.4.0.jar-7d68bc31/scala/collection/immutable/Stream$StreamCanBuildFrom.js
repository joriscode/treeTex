/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$StreamCanBuildFrom = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.call(this)
});
ScalaJS.c.scala_collection_immutable_Stream$StreamCanBuildFrom.prototype = new ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom();
ScalaJS.c.scala_collection_immutable_Stream$StreamCanBuildFrom.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$StreamCanBuildFrom;
ScalaJS.c.scala_collection_immutable_Stream$StreamCanBuildFrom.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom.prototype.init___Lscala_collection_generic_GenTraversableFactory.call(this, ScalaJS.modules.scala_collection_immutable_Stream());
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$StreamCanBuildFrom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$StreamCanBuildFrom.prototype = ScalaJS.c.scala_collection_immutable_Stream$StreamCanBuildFrom.prototype;
ScalaJS.is.scala_collection_immutable_Stream$StreamCanBuildFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$StreamCanBuildFrom)))
});
ScalaJS.as.scala_collection_immutable_Stream$StreamCanBuildFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$StreamCanBuildFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream$StreamCanBuildFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$StreamCanBuildFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$StreamCanBuildFrom)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$StreamCanBuildFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$StreamCanBuildFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream$StreamCanBuildFrom;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$StreamCanBuildFrom = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$StreamCanBuildFrom: 0
}, false, "scala.collection.immutable.Stream$StreamCanBuildFrom", ScalaJS.data.scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom, {
  scala_collection_immutable_Stream$StreamCanBuildFrom: 1,
  scala_collection_generic_GenTraversableFactory$GenericCanBuildFrom: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Stream$StreamCanBuildFrom.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$StreamCanBuildFrom;
//@ sourceMappingURL=Stream$StreamCanBuildFrom.js.map
