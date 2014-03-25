/** @constructor */
ScalaJS.c.java_lang_Thread$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.SingleThread$1 = null
});
ScalaJS.c.java_lang_Thread$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Thread$.prototype.constructor = ScalaJS.c.java_lang_Thread$;
ScalaJS.c.java_lang_Thread$.prototype.currentThread__Ljava_lang_Thread = (function() {
  return this.SingleThread$1
});
ScalaJS.c.java_lang_Thread$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Thread = this;
  this.SingleThread$1 = new ScalaJS.c.java_lang_Thread().init___();
  return this
});
ScalaJS.c.java_lang_Thread$.prototype.currentThread__ = (function() {
  return this.currentThread__Ljava_lang_Thread()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Thread$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Thread$.prototype = ScalaJS.c.java_lang_Thread$.prototype;
ScalaJS.is.java_lang_Thread$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Thread$)))
});
ScalaJS.as.java_lang_Thread$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Thread$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Thread")
  }
});
ScalaJS.isArrayOf.java_lang_Thread$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Thread$)))
});
ScalaJS.asArrayOf.java_lang_Thread$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Thread$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Thread;", depth)
  }
});
ScalaJS.data.java_lang_Thread$ = new ScalaJS.ClassTypeData({
  java_lang_Thread$: 0
}, false, "java.lang.Thread$", ScalaJS.data.java_lang_Object, {
  java_lang_Thread$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Thread$.prototype.$classData = ScalaJS.data.java_lang_Thread$;
ScalaJS.moduleInstances.java_lang_Thread = undefined;
ScalaJS.modules.java_lang_Thread = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Thread)) {
    ScalaJS.moduleInstances.java_lang_Thread = new ScalaJS.c.java_lang_Thread$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Thread
});
//@ sourceMappingURL=Thread$.js.map
