/** @constructor */
ScalaJS.c.scala_collection_IterableViewLike$$anon$9 = (function() {
  ScalaJS.c.scala_collection_IterableViewLike$AbstractTransformed.call(this);
  this.other$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype = new ScalaJS.inheritable.scala_collection_IterableViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype.constructor = ScalaJS.c.scala_collection_IterableViewLike$$anon$9;
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$Zipped$class__iterator__Lscala_collection_GenIterableViewLike$Zipped__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$Zipped$class__viewIdentifier__Lscala_collection_GenIterableViewLike$Zipped__T(this)
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype.other__Lscala_collection_GenIterable = (function() {
  return this.other$2
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype.scala$collection$GenIterableViewLike$Zipped$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype.init___Lscala_collection_IterableViewLike__Lscala_collection_GenIterable = (function($$outer, that$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var other = that$1;
  this.other$2 = other;
  ScalaJS.c.scala_collection_IterableViewLike$AbstractTransformed.prototype.init___Lscala_collection_IterableViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenIterableViewLike$Zipped$class__$init$__Lscala_collection_GenIterableViewLike$Zipped__V(this);
  return this
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype.scala$collection$GenIterableViewLike$Zipped$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$Zipped$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype.other__ = (function() {
  return this.other__Lscala_collection_GenIterable()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_IterableViewLike$$anon$9 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_IterableViewLike$$anon$9.prototype = ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype;
ScalaJS.is.scala_collection_IterableViewLike$$anon$9 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IterableViewLike$$anon$9)))
});
ScalaJS.as.scala_collection_IterableViewLike$$anon$9 = (function(obj) {
  if ((ScalaJS.is.scala_collection_IterableViewLike$$anon$9(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IterableViewLike$$anon$9")
  }
});
ScalaJS.isArrayOf.scala_collection_IterableViewLike$$anon$9 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IterableViewLike$$anon$9)))
});
ScalaJS.asArrayOf.scala_collection_IterableViewLike$$anon$9 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IterableViewLike$$anon$9(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IterableViewLike$$anon$9;", depth)
  }
});
ScalaJS.data.scala_collection_IterableViewLike$$anon$9 = new ScalaJS.ClassTypeData({
  scala_collection_IterableViewLike$$anon$9: 0
}, false, "scala.collection.IterableViewLike$$anon$9", ScalaJS.data.scala_collection_IterableViewLike$AbstractTransformed, {
  scala_collection_IterableViewLike$$anon$9: 1,
  scala_collection_IterableViewLike$Zipped: 1,
  scala_collection_GenIterableViewLike$Zipped: 1,
  scala_collection_IterableViewLike$AbstractTransformed: 1,
  scala_collection_IterableViewLike$Transformed: 1,
  scala_collection_GenIterableViewLike$Transformed: 1,
  scala_collection_IterableView: 1,
  scala_collection_GenIterableView: 1,
  scala_collection_IterableViewLike: 1,
  scala_collection_GenIterableViewLike: 1,
  scala_collection_TraversableViewLike$Transformed: 1,
  scala_collection_GenTraversableViewLike$Transformed: 1,
  scala_collection_TraversableView: 1,
  scala_collection_GenTraversableView: 1,
  scala_collection_TraversableViewLike: 1,
  scala_collection_GenTraversableViewLike: 1,
  scala_collection_ViewMkString: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
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
ScalaJS.c.scala_collection_IterableViewLike$$anon$9.prototype.$classData = ScalaJS.data.scala_collection_IterableViewLike$$anon$9;
//@ sourceMappingURL=IterableViewLike$$anon$9.js.map
