/** @constructor */
ScalaJS.c.scala_collection_MapLike$DefaultKeySet = (function() {
  ScalaJS.c.scala_collection_AbstractSet.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype = new ScalaJS.inheritable.scala_collection_AbstractSet();
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.constructor = ScalaJS.c.scala_collection_MapLike$DefaultKeySet;
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.contains__O__Z = (function(key) {
  return this.scala$collection$MapLike$DefaultKeySet$$$outer__Lscala_collection_MapLike().contains__O__Z(key)
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.scala$collection$MapLike$DefaultKeySet$$$outer__Lscala_collection_MapLike().keysIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return ScalaJS.as.scala_collection_SetLike(ScalaJS.modules.scala_collection_Set().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(this).$$plus__O__Lscala_collection_Set(elem)
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return ScalaJS.as.scala_collection_SetLike(ScalaJS.modules.scala_collection_Set().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(this).$$minus__O__Lscala_collection_Set(elem)
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.size__I = (function() {
  return this.scala$collection$MapLike$DefaultKeySet$$$outer__Lscala_collection_MapLike().size__I()
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.scala$collection$MapLike$DefaultKeySet$$$outer__Lscala_collection_MapLike().keysIterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(f)
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.scala$collection$MapLike$DefaultKeySet$$$outer__Lscala_collection_MapLike = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_Set(elem)
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_Set(elem)
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_Set(elem)
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.init___Lscala_collection_MapLike = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractSet.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.scala$collection$MapLike$DefaultKeySet$$$outer__ = (function() {
  return this.scala$collection$MapLike$DefaultKeySet$$$outer__Lscala_collection_MapLike()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_MapLike$DefaultKeySet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_MapLike$DefaultKeySet.prototype = ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype;
ScalaJS.is.scala_collection_MapLike$DefaultKeySet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_MapLike$DefaultKeySet)))
});
ScalaJS.as.scala_collection_MapLike$DefaultKeySet = (function(obj) {
  if ((ScalaJS.is.scala_collection_MapLike$DefaultKeySet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.MapLike$DefaultKeySet")
  }
});
ScalaJS.isArrayOf.scala_collection_MapLike$DefaultKeySet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_MapLike$DefaultKeySet)))
});
ScalaJS.asArrayOf.scala_collection_MapLike$DefaultKeySet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_MapLike$DefaultKeySet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.MapLike$DefaultKeySet;", depth)
  }
});
ScalaJS.data.scala_collection_MapLike$DefaultKeySet = new ScalaJS.ClassTypeData({
  scala_collection_MapLike$DefaultKeySet: 0
}, false, "scala.collection.MapLike$DefaultKeySet", ScalaJS.data.scala_collection_AbstractSet, {
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
ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.$classData = ScalaJS.data.scala_collection_MapLike$DefaultKeySet;
//@ sourceMappingURL=MapLike$DefaultKeySet.js.map
