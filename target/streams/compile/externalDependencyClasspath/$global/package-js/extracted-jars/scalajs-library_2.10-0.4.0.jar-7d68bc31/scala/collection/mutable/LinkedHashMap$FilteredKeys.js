/** @constructor */
ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys = (function() {
  ScalaJS.c.scala_collection_MapLike$FilteredKeys.call(this)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype = new ScalaJS.inheritable.scala_collection_MapLike$FilteredKeys();
ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype.constructor = ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys;
ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype.empty__Lscala_collection_mutable_LinkedHashMap = (function() {
  return ScalaJS.modules.scala_collection_mutable_LinkedHashMap().empty__Lscala_collection_mutable_LinkedHashMap()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype.scala$collection$mutable$LinkedHashMap$FilteredKeys$$$outer__Lscala_collection_mutable_LinkedHashMap = (function() {
  return ScalaJS.as.scala_collection_mutable_LinkedHashMap(this.$$outer$f)
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_LinkedHashMap()
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype.init___Lscala_collection_mutable_LinkedHashMap__Lscala_Function1 = (function($$outer, p) {
  ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.init___Lscala_collection_MapLike__Lscala_Function1.call(this, $$outer, p);
  return this
});
ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype.scala$collection$mutable$LinkedHashMap$FilteredKeys$$$outer__ = (function() {
  return this.scala$collection$mutable$LinkedHashMap$FilteredKeys$$$outer__Lscala_collection_mutable_LinkedHashMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap$FilteredKeys = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype = ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype;
ScalaJS.is.scala_collection_mutable_LinkedHashMap$FilteredKeys = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_LinkedHashMap$FilteredKeys)))
});
ScalaJS.as.scala_collection_mutable_LinkedHashMap$FilteredKeys = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_LinkedHashMap$FilteredKeys(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.LinkedHashMap$FilteredKeys")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap$FilteredKeys = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_LinkedHashMap$FilteredKeys)))
});
ScalaJS.asArrayOf.scala_collection_mutable_LinkedHashMap$FilteredKeys = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_LinkedHashMap$FilteredKeys(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashMap$FilteredKeys;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_LinkedHashMap$FilteredKeys = new ScalaJS.ClassTypeData({
  scala_collection_mutable_LinkedHashMap$FilteredKeys: 0
}, false, "scala.collection.mutable.LinkedHashMap$FilteredKeys", ScalaJS.data.scala_collection_MapLike$FilteredKeys, {
  scala_collection_mutable_LinkedHashMap$FilteredKeys: 1,
  scala_collection_MapLike$FilteredKeys: 1,
  scala_collection_DefaultMap: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
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
ScalaJS.c.scala_collection_mutable_LinkedHashMap$FilteredKeys.prototype.$classData = ScalaJS.data.scala_collection_mutable_LinkedHashMap$FilteredKeys;
//@ sourceMappingURL=LinkedHashMap$FilteredKeys.js.map
