/** @constructor */
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1 = (function() {
  ScalaJS.c.scala_collection_TraversableViewLike$AbstractTransformed.call(this);
  this.forced$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_TraversableViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_TraversableViewLike$$anon$1;
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Forced$class__foreach__Lscala_collection_GenTraversableViewLike$Forced__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Forced$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$Forced__T(this)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype.forced__Lscala_collection_GenSeq = (function() {
  return this.forced$2
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype.scala$collection$GenTraversableViewLike$Forced$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype.init___Lscala_collection_TraversableViewLike__Lscala_Function0 = (function($$outer, xs$2) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var forced = ScalaJS.as.scala_collection_GenSeq(xs$2.apply__O());
  this.forced$2 = forced;
  ScalaJS.c.scala_collection_TraversableViewLike$AbstractTransformed.prototype.init___Lscala_collection_TraversableViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Forced$class__$init$__Lscala_collection_GenTraversableViewLike$Forced__V(this);
  return this
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype.scala$collection$GenTraversableViewLike$Forced$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$Forced$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype.forced__ = (function() {
  return this.forced__Lscala_collection_GenSeq()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableViewLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableViewLike$$anon$1.prototype = ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype;
ScalaJS.is.scala_collection_TraversableViewLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableViewLike$$anon$1)))
});
ScalaJS.as.scala_collection_TraversableViewLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableViewLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableViewLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableViewLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableViewLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_TraversableViewLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableViewLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableViewLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableViewLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_TraversableViewLike$$anon$1: 0
}, false, "scala.collection.TraversableViewLike$$anon$1", ScalaJS.data.scala_collection_TraversableViewLike$AbstractTransformed, {
  scala_collection_TraversableViewLike$$anon$1: 1,
  scala_collection_TraversableViewLike$Forced: 1,
  scala_collection_GenTraversableViewLike$Forced: 1,
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
ScalaJS.c.scala_collection_TraversableViewLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_TraversableViewLike$$anon$1;
//@ sourceMappingURL=TraversableViewLike$$anon$1.js.map
