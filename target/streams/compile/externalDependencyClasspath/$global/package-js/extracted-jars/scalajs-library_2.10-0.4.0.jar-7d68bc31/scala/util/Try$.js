/** @constructor */
ScalaJS.c.scala_util_Try$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Try$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Try$.prototype.constructor = ScalaJS.c.scala_util_Try$;
ScalaJS.c.scala_util_Try$.prototype.apply__Lscala_Function0__Lscala_util_Try = (function(r) {
  try {
    return new ScalaJS.c.scala_util_Success().init___O(r.apply__O())
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex6 = $jsexc$;
    var x4 = ex6;
    var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
    if ((!o11.isEmpty__Z())) {
      var e = ScalaJS.as.java_lang_Throwable(o11.get__O());
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(e)
    };
    throw ScalaJS.unwrapJavaScriptException(ex6)
  }
});
ScalaJS.c.scala_util_Try$.prototype.apply__Lscala_Function0__ = (function(r) {
  return this.apply__Lscala_Function0__Lscala_util_Try(r)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Try$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Try$.prototype = ScalaJS.c.scala_util_Try$.prototype;
ScalaJS.is.scala_util_Try$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Try$)))
});
ScalaJS.as.scala_util_Try$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Try$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Try")
  }
});
ScalaJS.isArrayOf.scala_util_Try$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Try$)))
});
ScalaJS.asArrayOf.scala_util_Try$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Try$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Try;", depth)
  }
});
ScalaJS.data.scala_util_Try$ = new ScalaJS.ClassTypeData({
  scala_util_Try$: 0
}, false, "scala.util.Try$", ScalaJS.data.java_lang_Object, {
  scala_util_Try$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Try$.prototype.$classData = ScalaJS.data.scala_util_Try$;
ScalaJS.moduleInstances.scala_util_Try = undefined;
ScalaJS.modules.scala_util_Try = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Try)) {
    ScalaJS.moduleInstances.scala_util_Try = new ScalaJS.c.scala_util_Try$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Try
});
//@ sourceMappingURL=Try$.js.map
