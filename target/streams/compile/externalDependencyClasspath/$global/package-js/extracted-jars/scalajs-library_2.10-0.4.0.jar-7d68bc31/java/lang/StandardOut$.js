/** @constructor */
ScalaJS.c.java_lang_StandardOut$ = (function() {
  ScalaJS.c.java_io_OutputStream.call(this)
});
ScalaJS.c.java_lang_StandardOut$.prototype = new ScalaJS.inheritable.java_io_OutputStream();
ScalaJS.c.java_lang_StandardOut$.prototype.constructor = ScalaJS.c.java_lang_StandardOut$;
ScalaJS.c.java_lang_StandardOut$.prototype.write__I__V = (function(b) {
  ScalaJS.modules.java_lang_StandardOutPrintStream().print__T__V(ScalaJS.objectToString(ScalaJS.bC((b & 65535))))
});
/** @constructor */
ScalaJS.inheritable.java_lang_StandardOut$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_StandardOut$.prototype = ScalaJS.c.java_lang_StandardOut$.prototype;
ScalaJS.is.java_lang_StandardOut$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_StandardOut$)))
});
ScalaJS.as.java_lang_StandardOut$ = (function(obj) {
  if ((ScalaJS.is.java_lang_StandardOut$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.StandardOut")
  }
});
ScalaJS.isArrayOf.java_lang_StandardOut$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_StandardOut$)))
});
ScalaJS.asArrayOf.java_lang_StandardOut$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_StandardOut$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.StandardOut;", depth)
  }
});
ScalaJS.data.java_lang_StandardOut$ = new ScalaJS.ClassTypeData({
  java_lang_StandardOut$: 0
}, false, "java.lang.StandardOut$", ScalaJS.data.java_io_OutputStream, {
  java_lang_StandardOut$: 1,
  java_io_OutputStream: 1,
  java_io_Flushable: 1,
  java_io_Closeable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_StandardOut$.prototype.$classData = ScalaJS.data.java_lang_StandardOut$;
ScalaJS.moduleInstances.java_lang_StandardOut = undefined;
ScalaJS.modules.java_lang_StandardOut = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_StandardOut)) {
    ScalaJS.moduleInstances.java_lang_StandardOut = new ScalaJS.c.java_lang_StandardOut$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_StandardOut
});
//@ sourceMappingURL=StandardOut$.js.map
