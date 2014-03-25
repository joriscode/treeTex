/** @constructor */
ScalaJS.c.java_lang_Runtime$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.currentRuntime$1 = null
});
ScalaJS.c.java_lang_Runtime$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Runtime$.prototype.constructor = ScalaJS.c.java_lang_Runtime$;
ScalaJS.c.java_lang_Runtime$.prototype.currentRuntime__p1__Ljava_lang_Runtime = (function() {
  return this.currentRuntime$1
});
ScalaJS.c.java_lang_Runtime$.prototype.getRuntime__Ljava_lang_Runtime = (function() {
  return this.currentRuntime__p1__Ljava_lang_Runtime()
});
ScalaJS.c.java_lang_Runtime$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Runtime = this;
  this.currentRuntime$1 = new ScalaJS.c.java_lang_Runtime().init___();
  return this
});
ScalaJS.c.java_lang_Runtime$.prototype.getRuntime__ = (function() {
  return this.getRuntime__Ljava_lang_Runtime()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Runtime$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Runtime$.prototype = ScalaJS.c.java_lang_Runtime$.prototype;
ScalaJS.is.java_lang_Runtime$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Runtime$)))
});
ScalaJS.as.java_lang_Runtime$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Runtime$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Runtime")
  }
});
ScalaJS.isArrayOf.java_lang_Runtime$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Runtime$)))
});
ScalaJS.asArrayOf.java_lang_Runtime$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Runtime$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Runtime;", depth)
  }
});
ScalaJS.data.java_lang_Runtime$ = new ScalaJS.ClassTypeData({
  java_lang_Runtime$: 0
}, false, "java.lang.Runtime$", ScalaJS.data.java_lang_Object, {
  java_lang_Runtime$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Runtime$.prototype.$classData = ScalaJS.data.java_lang_Runtime$;
ScalaJS.moduleInstances.java_lang_Runtime = undefined;
ScalaJS.modules.java_lang_Runtime = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Runtime)) {
    ScalaJS.moduleInstances.java_lang_Runtime = new ScalaJS.c.java_lang_Runtime$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Runtime
});
//@ sourceMappingURL=Runtime$.js.map
