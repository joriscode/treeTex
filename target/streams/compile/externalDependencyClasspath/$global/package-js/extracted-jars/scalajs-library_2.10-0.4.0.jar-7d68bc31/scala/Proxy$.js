/** @constructor */
ScalaJS.c.scala_Proxy$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Proxy$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Proxy$.prototype.constructor = ScalaJS.c.scala_Proxy$;
/** @constructor */
ScalaJS.inheritable.scala_Proxy$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Proxy$.prototype = ScalaJS.c.scala_Proxy$.prototype;
ScalaJS.is.scala_Proxy$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Proxy$)))
});
ScalaJS.as.scala_Proxy$ = (function(obj) {
  if ((ScalaJS.is.scala_Proxy$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Proxy")
  }
});
ScalaJS.isArrayOf.scala_Proxy$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Proxy$)))
});
ScalaJS.asArrayOf.scala_Proxy$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Proxy$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Proxy;", depth)
  }
});
ScalaJS.data.scala_Proxy$ = new ScalaJS.ClassTypeData({
  scala_Proxy$: 0
}, false, "scala.Proxy$", ScalaJS.data.java_lang_Object, {
  scala_Proxy$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Proxy$.prototype.$classData = ScalaJS.data.scala_Proxy$;
ScalaJS.moduleInstances.scala_Proxy = undefined;
ScalaJS.modules.scala_Proxy = (function() {
  if ((!ScalaJS.moduleInstances.scala_Proxy)) {
    ScalaJS.moduleInstances.scala_Proxy = new ScalaJS.c.scala_Proxy$().init___()
  };
  return ScalaJS.moduleInstances.scala_Proxy
});
//@ sourceMappingURL=Proxy$.js.map
