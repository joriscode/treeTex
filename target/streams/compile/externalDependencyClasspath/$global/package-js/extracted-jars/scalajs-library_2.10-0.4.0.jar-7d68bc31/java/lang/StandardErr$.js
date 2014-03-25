/** @constructor */
ScalaJS.c.java_lang_StandardErr$ = (function() {
  ScalaJS.c.java_io_OutputStream.call(this)
});
ScalaJS.c.java_lang_StandardErr$.prototype = new ScalaJS.inheritable.java_io_OutputStream();
ScalaJS.c.java_lang_StandardErr$.prototype.constructor = ScalaJS.c.java_lang_StandardErr$;
ScalaJS.c.java_lang_StandardErr$.prototype.write__I__V = (function(b) {
  ScalaJS.modules.java_lang_StandardErrPrintStream().print__T__V(ScalaJS.objectToString(ScalaJS.bC((b & 65535))))
});
/** @constructor */
ScalaJS.inheritable.java_lang_StandardErr$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_StandardErr$.prototype = ScalaJS.c.java_lang_StandardErr$.prototype;
ScalaJS.is.java_lang_StandardErr$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_StandardErr$)))
});
ScalaJS.as.java_lang_StandardErr$ = (function(obj) {
  if ((ScalaJS.is.java_lang_StandardErr$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.StandardErr")
  }
});
ScalaJS.isArrayOf.java_lang_StandardErr$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_StandardErr$)))
});
ScalaJS.asArrayOf.java_lang_StandardErr$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_StandardErr$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.StandardErr;", depth)
  }
});
ScalaJS.data.java_lang_StandardErr$ = new ScalaJS.ClassTypeData({
  java_lang_StandardErr$: 0
}, false, "java.lang.StandardErr$", ScalaJS.data.java_io_OutputStream, {
  java_lang_StandardErr$: 1,
  java_io_OutputStream: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_StandardErr$.prototype.$classData = ScalaJS.data.java_lang_StandardErr$;
ScalaJS.moduleInstances.java_lang_StandardErr = undefined;
ScalaJS.modules.java_lang_StandardErr = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_StandardErr)) {
    ScalaJS.moduleInstances.java_lang_StandardErr = new ScalaJS.c.java_lang_StandardErr$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_StandardErr
});
//@ sourceMappingURL=StandardErr$.js.map
