/** @constructor */
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenericOrderedCompanion.call(this)
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenericOrderedCompanion();
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_OrderedTraversableFactory;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_OrderedTraversableFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_OrderedTraversableFactory.prototype = ScalaJS.c.scala_collection_generic_OrderedTraversableFactory.prototype;
ScalaJS.is.scala_collection_generic_OrderedTraversableFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_OrderedTraversableFactory)))
});
ScalaJS.as.scala_collection_generic_OrderedTraversableFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_OrderedTraversableFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.OrderedTraversableFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_OrderedTraversableFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_OrderedTraversableFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_OrderedTraversableFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_OrderedTraversableFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.OrderedTraversableFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_OrderedTraversableFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_OrderedTraversableFactory: 0
}, false, "scala.collection.generic.OrderedTraversableFactory", ScalaJS.data.scala_collection_generic_GenericOrderedCompanion, {
  scala_collection_generic_OrderedTraversableFactory: 1,
  scala_collection_generic_GenericOrderedCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_OrderedTraversableFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_OrderedTraversableFactory;
//@ sourceMappingURL=OrderedTraversableFactory.js.map
