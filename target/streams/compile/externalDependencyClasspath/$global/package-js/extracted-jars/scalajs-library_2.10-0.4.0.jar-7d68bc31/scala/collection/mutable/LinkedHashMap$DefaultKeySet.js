/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet = (function() {
  ScalaJS.c.scala_collection_MapLike$DefaultKeySet.call(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype = new ScalaJS.inheritable.scala_collection_MapLike$DefaultKeySet();
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet;
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype.empty__Lscala_collection_mutable_LinkedHashSet = (function() {
  return ScalaJS.modules.scala_collection_mutable_LinkedHashSet().empty__Lscala_collection_mutable_LinkedHashSet()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype.scala$collection$mutable$LinkedHashMap$DefaultKeySet$$$outer__Lscala_collection_mutable_LinkedHashMap = (function() {
  return ScalaJS.as.scala_collection_mutable_LinkedHashMap(this.$$outer$f)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype.empty__Lscala_collection_Set = (function() {
  return this.empty__Lscala_collection_mutable_LinkedHashSet()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype.empty__Lscala_collection_GenSet = (function() {
  return this.empty__Lscala_collection_mutable_LinkedHashSet()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype.init___Lscala_collection_mutable_LinkedHashMap = (function($$outer) {
  ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.init___Lscala_collection_MapLike.call(this, $$outer);
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype.scala$collection$mutable$LinkedHashMap$DefaultKeySet$$$outer__ = (function() {
  return this.scala$collection$mutable$LinkedHashMap$DefaultKeySet$$$outer__Lscala_collection_mutable_LinkedHashMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap$DefaultKeySet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype = ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype;
ScalaJS.is.scala_collection_mutable_LinkedHashMap$DefaultKeySet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedHashMap$DefaultKeySet)))
});
ScalaJS.as.scala_collection_mutable_LinkedHashMap$DefaultKeySet = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedHashMap$DefaultKeySet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedHashMap$DefaultKeySet")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap$DefaultKeySet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedHashMap$DefaultKeySet)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedHashMap$DefaultKeySet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap$DefaultKeySet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashMap$DefaultKeySet;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedHashMap$DefaultKeySet = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedHashMap$DefaultKeySet: 0
}, false, "scala.collection.mutable.LinkedHashMap$DefaultKeySet", ScalaJS.data.scala_collection_MapLike$DefaultKeySet, {
  scala_collection_mutable_LinkedHashMap$DefaultKeySet: 1,
  scala_collection_MapLike$DefaultKeySet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_AbstractSet: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$DefaultKeySet.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedHashMap$DefaultKeySet;
//@ sourceMappingURL=LinkedHashMap$DefaultKeySet.js.map
