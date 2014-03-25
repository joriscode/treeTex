/** @constructor */
ScalaJS.c.scala_collection_immutable_Range$Partial = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.f$1 = null
});
ScalaJS.c.scala_collection_immutable_Range$Partial.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Range$Partial.prototype.constructor = ScalaJS.c.scala_collection_immutable_Range$Partial;
ScalaJS.c.scala_collection_immutable_Range$Partial.prototype.by__O__O = (function(x$2) {
  return this.f$1.apply__O__O(x$2)
});
ScalaJS.c.scala_collection_immutable_Range$Partial.prototype.init___Lscala_Function1 = (function(f) {
  this.f$1 = f;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_Range$Partial.prototype.by__O__ = (function(x) {
  return this.by__O__O(x)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Range$Partial = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Range$Partial.prototype = ScalaJS.c.scala_collection_immutable_Range$Partial.prototype;
ScalaJS.is.scala_collection_immutable_Range$Partial = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Range$Partial)))
});
ScalaJS.as.scala_collection_immutable_Range$Partial = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Range$Partial(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Range$Partial")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Range$Partial = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Range$Partial)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Range$Partial = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Range$Partial(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Range$Partial;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Range$Partial = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Range$Partial: 0
}, false, "scala.collection.immutable.Range$Partial", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Range$Partial: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Range$Partial.prototype.$classData = ScalaJS.data.scala_collection_immutable_Range$Partial;
//@ sourceMappingURL=Range$Partial.js.map
