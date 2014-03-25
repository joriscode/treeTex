/** @constructor */
ScalaJS.c.scala_PartialFunction$Lifted = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.pf$2 = null
});
ScalaJS.c.scala_PartialFunction$Lifted.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_PartialFunction$Lifted.prototype.constructor = ScalaJS.c.scala_PartialFunction$Lifted;
ScalaJS.c.scala_PartialFunction$Lifted.prototype.pf__Lscala_PartialFunction = (function() {
  return this.pf$2
});
ScalaJS.c.scala_PartialFunction$Lifted.prototype.apply__O__Lscala_Option = (function(x) {
  var z = this.pf__Lscala_PartialFunction().applyOrElse__O__Lscala_Function1__O(x, ScalaJS.modules.scala_PartialFunction().scala$PartialFunction$$checkFallback__Lscala_PartialFunction());
  if ((!ScalaJS.modules.scala_PartialFunction().scala$PartialFunction$$fallbackOccurred__O__Z(z))) {
    return new ScalaJS.c.scala_Some().init___O(z)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_PartialFunction$Lifted.prototype.apply__O__O = (function(v1) {
  return this.apply__O__Lscala_Option(v1)
});
ScalaJS.c.scala_PartialFunction$Lifted.prototype.init___Lscala_PartialFunction = (function(pf) {
  this.pf$2 = pf;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_PartialFunction$Lifted.prototype.pf__ = (function() {
  return this.pf__Lscala_PartialFunction()
});
/** @constructor */
ScalaJS.inheritable.scala_PartialFunction$Lifted = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_PartialFunction$Lifted.prototype = ScalaJS.c.scala_PartialFunction$Lifted.prototype;
ScalaJS.is.scala_PartialFunction$Lifted = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_PartialFunction$Lifted)))
});
ScalaJS.as.scala_PartialFunction$Lifted = (function(obj) {
  if ((ScalaJS.is.scala_PartialFunction$Lifted(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.PartialFunction$Lifted")
  }
});
ScalaJS.isArrayOf.scala_PartialFunction$Lifted = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_PartialFunction$Lifted)))
});
ScalaJS.asArrayOf.scala_PartialFunction$Lifted = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_PartialFunction$Lifted(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.PartialFunction$Lifted;", depth)
  }
});
ScalaJS.data.scala_PartialFunction$Lifted = new ScalaJS.ClassTypeData({
  scala_PartialFunction$Lifted: 0
}, false, "scala.PartialFunction$Lifted", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_PartialFunction$Lifted: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_PartialFunction$Lifted.prototype.$classData = ScalaJS.data.scala_PartialFunction$Lifted;
//@ sourceMappingURL=PartialFunction$Lifted.js.map
