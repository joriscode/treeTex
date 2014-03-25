/** @constructor */
ScalaJS.c.scala_util_control_Exception$Finally = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$util$control$Exception$Finally$$body$f = null;
  this.name$1 = null;
  this.scala$util$control$Exception$Described$$$unddesc$1 = null
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_Exception$Finally.prototype.constructor = ScalaJS.c.scala_util_control_Exception$Finally;
ScalaJS.c.scala_util_control_Exception$Finally.prototype.scala$util$control$Exception$Described$$$unddesc__T = (function() {
  return this.scala$util$control$Exception$Described$$$unddesc$1
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.scala$util$control$Exception$Described$$$unddesc$und$eq__T__V = (function(x$1) {
  this.scala$util$control$Exception$Described$$$unddesc$1 = x$1
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.desc__T = (function() {
  return ScalaJS.impls.scala_util_control_Exception$Described$class__desc__Lscala_util_control_Exception$Described__T(this)
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.withDesc__T__Lscala_util_control_Exception$Described = (function(s) {
  return ScalaJS.impls.scala_util_control_Exception$Described$class__withDesc__Lscala_util_control_Exception$Described__T__Lscala_util_control_Exception$Described(this, s)
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_util_control_Exception$Described$class__toString__Lscala_util_control_Exception$Described__T(this)
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.name__T = (function() {
  return this.name$1
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.and__Lscala_Function0__Lscala_util_control_Exception$Finally = (function(other) {
  return new ScalaJS.c.scala_util_control_Exception$Finally().init___Lscala_Function0(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, other$1) {
    return (function() {
      arg$outer.scala$util$control$Exception$Finally$$body$f.apply$mcV$sp__V();
      other$1.apply$mcV$sp__V();
      return ScalaJS.bV(undefined)
    })
  })(this, other)))
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.invoke__V = (function() {
  this.scala$util$control$Exception$Finally$$body$f.apply$mcV$sp__V()
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.init___Lscala_Function0 = (function(body) {
  this.scala$util$control$Exception$Finally$$body$f = body;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_util_control_Exception$Described$class__$init$__Lscala_util_control_Exception$Described__V(this);
  this.name$1 = "Finally";
  return this
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.withDesc__T__ = (function(s) {
  return this.withDesc__T__Lscala_util_control_Exception$Described(s)
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.desc__ = (function() {
  return this.desc__T()
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.scala$util$control$Exception$Described$$$unddesc$und$eq__T__ = (function(x$1) {
  return ScalaJS.bV(this.scala$util$control$Exception$Described$$$unddesc$und$eq__T__V(x$1))
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.scala$util$control$Exception$Described$$$unddesc__ = (function() {
  return this.scala$util$control$Exception$Described$$$unddesc__T()
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.invoke__ = (function() {
  return ScalaJS.bV(this.invoke__V())
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.and__Lscala_Function0__ = (function(other) {
  return this.and__Lscala_Function0__Lscala_util_control_Exception$Finally(other)
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_Exception$Finally = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_Exception$Finally.prototype = ScalaJS.c.scala_util_control_Exception$Finally.prototype;
ScalaJS.is.scala_util_control_Exception$Finally = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_Exception$Finally)))
});
ScalaJS.as.scala_util_control_Exception$Finally = (function(obj) {
  if ((ScalaJS.is.scala_util_control_Exception$Finally(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.Exception$Finally")
  }
});
ScalaJS.isArrayOf.scala_util_control_Exception$Finally = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_Exception$Finally)))
});
ScalaJS.asArrayOf.scala_util_control_Exception$Finally = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_Exception$Finally(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.Exception$Finally;", depth)
  }
});
ScalaJS.data.scala_util_control_Exception$Finally = new ScalaJS.ClassTypeData({
  scala_util_control_Exception$Finally: 0
}, false, "scala.util.control.Exception$Finally", ScalaJS.data.java_lang_Object, {
  scala_util_control_Exception$Finally: 1,
  scala_util_control_Exception$Described: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_Exception$Finally.prototype.$classData = ScalaJS.data.scala_util_control_Exception$Finally;
//@ sourceMappingURL=Exception$Finally.js.map
