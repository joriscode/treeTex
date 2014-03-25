/** @constructor */
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$collection$TraversableOnce$FlattenOps$$travs$f = null
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps.prototype.constructor = ScalaJS.c.scala_collection_TraversableOnce$FlattenOps;
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps.prototype.flatten__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_TraversableOnce$FlattenOps$$anon$1().init___Lscala_collection_TraversableOnce$FlattenOps(this)
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps.prototype.init___Lscala_collection_TraversableOnce = (function(travs) {
  this.scala$collection$TraversableOnce$FlattenOps$$travs$f = travs;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps.prototype.flatten__ = (function() {
  return this.flatten__Lscala_collection_Iterator()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableOnce$FlattenOps = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableOnce$FlattenOps.prototype = ScalaJS.c.scala_collection_TraversableOnce$FlattenOps.prototype;
ScalaJS.is.scala_collection_TraversableOnce$FlattenOps = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableOnce$FlattenOps)))
});
ScalaJS.as.scala_collection_TraversableOnce$FlattenOps = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableOnce$FlattenOps(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableOnce$FlattenOps")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableOnce$FlattenOps = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableOnce$FlattenOps)))
});
ScalaJS.asArrayOf.scala_collection_TraversableOnce$FlattenOps = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableOnce$FlattenOps(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableOnce$FlattenOps;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableOnce$FlattenOps = new ScalaJS.ClassTypeData({
  scala_collection_TraversableOnce$FlattenOps: 0
}, false, "scala.collection.TraversableOnce$FlattenOps", ScalaJS.data.java_lang_Object, {
  scala_collection_TraversableOnce$FlattenOps: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableOnce$FlattenOps.prototype.$classData = ScalaJS.data.scala_collection_TraversableOnce$FlattenOps;
//@ sourceMappingURL=TraversableOnce$FlattenOps.js.map
