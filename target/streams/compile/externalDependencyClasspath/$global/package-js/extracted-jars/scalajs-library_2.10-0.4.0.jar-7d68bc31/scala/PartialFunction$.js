/** @constructor */
ScalaJS.c.scala_PartialFunction$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$PartialFunction$$fallback$undpf$f = null;
  this.scala$PartialFunction$$constFalse$f = null;
  this.empty$undpf$1 = null
});
ScalaJS.c.scala_PartialFunction$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_PartialFunction$.prototype.constructor = ScalaJS.c.scala_PartialFunction$;
ScalaJS.c.scala_PartialFunction$.prototype.scala$PartialFunction$$checkFallback__Lscala_PartialFunction = (function() {
  return this.scala$PartialFunction$$fallback$undpf$f
});
ScalaJS.c.scala_PartialFunction$.prototype.scala$PartialFunction$$fallbackOccurred__O__Z = (function(x) {
  return (this.scala$PartialFunction$$fallback$undpf$f === x)
});
ScalaJS.c.scala_PartialFunction$.prototype.unlifted__Lscala_Function1__Lscala_PartialFunction = (function(f) {
  var x1 = f;
  if (ScalaJS.is.scala_PartialFunction$Lifted(x1)) {
    var x2 = ScalaJS.as.scala_PartialFunction$Lifted(x1);
    return x2.pf__Lscala_PartialFunction()
  };
  return new ScalaJS.c.scala_PartialFunction$Unlifted().init___Lscala_Function1(x1)
});
ScalaJS.c.scala_PartialFunction$.prototype.apply__Lscala_Function1__Lscala_PartialFunction = (function(f) {
  return new ScalaJS.c.scala_PartialFunction$$anonfun$apply$1().init___Lscala_Function1(f)
});
ScalaJS.c.scala_PartialFunction$.prototype.empty__Lscala_PartialFunction = (function() {
  return this.empty$undpf$1
});
ScalaJS.c.scala_PartialFunction$.prototype.cond__O__Lscala_PartialFunction__Z = (function(x, pf) {
  return ScalaJS.uZ(pf.applyOrElse__O__Lscala_Function1__O(x, this.scala$PartialFunction$$constFalse$f))
});
ScalaJS.c.scala_PartialFunction$.prototype.condOpt__O__Lscala_PartialFunction__Lscala_Option = (function(x, pf) {
  return ScalaJS.as.scala_Option(pf.lift__Lscala_Function1().apply__O__O(x))
});
ScalaJS.c.scala_PartialFunction$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_PartialFunction = this;
  this.scala$PartialFunction$$fallback$undpf$f = new ScalaJS.c.scala_PartialFunction$$anonfun$1().init___();
  this.scala$PartialFunction$$constFalse$f = new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.bZ(false)
    })
  })());
  this.empty$undpf$1 = new ScalaJS.c.scala_PartialFunction$$anon$1().init___();
  return this
});
ScalaJS.c.scala_PartialFunction$.prototype.condOpt__O__Lscala_PartialFunction__ = (function(x, pf) {
  return this.condOpt__O__Lscala_PartialFunction__Lscala_Option(x, pf)
});
ScalaJS.c.scala_PartialFunction$.prototype.cond__O__Lscala_PartialFunction__ = (function(x$2, pf$2) {
  return ScalaJS.bZ(this.cond__O__Lscala_PartialFunction__Z(x$2, pf$2))
});
ScalaJS.c.scala_PartialFunction$.prototype.empty__ = (function() {
  return this.empty__Lscala_PartialFunction()
});
ScalaJS.c.scala_PartialFunction$.prototype.apply__Lscala_Function1__ = (function(f) {
  return this.apply__Lscala_Function1__Lscala_PartialFunction(f)
});
ScalaJS.c.scala_PartialFunction$.prototype.unlifted__Lscala_Function1__ = (function(f$2) {
  return this.unlifted__Lscala_Function1__Lscala_PartialFunction(f$2)
});
ScalaJS.c.scala_PartialFunction$.prototype.scala$PartialFunction$$fallbackOccurred__O__ = (function(x$3) {
  return ScalaJS.bZ(this.scala$PartialFunction$$fallbackOccurred__O__Z(x$3))
});
ScalaJS.c.scala_PartialFunction$.prototype.scala$PartialFunction$$checkFallback__ = (function() {
  return this.scala$PartialFunction$$checkFallback__Lscala_PartialFunction()
});
/** @constructor */
ScalaJS.inheritable.scala_PartialFunction$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_PartialFunction$.prototype = ScalaJS.c.scala_PartialFunction$.prototype;
ScalaJS.is.scala_PartialFunction$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_PartialFunction$)))
});
ScalaJS.as.scala_PartialFunction$ = (function(obj) {
  if ((ScalaJS.is.scala_PartialFunction$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.PartialFunction")
  }
});
ScalaJS.isArrayOf.scala_PartialFunction$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_PartialFunction$)))
});
ScalaJS.asArrayOf.scala_PartialFunction$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_PartialFunction$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.PartialFunction;", depth)
  }
});
ScalaJS.data.scala_PartialFunction$ = new ScalaJS.ClassTypeData({
  scala_PartialFunction$: 0
}, false, "scala.PartialFunction$", ScalaJS.data.java_lang_Object, {
  scala_PartialFunction$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_PartialFunction$.prototype.$classData = ScalaJS.data.scala_PartialFunction$;
ScalaJS.moduleInstances.scala_PartialFunction = undefined;
ScalaJS.modules.scala_PartialFunction = (function() {
  if ((!ScalaJS.moduleInstances.scala_PartialFunction)) {
    ScalaJS.moduleInstances.scala_PartialFunction = new ScalaJS.c.scala_PartialFunction$().init___()
  };
  return ScalaJS.moduleInstances.scala_PartialFunction
});
//@ sourceMappingURL=PartialFunction$.js.map
