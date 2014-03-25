/** @constructor */
ScalaJS.c.scala_collection_IterableViewLike$$anon$8 = (function() {
  ScalaJS.c.scala_collection_IterableViewLike$AbstractTransformed.call(this);
  this.pred$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype = new ScalaJS.inheritable.scala_collection_IterableViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.constructor = ScalaJS.c.scala_collection_IterableViewLike$$anon$8;
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_GenIterableViewLike$TakenWhile$class__iterator__Lscala_collection_GenIterableViewLike$TakenWhile__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$TakenWhile$class__foreach__Lscala_collection_GenTraversableViewLike$TakenWhile__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$TakenWhile$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$TakenWhile__T(this)
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.pred__Lscala_Function1 = (function() {
  return this.pred$2
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.scala$collection$GenIterableViewLike$TakenWhile$$$outer__Lscala_collection_GenIterableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.scala$collection$GenTraversableViewLike$TakenWhile$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.init___Lscala_collection_IterableViewLike__Lscala_Function1 = (function($$outer, p$3) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var pred = p$3;
  this.pred$2 = pred;
  ScalaJS.c.scala_collection_IterableViewLike$AbstractTransformed.prototype.init___Lscala_collection_IterableViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$TakenWhile$class__$init$__Lscala_collection_GenTraversableViewLike$TakenWhile__V(this);
  ScalaJS.impls.scala_collection_GenIterableViewLike$TakenWhile$class__$init$__Lscala_collection_GenIterableViewLike$TakenWhile__V(this);
  return this
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.scala$collection$GenTraversableViewLike$TakenWhile$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$TakenWhile$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.scala$collection$GenIterableViewLike$TakenWhile$$$outer__ = (function() {
  return this.scala$collection$GenIterableViewLike$TakenWhile$$$outer__Lscala_collection_GenIterableViewLike()
});
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.pred__ = (function() {
  return this.pred__Lscala_Function1()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_IterableViewLike$$anon$8 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_IterableViewLike$$anon$8.prototype = ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype;
ScalaJS.is.scala_collection_IterableViewLike$$anon$8 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IterableViewLike$$anon$8)))
});
ScalaJS.as.scala_collection_IterableViewLike$$anon$8 = (function(obj) {
  if ((ScalaJS.is.scala_collection_IterableViewLike$$anon$8(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IterableViewLike$$anon$8")
  }
});
ScalaJS.isArrayOf.scala_collection_IterableViewLike$$anon$8 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IterableViewLike$$anon$8)))
});
ScalaJS.asArrayOf.scala_collection_IterableViewLike$$anon$8 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IterableViewLike$$anon$8(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IterableViewLike$$anon$8;", depth)
  }
});
ScalaJS.data.scala_collection_IterableViewLike$$anon$8 = new ScalaJS.ClassTypeData({
  scala_collection_IterableViewLike$$anon$8: 0
}, false, "scala.collection.IterableViewLike$$anon$8", ScalaJS.data.scala_collection_IterableViewLike$AbstractTransformed, {
  scala_collection_IterableViewLike$$anon$8: 1,
  scala_collection_IterableViewLike$TakenWhile: 1,
  scala_collection_GenIterableViewLike$TakenWhile: 1,
  scala_collection_TraversableViewLike$TakenWhile: 1,
  scala_collection_GenTraversableViewLike$TakenWhile: 1,
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
ScalaJS.c.scala_collection_IterableViewLike$$anon$8.prototype.$classData = ScalaJS.data.scala_collection_IterableViewLike$$anon$8;
//@ sourceMappingURL=IterableViewLike$$anon$8.js.map
