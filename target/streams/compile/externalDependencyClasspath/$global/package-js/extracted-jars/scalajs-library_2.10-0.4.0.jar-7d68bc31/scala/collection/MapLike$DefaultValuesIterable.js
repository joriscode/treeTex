/** @constructor */
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterable();
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype.constructor = ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable;
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.scala$collection$MapLike$DefaultValuesIterable$$$outer__Lscala_collection_MapLike().valuesIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype.size__I = (function() {
  return this.scala$collection$MapLike$DefaultValuesIterable$$$outer__Lscala_collection_MapLike().size__I()
});
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.scala$collection$MapLike$DefaultValuesIterable$$$outer__Lscala_collection_MapLike().valuesIterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(f)
});
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype.scala$collection$MapLike$DefaultValuesIterable$$$outer__Lscala_collection_MapLike = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype.init___Lscala_collection_MapLike = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterable.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype.scala$collection$MapLike$DefaultValuesIterable$$$outer__ = (function() {
  return this.scala$collection$MapLike$DefaultValuesIterable$$$outer__Lscala_collection_MapLike()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_MapLike$DefaultValuesIterable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_MapLike$DefaultValuesIterable.prototype = ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype;
ScalaJS.is.scala_collection_MapLike$DefaultValuesIterable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_MapLike$DefaultValuesIterable)))
});
ScalaJS.as.scala_collection_MapLike$DefaultValuesIterable = (function(obj) {
  if ((ScalaJS.is.scala_collection_MapLike$DefaultValuesIterable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.MapLike$DefaultValuesIterable")
  }
});
ScalaJS.isArrayOf.scala_collection_MapLike$DefaultValuesIterable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_MapLike$DefaultValuesIterable)))
});
ScalaJS.asArrayOf.scala_collection_MapLike$DefaultValuesIterable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_MapLike$DefaultValuesIterable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.MapLike$DefaultValuesIterable;", depth)
  }
});
ScalaJS.data.scala_collection_MapLike$DefaultValuesIterable = new ScalaJS.ClassTypeData({
  scala_collection_MapLike$DefaultValuesIterable: 0
}, false, "scala.collection.MapLike$DefaultValuesIterable", ScalaJS.data.scala_collection_AbstractIterable, {
  scala_collection_MapLike$DefaultValuesIterable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype.$classData = ScalaJS.data.scala_collection_MapLike$DefaultValuesIterable;
//@ sourceMappingURL=MapLike$DefaultValuesIterable.js.map
