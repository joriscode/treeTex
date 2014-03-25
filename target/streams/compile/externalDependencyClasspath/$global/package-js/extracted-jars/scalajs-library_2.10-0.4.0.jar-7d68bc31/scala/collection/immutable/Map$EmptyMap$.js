/** @constructor */
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$ = (function() {
  ScalaJS.c.scala_collection_immutable_AbstractMap.call(this)
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype = new ScalaJS.inheritable.scala_collection_immutable_AbstractMap();
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Map$EmptyMap$;
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.size__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.get__O__Lscala_Option = (function(key) {
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.updated__O__O__Lscala_collection_immutable_Map = (function(key, value) {
  return new ScalaJS.c.scala_collection_immutable_Map$Map1().init___O__O(key, value)
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map = (function(kv) {
  return this.updated__O__O__Lscala_collection_immutable_Map(kv.$$und1__O(), kv.$$und2__O())
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.$$minus__O__Lscala_collection_immutable_Map = (function(key) {
  return this
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_Map$EmptyMap()
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_Map(key)
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_Map(elem)
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_Map(key)
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(kv)
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(kv)
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_Map(key, value)
});
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_Map(key, value)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Map$EmptyMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Map$EmptyMap$.prototype = ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype;
ScalaJS.is.scala_collection_immutable_Map$EmptyMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Map$EmptyMap$)))
});
ScalaJS.as.scala_collection_immutable_Map$EmptyMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Map$EmptyMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Map$EmptyMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Map$EmptyMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Map$EmptyMap$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Map$EmptyMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Map$EmptyMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Map$EmptyMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Map$EmptyMap$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Map$EmptyMap$: 0
}, false, "scala.collection.immutable.Map$EmptyMap$", ScalaJS.data.scala_collection_immutable_AbstractMap, {
  scala_collection_immutable_Map$EmptyMap$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_AbstractMap: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
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
ScalaJS.c.scala_collection_immutable_Map$EmptyMap$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Map$EmptyMap$;
ScalaJS.moduleInstances.scala_collection_immutable_Map$EmptyMap = undefined;
ScalaJS.modules.scala_collection_immutable_Map$EmptyMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Map$EmptyMap)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Map$EmptyMap = new ScalaJS.c.scala_collection_immutable_Map$EmptyMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Map$EmptyMap
});
//@ sourceMappingURL=Map$EmptyMap$.js.map
