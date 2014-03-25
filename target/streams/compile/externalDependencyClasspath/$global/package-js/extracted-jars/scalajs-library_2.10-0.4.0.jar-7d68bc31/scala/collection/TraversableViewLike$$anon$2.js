/** @constructor */
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2 = (function() {
  ScalaJS.c.scala_collection_TraversableViewLike$AbstractTransformed.call(this);
  this.rest$2 = null;
  this.$$outer$2 = null
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype = new ScalaJS.inheritable.scala_collection_TraversableViewLike$AbstractTransformed();
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype.constructor = ScalaJS.c.scala_collection_TraversableViewLike$$anon$2;
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Appended$class__foreach__Lscala_collection_GenTraversableViewLike$Appended__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$Appended$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$Appended__T(this)
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype.rest__Lscala_collection_GenTraversable = (function() {
  return this.rest$2
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype.scala$collection$GenTraversableViewLike$Appended$$$outer__Lscala_collection_GenTraversableViewLike = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype.init___Lscala_collection_TraversableViewLike__Lscala_collection_GenTraversable = (function($$outer, that$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  var rest = that$1;
  this.rest$2 = rest;
  ScalaJS.c.scala_collection_TraversableViewLike$AbstractTransformed.prototype.init___Lscala_collection_TraversableViewLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$Appended$class__$init$__Lscala_collection_GenTraversableViewLike$Appended__V(this);
  return this
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype.scala$collection$GenTraversableViewLike$Appended$$$outer__ = (function() {
  return this.scala$collection$GenTraversableViewLike$Appended$$$outer__Lscala_collection_GenTraversableViewLike()
});
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype.rest__ = (function() {
  return this.rest__Lscala_collection_GenTraversable()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableViewLike$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableViewLike$$anon$2.prototype = ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype;
ScalaJS.is.scala_collection_TraversableViewLike$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableViewLike$$anon$2)))
});
ScalaJS.as.scala_collection_TraversableViewLike$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableViewLike$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableViewLike$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableViewLike$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableViewLike$$anon$2)))
});
ScalaJS.asArrayOf.scala_collection_TraversableViewLike$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableViewLike$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableViewLike$$anon$2;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableViewLike$$anon$2 = new ScalaJS.ClassTypeData({
  scala_collection_TraversableViewLike$$anon$2: 0
}, false, "scala.collection.TraversableViewLike$$anon$2", ScalaJS.data.scala_collection_TraversableViewLike$AbstractTransformed, {
  scala_collection_TraversableViewLike$$anon$2: 1,
  scala_collection_TraversableViewLike$Appended: 1,
  scala_collection_GenTraversableViewLike$Appended: 1,
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
ScalaJS.c.scala_collection_TraversableViewLike$$anon$2.prototype.$classData = ScalaJS.data.scala_collection_TraversableViewLike$$anon$2;
//@ sourceMappingURL=TraversableViewLike$$anon$2.js.map
