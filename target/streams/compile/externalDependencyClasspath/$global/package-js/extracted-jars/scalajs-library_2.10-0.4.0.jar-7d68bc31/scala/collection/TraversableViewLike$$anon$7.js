/** @constructor */
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7 = (function() {
  ScalaJS.c.scala_collection_TraversableViewLike$AbstractTransformed.call(this);
  this.pred$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype = new ScalaJS.inheritable.scala_collection_TraversableViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype.constructor = ScalaJS.c.scala_collection_TraversableViewLike$$anon$7;
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$DroppedWhile$class__foreach__Lscala_collection_GenTraversableViewLike$DroppedWhile__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$DroppedWhile$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$DroppedWhile__T(this)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype.pred__Lscala_Function1 = (function() {
  return this.pred$2
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype.scala$collection$GenTraversableViewLike$DroppedWhile$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype.init___Lscala_collection_TraversableViewLike__Lscala_Function1 = (function($$outer, p$2) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var pred = p$2;
  this.pred$2 = pred;
  ScalaJS.c.scala_collection_TraversableViewLike$AbstractTransformed.prototype.init___Lscala_collection_TraversableViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$DroppedWhile$class__$init$__Lscala_collection_GenTraversableViewLike$DroppedWhile__V(this);
  return this
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype.scala$collection$GenTraversableViewLike$DroppedWhile$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$DroppedWhile$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype.pred__ = (function() {
  return this.pred__Lscala_Function1()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableViewLike$$anon$7 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableViewLike$$anon$7.prototype = ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype;
ScalaJS.is.scala_collection_TraversableViewLike$$anon$7 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableViewLike$$anon$7)))
});
ScalaJS.as.scala_collection_TraversableViewLike$$anon$7 = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableViewLike$$anon$7(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableViewLike$$anon$7")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableViewLike$$anon$7 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableViewLike$$anon$7)))
});
ScalaJS.asArrayOf.scala_collection_TraversableViewLike$$anon$7 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableViewLike$$anon$7(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableViewLike$$anon$7;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableViewLike$$anon$7 = new ScalaJS.ClassTypeData({
  scala_collection_TraversableViewLike$$anon$7: 0
}, false, "scala.collection.TraversableViewLike$$anon$7", ScalaJS.data.scala_collection_TraversableViewLike$AbstractTransformed, {
  scala_collection_TraversableViewLike$$anon$7: 1,
  scala_collection_TraversableViewLike$DroppedWhile: 1,
  scala_collection_GenTraversableViewLike$DroppedWhile: 1,
  scala_collection_TraversableViewLike$AbstractTransformed: 1,
  scala_collection_TraversableViewLike$Transformed: 1,
  scala_collection_GenTraversableViewLike$Transformed: 1,
  scala_collection_TraversableView: 1,
  scala_collection_GenTraversableView: 1,
  scala_collection_TraversableViewLike: 1,
  scala_collection_GenTraversableViewLike: 1,
  scala_collection_ViewMkString: 1,
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
ScalaJS.c.scala_collection_TraversableViewLike$$anon$7.prototype.$classData = ScalaJS.data.scala_collection_TraversableViewLike$$anon$7;
//@ sourceMappingURL=TraversableViewLike$$anon$7.js.map