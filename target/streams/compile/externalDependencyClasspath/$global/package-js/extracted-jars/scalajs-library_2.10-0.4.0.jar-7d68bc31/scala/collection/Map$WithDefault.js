/** @constructor */
ScalaJS.c.scala_collection_Map$WithDefault = (function() {
  ScalaJS.c.scala_collection_AbstractMap.call(this);
  this.underlying$4 = null;
  this.d$4 = null
});
ScalaJS.c.scala_collection_Map$WithDefault.prototype = new ScalaJS.inheritable.scala_collection_AbstractMap();
ScalaJS.c.scala_collection_Map$WithDefault.prototype.constructor = ScalaJS.c.scala_collection_Map$WithDefault;
ScalaJS.c.scala_collection_Map$WithDefault.prototype.size__I = (function() {
  return this.underlying$4.size__I()
});
ScalaJS.c.scala_collection_Map$WithDefault.prototype.get__O__Lscala_Option = (function(key) {
  return this.underlying$4.get__O__Lscala_Option(key)
});
ScalaJS.c.scala_collection_Map$WithDefault.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.underlying$4.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_Map$WithDefault.prototype.$default__O__O = (function(key) {
  return this.d$4.apply__O__O(key)
});
ScalaJS.c.scala_collection_Map$WithDefault.prototype.init___Lscala_collection_Map__Lscala_Function1 = (function(underlying, d) {
  this.underlying$4 = underlying;
  this.d$4 = d;
  ScalaJS.c.scala_collection_AbstractMap.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_Map$WithDefault = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_Map$WithDefault.prototype = ScalaJS.c.scala_collection_Map$WithDefault.prototype;
ScalaJS.is.scala_collection_Map$WithDefault = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Map$WithDefault)))
});
ScalaJS.as.scala_collection_Map$WithDefault = (function(obj) {
  if ((ScalaJS.is.scala_collection_Map$WithDefault(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Map$WithDefault")
  }
});
ScalaJS.isArrayOf.scala_collection_Map$WithDefault = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Map$WithDefault)))
});
ScalaJS.asArrayOf.scala_collection_Map$WithDefault = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Map$WithDefault(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Map$WithDefault;", depth)
  }
});
ScalaJS.data.scala_collection_Map$WithDefault = new ScalaJS.ClassTypeData({
  scala_collection_Map$WithDefault: 0
}, false, "scala.collection.Map$WithDefault", ScalaJS.data.scala_collection_AbstractMap, {
  scala_collection_Map$WithDefault: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_collection_Map$WithDefault.prototype.$classData = ScalaJS.data.scala_collection_Map$WithDefault;
//@ sourceMappingURL=Map$WithDefault.js.map
