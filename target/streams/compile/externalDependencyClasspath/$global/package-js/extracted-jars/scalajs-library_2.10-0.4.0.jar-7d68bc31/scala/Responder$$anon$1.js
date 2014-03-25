/** @constructor */
ScalaJS.c.scala_Responder$$anon$1 = (function() {
  ScalaJS.c.scala_Responder.call(this);
  this.x$1$2 = null
});
ScalaJS.c.scala_Responder$$anon$1.prototype = new ScalaJS.inheritable.scala_Responder();
ScalaJS.c.scala_Responder$$anon$1.prototype.constructor = ScalaJS.c.scala_Responder$$anon$1;
ScalaJS.c.scala_Responder$$anon$1.prototype.respond__Lscala_Function1__V = (function(k$3) {
  k$3.apply__O__O(this.x$1$2)
});
ScalaJS.c.scala_Responder$$anon$1.prototype.init___O = (function(x$1) {
  this.x$1$2 = x$1;
  ScalaJS.c.scala_Responder.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Responder$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Responder$$anon$1.prototype = ScalaJS.c.scala_Responder$$anon$1.prototype;
ScalaJS.is.scala_Responder$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Responder$$anon$1)))
});
ScalaJS.as.scala_Responder$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_Responder$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Responder$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_Responder$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Responder$$anon$1)))
});
ScalaJS.asArrayOf.scala_Responder$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Responder$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Responder$$anon$1;", depth)
  }
});
ScalaJS.data.scala_Responder$$anon$1 = new ScalaJS.ClassTypeData({
  scala_Responder$$anon$1: 0
}, false, "scala.Responder$$anon$1", ScalaJS.data.scala_Responder, {
  scala_Responder$$anon$1: 1,
  scala_Responder: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Responder$$anon$1.prototype.$classData = ScalaJS.data.scala_Responder$$anon$1;
//@ sourceMappingURL=Responder$$anon$1.js.map
