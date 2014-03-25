/** @constructor */
ScalaJS.c.scala_collection_immutable_Map$Map1 = (function() {
  ScalaJS.c.scala_collection_immutable_AbstractMap.call(this);
  this.key1$5 = null;
  this.value1$5 = null
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype = new ScalaJS.inheritable.scala_collection_immutable_AbstractMap();
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.constructor = ScalaJS.c.scala_collection_immutable_Map$Map1;
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.size__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.get__O__Lscala_Option = (function(key) {
  if (ScalaJS.anyEqEq(key, this.key1$5)) {
    return new ScalaJS.c.scala_Some().init___O(this.value1$5)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().apply__Lscala_collection_Seq__Lscala_collection_Iterator(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [new ScalaJS.c.scala_Tuple2().init___O__O(this.key1$5, this.value1$5)]), 1)))
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.updated__O__O__Lscala_collection_immutable_Map = (function(key, value) {
  if (ScalaJS.anyEqEq(key, this.key1$5)) {
    return new ScalaJS.c.scala_collection_immutable_Map$Map1().init___O__O(this.key1$5, value)
  } else {
    return new ScalaJS.c.scala_collection_immutable_Map$Map2().init___O__O__O__O(this.key1$5, this.value1$5, key, value)
  }
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map = (function(kv) {
  return this.updated__O__O__Lscala_collection_immutable_Map(kv.$$und1__O(), kv.$$und2__O())
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.$$minus__O__Lscala_collection_immutable_Map = (function(key) {
  if (ScalaJS.anyEqEq(key, this.key1$5)) {
    return ScalaJS.modules.scala_collection_immutable_Map().empty__Lscala_collection_immutable_Map()
  } else {
    return this
  }
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.foreach__Lscala_Function1__V = (function(f) {
  f.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(this.key1$5, this.value1$5))
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_Map(key)
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_Map(elem)
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_Map(key)
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(kv)
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(kv)
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_Map(key, value)
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_Map(key, value)
});
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.init___O__O = (function(key1, value1) {
  this.key1$5 = key1;
  this.value1$5 = value1;
  ScalaJS.c.scala_collection_immutable_AbstractMap.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Map$Map1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Map$Map1.prototype = ScalaJS.c.scala_collection_immutable_Map$Map1.prototype;
ScalaJS.is.scala_collection_immutable_Map$Map1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Map$Map1)))
});
ScalaJS.as.scala_collection_immutable_Map$Map1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Map$Map1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Map$Map1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Map$Map1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Map$Map1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Map$Map1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Map$Map1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Map$Map1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Map$Map1: 0
}, false, "scala.collection.immutable.Map$Map1", ScalaJS.data.scala_collection_immutable_AbstractMap, {
  scala_collection_immutable_Map$Map1: 1,
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
ScalaJS.c.scala_collection_immutable_Map$Map1.prototype.$classData = ScalaJS.data.scala_collection_immutable_Map$Map1;
//@ sourceMappingURL=Map$Map1.js.map
