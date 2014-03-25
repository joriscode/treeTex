/** @constructor */
ScalaJS.c.scala_runtime_BoxedUnit$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.UNIT$1 = null;
  this.TYPE$1 = null
});
ScalaJS.c.scala_runtime_BoxedUnit$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_BoxedUnit$.prototype.constructor = ScalaJS.c.scala_runtime_BoxedUnit$;
ScalaJS.c.scala_runtime_BoxedUnit$.prototype.UNIT__Lscala_runtime_BoxedUnit = (function() {
  return this.UNIT$1
});
ScalaJS.c.scala_runtime_BoxedUnit$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.scala_runtime_BoxedUnit$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_runtime_BoxedUnit = this;
  this.UNIT$1 = new ScalaJS.c.scala_runtime_BoxedUnit().init___();
  this.TYPE$1 = ScalaJS.modules.java_lang_Void().TYPE__Ljava_lang_Class();
  return this
});
ScalaJS.c.scala_runtime_BoxedUnit$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
ScalaJS.c.scala_runtime_BoxedUnit$.prototype.UNIT__ = (function() {
  return this.UNIT__Lscala_runtime_BoxedUnit()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_BoxedUnit$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_BoxedUnit$.prototype = ScalaJS.c.scala_runtime_BoxedUnit$.prototype;
ScalaJS.is.scala_runtime_BoxedUnit$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_BoxedUnit$)))
});
ScalaJS.as.scala_runtime_BoxedUnit$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_BoxedUnit$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.BoxedUnit")
  }
});
ScalaJS.isArrayOf.scala_runtime_BoxedUnit$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_BoxedUnit$)))
});
ScalaJS.asArrayOf.scala_runtime_BoxedUnit$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_BoxedUnit$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.BoxedUnit;", depth)
  }
});
ScalaJS.data.scala_runtime_BoxedUnit$ = new ScalaJS.ClassTypeData({
  scala_runtime_BoxedUnit$: 0
}, false, "scala.runtime.BoxedUnit$", ScalaJS.data.java_lang_Object, {
  scala_runtime_BoxedUnit$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_BoxedUnit$.prototype.$classData = ScalaJS.data.scala_runtime_BoxedUnit$;
ScalaJS.moduleInstances.scala_runtime_BoxedUnit = undefined;
ScalaJS.modules.scala_runtime_BoxedUnit = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_BoxedUnit)) {
    ScalaJS.moduleInstances.scala_runtime_BoxedUnit = new ScalaJS.c.scala_runtime_BoxedUnit$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_BoxedUnit
});
//@ sourceMappingURL=BoxedUnit$.js.map
