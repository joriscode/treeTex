/** @constructor */
ScalaJS.c.scala_collection_IterableView$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_IterableView$$anon$1;
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype.apply__Lscala_collection_TraversableView__Lscala_collection_TraversableView$NoBuilder = (function(from) {
  return new ScalaJS.c.scala_collection_TraversableView$NoBuilder().init___()
});
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype.apply__Lscala_collection_TraversableView$NoBuilder = (function() {
  return new ScalaJS.c.scala_collection_TraversableView$NoBuilder().init___()
});
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.apply__Lscala_collection_TraversableView$NoBuilder()
});
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__Lscala_collection_TraversableView__Lscala_collection_TraversableView$NoBuilder(ScalaJS.as.scala_collection_TraversableView(from))
});
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_TraversableView$NoBuilder()
});
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype.apply__Lscala_collection_TraversableView__ = (function(from) {
  return this.apply__Lscala_collection_TraversableView__Lscala_collection_TraversableView$NoBuilder(from)
});
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype.apply__O__ = (function(from$2) {
  return this.apply__O__Lscala_collection_mutable_Builder(from$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_IterableView$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_IterableView$$anon$1.prototype = ScalaJS.c.scala_collection_IterableView$$anon$1.prototype;
ScalaJS.is.scala_collection_IterableView$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IterableView$$anon$1)))
});
ScalaJS.as.scala_collection_IterableView$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_IterableView$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IterableView$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_IterableView$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IterableView$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_IterableView$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IterableView$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IterableView$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_IterableView$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_IterableView$$anon$1: 0
}, false, "scala.collection.IterableView$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_collection_IterableView$$anon$1: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_IterableView$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_IterableView$$anon$1;
//@ sourceMappingURL=IterableView$$anon$1.js.map
