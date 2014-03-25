/** @constructor */
ScalaJS.c.scala_Responder = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Responder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Responder.prototype.constructor = ScalaJS.c.scala_Responder;
ScalaJS.c.scala_Responder.prototype.foreach__Lscala_Function1__V = (function(k) {
  this.respond__Lscala_Function1__V(k)
});
ScalaJS.c.scala_Responder.prototype.map__Lscala_Function1__Lscala_Responder = (function(f) {
  return new ScalaJS.c.scala_Responder$$anon$3().init___Lscala_Responder__Lscala_Function1(this, f)
});
ScalaJS.c.scala_Responder.prototype.flatMap__Lscala_Function1__Lscala_Responder = (function(f) {
  return new ScalaJS.c.scala_Responder$$anon$2().init___Lscala_Responder__Lscala_Function1(this, f)
});
ScalaJS.c.scala_Responder.prototype.filter__Lscala_Function1__Lscala_Responder = (function(p) {
  return new ScalaJS.c.scala_Responder$$anon$4().init___Lscala_Responder__Lscala_Function1(this, p)
});
ScalaJS.c.scala_Responder.prototype.toString__T = (function() {
  return "Responder"
});
ScalaJS.c.scala_Responder.prototype.filter__Lscala_Function1__ = (function(p) {
  return this.filter__Lscala_Function1__Lscala_Responder(p)
});
ScalaJS.c.scala_Responder.prototype.flatMap__Lscala_Function1__ = (function(f) {
  return this.flatMap__Lscala_Function1__Lscala_Responder(f)
});
ScalaJS.c.scala_Responder.prototype.map__Lscala_Function1__ = (function(f$2) {
  return this.map__Lscala_Function1__Lscala_Responder(f$2)
});
ScalaJS.c.scala_Responder.prototype.foreach__Lscala_Function1__ = (function(k) {
  return ScalaJS.bV(this.foreach__Lscala_Function1__V(k))
});
ScalaJS.c.scala_Responder.prototype.respond__Lscala_Function1__ = (function(k$2) {
  return ScalaJS.bV(this.respond__Lscala_Function1__V(k$2))
});
/** @constructor */
ScalaJS.inheritable.scala_Responder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Responder.prototype = ScalaJS.c.scala_Responder.prototype;
ScalaJS.is.scala_Responder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Responder)))
});
ScalaJS.as.scala_Responder = (function(obj) {
  if ((ScalaJS.is.scala_Responder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Responder")
  }
});
ScalaJS.isArrayOf.scala_Responder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Responder)))
});
ScalaJS.asArrayOf.scala_Responder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Responder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Responder;", depth)
  }
});
ScalaJS.data.scala_Responder = new ScalaJS.ClassTypeData({
  scala_Responder: 0
}, false, "scala.Responder", ScalaJS.data.java_lang_Object, {
  scala_Responder: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Responder.prototype.$classData = ScalaJS.data.scala_Responder;
//@ sourceMappingURL=Responder.js.map
