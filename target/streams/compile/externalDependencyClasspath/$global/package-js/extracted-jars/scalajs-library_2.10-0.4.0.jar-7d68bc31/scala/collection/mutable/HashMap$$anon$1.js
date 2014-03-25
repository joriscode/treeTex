/** @constructor */
ScalaJS.c.scala_collection_mutable_HashMap$$anon$1 = (function() {
  ScalaJS.c.scala_collection_MapLike$DefaultKeySet.call(this);
  this.$$outer$5 = null
});
ScalaJS.c.scala_collection_mutable_HashMap$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_MapLike$DefaultKeySet();
ScalaJS.c.scala_collection_mutable_HashMap$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashMap$$anon$1;
ScalaJS.c.scala_collection_mutable_HashMap$$anon$1.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.$$outer$5.foreachEntry__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(f$2) {
    return (function(e) {
      return f$2.apply__O__O(e.key__O())
    })
  })(f)))
});
ScalaJS.c.scala_collection_mutable_HashMap$$anon$1.prototype.init___Lscala_collection_mutable_HashMap = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$5 = $$outer
  };
  ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.init___Lscala_collection_MapLike.call(this, $$outer);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashMap$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashMap$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_HashMap$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_HashMap$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashMap$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_HashMap$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashMap$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashMap$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashMap$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashMap$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashMap$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashMap$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashMap$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashMap$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashMap$$anon$1: 0
}, false, "scala.collection.mutable.HashMap$$anon$1", ScalaJS.data.scala_collection_MapLike$DefaultKeySet, {
  scala_collection_mutable_HashMap$$anon$1: 1,
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
ScalaJS.c.scala_collection_mutable_HashMap$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashMap$$anon$1;
//@ sourceMappingURL=HashMap$$anon$1.js.map
