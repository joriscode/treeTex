/** @constructor */
ScalaJS.c.scala_collection_generic_MutableMapFactory = (function() {
  ScalaJS.c.scala_collection_generic_MapFactory.call(this)
});
ScalaJS.c.scala_collection_generic_MutableMapFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_MapFactory();
ScalaJS.c.scala_collection_generic_MutableMapFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_MutableMapFactory;
ScalaJS.c.scala_collection_generic_MutableMapFactory.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.as.scala_collection_mutable_Builder(this.empty__Lscala_collection_Map())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_MutableMapFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_MutableMapFactory.prototype = ScalaJS.c.scala_collection_generic_MutableMapFactory.prototype;
ScalaJS.is.scala_collection_generic_MutableMapFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_MutableMapFactory)))
});
ScalaJS.as.scala_collection_generic_MutableMapFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_MutableMapFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.MutableMapFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_MutableMapFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_MutableMapFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_MutableMapFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_MutableMapFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.MutableMapFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_MutableMapFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_MutableMapFactory: 0
}, false, "scala.collection.generic.MutableMapFactory", ScalaJS.data.scala_collection_generic_MapFactory, {
  scala_collection_generic_MutableMapFactory: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_MutableMapFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_MutableMapFactory;
//@ sourceMappingURL=MutableMapFactory.js.map
