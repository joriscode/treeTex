/** @constructor */
ScalaJS.c.scala_collection_immutable_ListMap = (function() {
  ScalaJS.c.scala_collection_immutable_AbstractMap.call(this)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype = new ScalaJS.inheritable.scala_collection_immutable_AbstractMap();
ScalaJS.c.scala_collection_immutable_ListMap.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListMap;
ScalaJS.c.scala_collection_immutable_ListMap.prototype.empty__Lscala_collection_immutable_ListMap = (function() {
  return ScalaJS.modules.scala_collection_immutable_ListMap().empty__Lscala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.size__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.get__O__Lscala_Option = (function(key) {
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.updated__O__O__Lscala_collection_immutable_ListMap = (function(key, value) {
  return new ScalaJS.c.scala_collection_immutable_ListMap$Node().init___Lscala_collection_immutable_ListMap__O__O(this, key, value)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_ListMap = (function(kv) {
  return this.updated__O__O__Lscala_collection_immutable_ListMap(kv.$$und1__O(), kv.$$und2__O())
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_ListMap = (function(elem1, elem2, elems) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_ListMap(elem1).$$plus__Lscala_Tuple2__Lscala_collection_immutable_ListMap(elem2).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_ListMap(elems)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_ListMap = (function(xs) {
  var x$1 = ScalaJS.as.scala_collection_immutable_ListMap(this.repr__O());
  return ScalaJS.as.scala_collection_immutable_ListMap(xs.seq__Lscala_collection_TraversableOnce().$$div$colon__O__Lscala_Function2__O(x$1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$2, x$3) {
      return x$2.$$plus__Lscala_Tuple2__Lscala_collection_immutable_ListMap(x$3)
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$minus__O__Lscala_collection_immutable_ListMap = (function(key) {
  return this
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_immutable_ListMap$$anon$1().init___Lscala_collection_immutable_ListMap(this).toList__Lscala_collection_immutable_List().reverseIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.key__O = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("empty map")
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.value__O = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("empty map")
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.tail__Lscala_collection_immutable_ListMap = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("empty map")
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.keySet__Lscala_collection_Set = (function() {
  return this.keySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.mapValues__Lscala_Function1__Lscala_collection_Map = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map(p)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_Map = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map(p)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_ListMap(key)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_ListMap(elem)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_ListMap(key)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_ListMap(xs)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_ListMap(xs)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_ListMap(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_Map = (function(elem1, elem2, elems) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_ListMap(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_ListMap(kv)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_ListMap(kv)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_ListMap(kv)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_ListMap(key, value)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_ListMap(key, value)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.updated__O__O__Lscala_collection_immutable_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_ListMap(key, value)
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.empty__Lscala_collection_immutable_Map = (function() {
  return this.empty__Lscala_collection_immutable_ListMap()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.value__ = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_immutable_ListMap.prototype.key__ = (function() {
  return this.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListMap.prototype = ScalaJS.c.scala_collection_immutable_ListMap.prototype;
ScalaJS.is.scala_collection_immutable_ListMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListMap)))
});
ScalaJS.as.scala_collection_immutable_ListMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListMap)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListMap = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListMap: 0
}, false, "scala.collection.immutable.ListMap", ScalaJS.data.scala_collection_immutable_AbstractMap, {
  scala_collection_immutable_ListMap: 1,
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
ScalaJS.c.scala_collection_immutable_ListMap.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListMap;
//@ sourceMappingURL=ListMap.js.map
