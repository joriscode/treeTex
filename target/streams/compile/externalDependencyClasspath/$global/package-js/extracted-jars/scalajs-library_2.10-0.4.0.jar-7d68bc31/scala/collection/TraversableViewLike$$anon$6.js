/** @constructor */
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6 = (function() {
  ScalaJS.c.scala_collection_TraversableViewLike$AbstractTransformed.call(this);
  this.endpoints$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype = new ScalaJS.inheritable.scala_collection_TraversableViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.constructor = ScalaJS.c.scala_collection_TraversableViewLike$$anon$6;
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.from__I = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__from__Lscala_collection_GenTraversableViewLike$Sliced__I(this)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.until__I = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__until__Lscala_collection_GenTraversableViewLike$Sliced__I(this)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__foreach__Lscala_collection_GenTraversableViewLike$Sliced__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$Sliced__T(this)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.endpoints__Lscala_collection_generic_SliceInterval = (function() {
  return this.endpoints$2
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.scala$collection$GenTraversableViewLike$Sliced$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.init___Lscala_collection_TraversableViewLike__Lscala_collection_generic_SliceInterval = (function($$outer, _endpoints$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var endpoints = _endpoints$1;
  this.endpoints$2 = endpoints;
  ScalaJS.c.scala_collection_TraversableViewLike$AbstractTransformed.prototype.init___Lscala_collection_TraversableViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__$init$__Lscala_collection_GenTraversableViewLike$Sliced__V(this);
  return this
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.until__ = (function() {
  return ScalaJS.bI(this.until__I())
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.from__ = (function() {
  return ScalaJS.bI(this.from__I())
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.scala$collection$GenTraversableViewLike$Sliced$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$Sliced$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.endpoints__ = (function() {
  return this.endpoints__Lscala_collection_generic_SliceInterval()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableViewLike$$anon$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableViewLike$$anon$6.prototype = ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype;
ScalaJS.is.scala_collection_TraversableViewLike$$anon$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableViewLike$$anon$6)))
});
ScalaJS.as.scala_collection_TraversableViewLike$$anon$6 = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableViewLike$$anon$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableViewLike$$anon$6")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableViewLike$$anon$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableViewLike$$anon$6)))
});
ScalaJS.asArrayOf.scala_collection_TraversableViewLike$$anon$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableViewLike$$anon$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableViewLike$$anon$6;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableViewLike$$anon$6 = new ScalaJS.ClassTypeData({
  scala_collection_TraversableViewLike$$anon$6: 0
}, false, "scala.collection.TraversableViewLike$$anon$6", ScalaJS.data.scala_collection_TraversableViewLike$AbstractTransformed, {
  scala_collection_TraversableViewLike$$anon$6: 1,
  scala_collection_TraversableViewLike$Sliced: 1,
  scala_collection_GenTraversableViewLike$Sliced: 1,
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
ScalaJS.c.scala_collection_TraversableViewLike$$anon$6.prototype.$classData = ScalaJS.data.scala_collection_TraversableViewLike$$anon$6;
//@ sourceMappingURL=TraversableViewLike$$anon$6.js.map