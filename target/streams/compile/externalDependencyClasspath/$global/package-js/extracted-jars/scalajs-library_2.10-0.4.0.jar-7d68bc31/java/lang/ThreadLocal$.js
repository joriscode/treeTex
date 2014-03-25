/** @constructor */
ScalaJS.c.java_lang_ThreadLocal$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.java_lang_ThreadLocal$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_ThreadLocal$.prototype.constructor = ScalaJS.c.java_lang_ThreadLocal$;
/** @constructor */
ScalaJS.inheritable.java_lang_ThreadLocal$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ThreadLocal$.prototype = ScalaJS.c.java_lang_ThreadLocal$.prototype;
ScalaJS.is.java_lang_ThreadLocal$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ThreadLocal$)))
});
ScalaJS.as.java_lang_ThreadLocal$ = (function(obj) {
  if ((ScalaJS.is.java_lang_ThreadLocal$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ThreadLocal")
  }
});
ScalaJS.isArrayOf.java_lang_ThreadLocal$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ThreadLocal$)))
});
ScalaJS.asArrayOf.java_lang_ThreadLocal$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ThreadLocal$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ThreadLocal;", depth)
  }
});
ScalaJS.data.java_lang_ThreadLocal$ = new ScalaJS.ClassTypeData({
  java_lang_ThreadLocal$: 0
}, false, "java.lang.ThreadLocal$", ScalaJS.data.java_lang_Object, {
  java_lang_ThreadLocal$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ThreadLocal$.prototype.$classData = ScalaJS.data.java_lang_ThreadLocal$;
ScalaJS.moduleInstances.java_lang_ThreadLocal = undefined;
ScalaJS.modules.java_lang_ThreadLocal = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_ThreadLocal)) {
    ScalaJS.moduleInstances.java_lang_ThreadLocal = new ScalaJS.c.java_lang_ThreadLocal$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_ThreadLocal
});
//@ sourceMappingURL=ThreadLocal$.js.map
