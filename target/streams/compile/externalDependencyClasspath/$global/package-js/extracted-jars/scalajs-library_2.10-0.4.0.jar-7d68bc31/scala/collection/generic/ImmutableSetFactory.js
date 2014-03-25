/** @constructor */
ScalaJS.c.scala_collection_generic_ImmutableSetFactory = (function() {
  ScalaJS.c.scala_collection_generic_SetFactory.call(this)
});
ScalaJS.c.scala_collection_generic_ImmutableSetFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_SetFactory();
ScalaJS.c.scala_collection_generic_ImmutableSetFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_ImmutableSetFactory;
ScalaJS.c.scala_collection_generic_ImmutableSetFactory.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_SetBuilder().init___Lscala_collection_Set(ScalaJS.as.scala_collection_Set(this.empty__Lscala_collection_GenTraversable()))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_ImmutableSetFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_ImmutableSetFactory.prototype = ScalaJS.c.scala_collection_generic_ImmutableSetFactory.prototype;
ScalaJS.is.scala_collection_generic_ImmutableSetFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_ImmutableSetFactory)))
});
ScalaJS.as.scala_collection_generic_ImmutableSetFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_ImmutableSetFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.ImmutableSetFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_ImmutableSetFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_ImmutableSetFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_ImmutableSetFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_ImmutableSetFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.ImmutableSetFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_ImmutableSetFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_ImmutableSetFactory: 0
}, false, "scala.collection.generic.ImmutableSetFactory", ScalaJS.data.scala_collection_generic_SetFactory, {
  scala_collection_generic_ImmutableSetFactory: 1,
  scala_collection_generic_SetFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSetFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_ImmutableSetFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_ImmutableSetFactory;
//@ sourceMappingURL=ImmutableSetFactory.js.map
