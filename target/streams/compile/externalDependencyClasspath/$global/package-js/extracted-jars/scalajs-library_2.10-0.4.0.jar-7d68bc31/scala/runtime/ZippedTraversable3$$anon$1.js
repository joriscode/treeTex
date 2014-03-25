/** @constructor */
ScalaJS.c.scala_runtime_ZippedTraversable3$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractTraversable.call(this);
  this.zz$1$2 = null
});
ScalaJS.c.scala_runtime_ZippedTraversable3$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractTraversable();
ScalaJS.c.scala_runtime_ZippedTraversable3$$anon$1.prototype.constructor = ScalaJS.c.scala_runtime_ZippedTraversable3$$anon$1;
ScalaJS.c.scala_runtime_ZippedTraversable3$$anon$1.prototype.foreach__Lscala_Function1__V = (function(f$7) {
  this.zz$1$2.foreach__Lscala_Function3__V(ScalaJS.modules.scala_Function().untupled__Lscala_Function1__Lscala_Function3(f$7))
});
ScalaJS.c.scala_runtime_ZippedTraversable3$$anon$1.prototype.init___Lscala_runtime_ZippedTraversable3 = (function(zz$1) {
  this.zz$1$2 = zz$1;
  ScalaJS.c.scala_collection_AbstractTraversable.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ZippedTraversable3$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ZippedTraversable3$$anon$1.prototype = ScalaJS.c.scala_runtime_ZippedTraversable3$$anon$1.prototype;
ScalaJS.is.scala_runtime_ZippedTraversable3$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ZippedTraversable3$$anon$1)))
});
ScalaJS.as.scala_runtime_ZippedTraversable3$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ZippedTraversable3$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ZippedTraversable3$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_runtime_ZippedTraversable3$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ZippedTraversable3$$anon$1)))
});
ScalaJS.asArrayOf.scala_runtime_ZippedTraversable3$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ZippedTraversable3$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ZippedTraversable3$$anon$1;", depth)
  }
});
ScalaJS.data.scala_runtime_ZippedTraversable3$$anon$1 = new ScalaJS.ClassTypeData({
  scala_runtime_ZippedTraversable3$$anon$1: 0
}, false, "scala.runtime.ZippedTraversable3$$anon$1", ScalaJS.data.scala_collection_AbstractTraversable, {
  scala_runtime_ZippedTraversable3$$anon$1: 1,
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
ScalaJS.c.scala_runtime_ZippedTraversable3$$anon$1.prototype.$classData = ScalaJS.data.scala_runtime_ZippedTraversable3$$anon$1;
//@ sourceMappingURL=ZippedTraversable3$$anon$1.js.map
