/** @constructor */
ScalaJS.c.java_lang_ThreadLocal$ThreadLocalMap = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.java_lang_ThreadLocal$ThreadLocalMap.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_ThreadLocal$ThreadLocalMap.prototype.constructor = ScalaJS.c.java_lang_ThreadLocal$ThreadLocalMap;
/** @constructor */
ScalaJS.inheritable.java_lang_ThreadLocal$ThreadLocalMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ThreadLocal$ThreadLocalMap.prototype = ScalaJS.c.java_lang_ThreadLocal$ThreadLocalMap.prototype;
ScalaJS.is.java_lang_ThreadLocal$ThreadLocalMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ThreadLocal$ThreadLocalMap)))
});
ScalaJS.as.java_lang_ThreadLocal$ThreadLocalMap = (function(obj) {
  if ((ScalaJS.is.java_lang_ThreadLocal$ThreadLocalMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ThreadLocal$ThreadLocalMap")
  }
});
ScalaJS.isArrayOf.java_lang_ThreadLocal$ThreadLocalMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ThreadLocal$ThreadLocalMap)))
});
ScalaJS.asArrayOf.java_lang_ThreadLocal$ThreadLocalMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ThreadLocal$ThreadLocalMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ThreadLocal$ThreadLocalMap;", depth)
  }
});
ScalaJS.data.java_lang_ThreadLocal$ThreadLocalMap = new ScalaJS.ClassTypeData({
  java_lang_ThreadLocal$ThreadLocalMap: 0
}, false, "java.lang.ThreadLocal$ThreadLocalMap", ScalaJS.data.java_lang_Object, {
  java_lang_ThreadLocal$ThreadLocalMap: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ThreadLocal$ThreadLocalMap.prototype.$classData = ScalaJS.data.java_lang_ThreadLocal$ThreadLocalMap;
//@ sourceMappingURL=ThreadLocal$ThreadLocalMap.js.map
