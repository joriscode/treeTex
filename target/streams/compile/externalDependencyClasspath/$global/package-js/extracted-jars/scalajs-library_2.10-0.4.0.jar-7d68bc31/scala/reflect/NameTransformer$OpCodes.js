/** @constructor */
ScalaJS.c.scala_reflect_NameTransformer$OpCodes = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.op$1 = 0;
  this.code$1 = null;
  this.next$1 = null
});
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype.constructor = ScalaJS.c.scala_reflect_NameTransformer$OpCodes;
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype.op__C = (function() {
  return this.op$1
});
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype.code__T = (function() {
  return this.code$1
});
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype.next__Lscala_reflect_NameTransformer$OpCodes = (function() {
  return this.next$1
});
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype.init___C__T__Lscala_reflect_NameTransformer$OpCodes = (function(op, code, next) {
  this.op$1 = op;
  this.code$1 = code;
  this.next$1 = next;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype.next__ = (function() {
  return this.next__Lscala_reflect_NameTransformer$OpCodes()
});
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype.code__ = (function() {
  return this.code__T()
});
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype.op__ = (function() {
  return ScalaJS.bC(this.op__C())
});
/** @constructor */
ScalaJS.inheritable.scala_reflect_NameTransformer$OpCodes = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_reflect_NameTransformer$OpCodes.prototype = ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype;
ScalaJS.is.scala_reflect_NameTransformer$OpCodes = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_NameTransformer$OpCodes)))
});
ScalaJS.as.scala_reflect_NameTransformer$OpCodes = (function(obj) {
  if ((ScalaJS.is.scala_reflect_NameTransformer$OpCodes(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.NameTransformer$OpCodes")
  }
});
ScalaJS.isArrayOf.scala_reflect_NameTransformer$OpCodes = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_NameTransformer$OpCodes)))
});
ScalaJS.asArrayOf.scala_reflect_NameTransformer$OpCodes = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_NameTransformer$OpCodes(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.NameTransformer$OpCodes;", depth)
  }
});
ScalaJS.data.scala_reflect_NameTransformer$OpCodes = new ScalaJS.ClassTypeData({
  scala_reflect_NameTransformer$OpCodes: 0
}, false, "scala.reflect.NameTransformer$OpCodes", ScalaJS.data.java_lang_Object, {
  scala_reflect_NameTransformer$OpCodes: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_reflect_NameTransformer$OpCodes.prototype.$classData = ScalaJS.data.scala_reflect_NameTransformer$OpCodes;
//@ sourceMappingURL=NameTransformer$OpCodes.js.map
