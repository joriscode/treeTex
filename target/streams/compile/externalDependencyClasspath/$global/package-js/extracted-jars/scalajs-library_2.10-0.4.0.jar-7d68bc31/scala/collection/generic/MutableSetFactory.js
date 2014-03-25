/** @constructor */
ScalaJS.c.scala_collection_generic_MutableSetFactory = (function() {
  ScalaJS.c.scala_collection_generic_SetFactory.call(this)
});
ScalaJS.c.scala_collection_generic_MutableSetFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_SetFactory();
ScalaJS.c.scala_collection_generic_MutableSetFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_MutableSetFactory;
ScalaJS.c.scala_collection_generic_MutableSetFactory.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_GrowingBuilder().init___Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_generic_Growable(this.empty__Lscala_collection_GenTraversable()))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_MutableSetFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_MutableSetFactory.prototype = ScalaJS.c.scala_collection_generic_MutableSetFactory.prototype;
ScalaJS.is.scala_collection_generic_MutableSetFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_MutableSetFactory)))
});
ScalaJS.as.scala_collection_generic_MutableSetFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_MutableSetFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.MutableSetFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_MutableSetFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_MutableSetFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_MutableSetFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_MutableSetFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.MutableSetFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_MutableSetFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_MutableSetFactory: 0
}, false, "scala.collection.generic.MutableSetFactory", ScalaJS.data.scala_collection_generic_SetFactory, {
  scala_collection_generic_MutableSetFactory: 1,
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_MutableSetFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_MutableSetFactory;
//@ sourceMappingURL=MutableSetFactory.js.map
