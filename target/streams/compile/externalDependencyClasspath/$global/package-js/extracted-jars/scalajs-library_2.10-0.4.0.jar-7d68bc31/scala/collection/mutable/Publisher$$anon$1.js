/** @constructor */
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1 = (function() {
  ScalaJS.c.scala_collection_mutable_HashMap.call(this)
});
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_mutable_HashMap();
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_Publisher$$anon$1;
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.makeSet__Lscala_collection_mutable_Set = (function() {
  return ScalaJS.impls.scala_collection_mutable_MultiMap$class__makeSet__Lscala_collection_mutable_MultiMap__Lscala_collection_mutable_Set(this)
});
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.addBinding__O__O__Lscala_collection_mutable_MultiMap = (function(key, value) {
  return ScalaJS.impls.scala_collection_mutable_MultiMap$class__addBinding__Lscala_collection_mutable_MultiMap__O__O__Lscala_collection_mutable_MultiMap(this, key, value)
});
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.removeBinding__O__O__Lscala_collection_mutable_MultiMap = (function(key, value) {
  return ScalaJS.impls.scala_collection_mutable_MultiMap$class__removeBinding__Lscala_collection_mutable_MultiMap__O__O__Lscala_collection_mutable_MultiMap(this, key, value)
});
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.entryExists__O__Lscala_Function1__Z = (function(key, p) {
  return ScalaJS.impls.scala_collection_mutable_MultiMap$class__entryExists__Lscala_collection_mutable_MultiMap__O__Lscala_Function1__Z(this, key, p)
});
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.init___Lscala_collection_mutable_Publisher = (function($$outer) {
  ScalaJS.c.scala_collection_mutable_HashMap.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_MultiMap$class__$init$__Lscala_collection_mutable_MultiMap__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.entryExists__O__Lscala_Function1__ = (function(key, p) {
  return ScalaJS.bZ(this.entryExists__O__Lscala_Function1__Z(key, p))
});
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.removeBinding__O__O__ = (function(key$2, value) {
  return this.removeBinding__O__O__Lscala_collection_mutable_MultiMap(key$2, value)
});
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.addBinding__O__O__ = (function(key$3, value$2) {
  return this.addBinding__O__O__Lscala_collection_mutable_MultiMap(key$3, value$2)
});
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.makeSet__ = (function() {
  return this.makeSet__Lscala_collection_mutable_Set()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Publisher$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Publisher$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_Publisher$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Publisher$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_Publisher$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Publisher$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Publisher$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Publisher$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Publisher$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Publisher$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Publisher$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Publisher$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Publisher$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Publisher$$anon$1: 0
}, false, "scala.collection.mutable.Publisher$$anon$1", ScalaJS.data.scala_collection_mutable_HashMap, {
  scala_collection_mutable_Publisher$$anon$1: 1,
  scala_collection_mutable_MultiMap: 1,
  scala_collection_mutable_HashMap: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_mutable_HashTable: 1,
  scala_collection_mutable_HashTable$HashUtils: 1,
  scala_collection_mutable_AbstractMap: 1,
  scala_collection_mutable_Map: 1,
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_mutable_Publisher$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_Publisher$$anon$1;
//@ sourceMappingURL=Publisher$$anon$1.js.map
