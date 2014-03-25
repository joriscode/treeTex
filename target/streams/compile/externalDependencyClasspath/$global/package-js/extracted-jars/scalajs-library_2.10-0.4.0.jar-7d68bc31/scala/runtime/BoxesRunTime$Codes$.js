/** @constructor */
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.CHAR$1 = 0;
  this.BYTE$1 = 0;
  this.SHORT$1 = 0;
  this.INT$1 = 0;
  this.LONG$1 = 0;
  this.FLOAT$1 = 0;
  this.DOUBLE$1 = 0;
  this.OTHER$1 = 0
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.constructor = ScalaJS.c.scala_runtime_BoxesRunTime$Codes$;
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.CHAR__I = (function() {
  return this.CHAR$1
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.BYTE__I = (function() {
  return this.BYTE$1
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.SHORT__I = (function() {
  return this.SHORT$1
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.INT__I = (function() {
  return this.INT$1
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.LONG__I = (function() {
  return this.LONG$1
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.FLOAT__I = (function() {
  return this.FLOAT$1
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.DOUBLE__I = (function() {
  return this.DOUBLE$1
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.OTHER__I = (function() {
  return this.OTHER$1
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_runtime_BoxesRunTime$Codes = this;
  this.CHAR$1 = 0;
  this.BYTE$1 = 1;
  this.SHORT$1 = 2;
  this.INT$1 = 3;
  this.LONG$1 = 4;
  this.FLOAT$1 = 5;
  this.DOUBLE$1 = 6;
  this.OTHER$1 = 7;
  return this
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.OTHER__ = (function() {
  return ScalaJS.bI(this.OTHER__I())
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.DOUBLE__ = (function() {
  return ScalaJS.bI(this.DOUBLE__I())
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.FLOAT__ = (function() {
  return ScalaJS.bI(this.FLOAT__I())
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.LONG__ = (function() {
  return ScalaJS.bI(this.LONG__I())
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.INT__ = (function() {
  return ScalaJS.bI(this.INT__I())
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.SHORT__ = (function() {
  return ScalaJS.bI(this.SHORT__I())
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.BYTE__ = (function() {
  return ScalaJS.bI(this.BYTE__I())
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.CHAR__ = (function() {
  return ScalaJS.bI(this.CHAR__I())
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_BoxesRunTime$Codes$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_BoxesRunTime$Codes$.prototype = ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype;
ScalaJS.is.scala_runtime_BoxesRunTime$Codes$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_BoxesRunTime$Codes$)))
});
ScalaJS.as.scala_runtime_BoxesRunTime$Codes$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_BoxesRunTime$Codes$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.BoxesRunTime$Codes")
  }
});
ScalaJS.isArrayOf.scala_runtime_BoxesRunTime$Codes$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_BoxesRunTime$Codes$)))
});
ScalaJS.asArrayOf.scala_runtime_BoxesRunTime$Codes$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_BoxesRunTime$Codes$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.BoxesRunTime$Codes;", depth)
  }
});
ScalaJS.data.scala_runtime_BoxesRunTime$Codes$ = new ScalaJS.ClassTypeData({
  scala_runtime_BoxesRunTime$Codes$: 0
}, false, "scala.runtime.BoxesRunTime$Codes$", ScalaJS.data.java_lang_Object, {
  scala_runtime_BoxesRunTime$Codes$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_BoxesRunTime$Codes$.prototype.$classData = ScalaJS.data.scala_runtime_BoxesRunTime$Codes$;
ScalaJS.moduleInstances.scala_runtime_BoxesRunTime$Codes = undefined;
ScalaJS.modules.scala_runtime_BoxesRunTime$Codes = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_BoxesRunTime$Codes)) {
    ScalaJS.moduleInstances.scala_runtime_BoxesRunTime$Codes = new ScalaJS.c.scala_runtime_BoxesRunTime$Codes$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_BoxesRunTime$Codes
});
//@ sourceMappingURL=BoxesRunTime$Codes$.js.map
