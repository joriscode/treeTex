/** @constructor */
ScalaJS.c.scala_Array$$anon$2 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.t$1$1 = null
});
ScalaJS.c.scala_Array$$anon$2.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Array$$anon$2.prototype.constructor = ScalaJS.c.scala_Array$$anon$2;
ScalaJS.c.scala_Array$$anon$2.prototype.apply__O__Lscala_collection_mutable_ArrayBuilder = (function(from$2) {
  return ScalaJS.modules.scala_collection_mutable_ArrayBuilder().make__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayBuilder(this.t$1$1)
});
ScalaJS.c.scala_Array$$anon$2.prototype.apply__Lscala_collection_mutable_ArrayBuilder = (function() {
  return ScalaJS.modules.scala_collection_mutable_ArrayBuilder().make__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayBuilder(this.t$1$1)
});
ScalaJS.c.scala_Array$$anon$2.prototype.apply__Lscala_collection_mutable_Builder = (function() {
  return this.apply__Lscala_collection_mutable_ArrayBuilder()
});
ScalaJS.c.scala_Array$$anon$2.prototype.apply__O__Lscala_collection_mutable_Builder = (function(from) {
  return this.apply__O__Lscala_collection_mutable_ArrayBuilder(from)
});
ScalaJS.c.scala_Array$$anon$2.prototype.init___Lscala_reflect_ClassTag = (function(t$1) {
  this.t$1$1 = t$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_Array$$anon$2.prototype.apply__ = (function() {
  return this.apply__Lscala_collection_mutable_ArrayBuilder()
});
ScalaJS.c.scala_Array$$anon$2.prototype.apply__O__ = (function(from) {
  return this.apply__O__Lscala_collection_mutable_ArrayBuilder(from)
});
/** @constructor */
ScalaJS.inheritable.scala_Array$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Array$$anon$2.prototype = ScalaJS.c.scala_Array$$anon$2.prototype;
ScalaJS.is.scala_Array$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Array$$anon$2)))
});
ScalaJS.as.scala_Array$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_Array$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Array$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_Array$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Array$$anon$2)))
});
ScalaJS.asArrayOf.scala_Array$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Array$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Array$$anon$2;", depth)
  }
});
ScalaJS.data.scala_Array$$anon$2 = new ScalaJS.ClassTypeData({
  scala_Array$$anon$2: 0
}, false, "scala.Array$$anon$2", ScalaJS.data.java_lang_Object, {
  scala_Array$$anon$2: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Array$$anon$2.prototype.$classData = ScalaJS.data.scala_Array$$anon$2;
//@ sourceMappingURL=Array$$anon$2.js.map
