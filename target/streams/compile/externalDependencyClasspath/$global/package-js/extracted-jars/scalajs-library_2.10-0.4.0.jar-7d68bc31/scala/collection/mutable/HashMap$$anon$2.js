/** @constructor */
ScalaJS.c.scala_collection_mutable_HashMap$$anon$2 = (function() {
  ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.call(this);
  this.$$outer$4 = null
});
ScalaJS.c.scala_collection_mutable_HashMap$$anon$2.prototype = new ScalaJS.inheritable.scala_collection_MapLike$DefaultValuesIterable();
ScalaJS.c.scala_collection_mutable_HashMap$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashMap$$anon$2;
ScalaJS.c.scala_collection_mutable_HashMap$$anon$2.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.$$outer$4.foreachEntry__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(f$3) {
    return (function(e) {
      return f$3.apply__O__O(e.value__O())
    })
  })(f)))
});
ScalaJS.c.scala_collection_mutable_HashMap$$anon$2.prototype.init___Lscala_collection_mutable_HashMap = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$4 = $$outer
  };
  ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable.prototype.init___Lscala_collection_MapLike.call(this, $$outer);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashMap$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashMap$$anon$2.prototype = ScalaJS.c.scala_collection_mutable_HashMap$$anon$2.prototype;
ScalaJS.is.scala_collection_mutable_HashMap$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashMap$$anon$2)))
});
ScalaJS.as.scala_collection_mutable_HashMap$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashMap$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashMap$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashMap$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashMap$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashMap$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashMap$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashMap$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashMap$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashMap$$anon$2: 0
}, false, "scala.collection.mutable.HashMap$$anon$2", ScalaJS.data.scala_collection_MapLike$DefaultValuesIterable, {
  scala_collection_mutable_HashMap$$anon$2: 1,
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
ScalaJS.c.scala_collection_mutable_HashMap$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashMap$$anon$2;
//@ sourceMappingURL=HashMap$$anon$2.js.map
