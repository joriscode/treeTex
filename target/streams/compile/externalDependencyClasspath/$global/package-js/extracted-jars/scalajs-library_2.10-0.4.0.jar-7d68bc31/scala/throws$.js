/** @constructor */
ScalaJS.c.scala_throws$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_throws$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_throws$.prototype.constructor = ScalaJS.c.scala_throws$;
ScalaJS.c.scala_throws$.prototype.$$lessinit$greater$default$1__T = (function() {
  return ""
});
/** @constructor */
ScalaJS.inheritable.scala_throws$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_throws$.prototype = ScalaJS.c.scala_throws$.prototype;
ScalaJS.is.scala_throws$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_throws$)))
});
ScalaJS.as.scala_throws$ = (function(obj) {
  if ((ScalaJS.is.scala_throws$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.throws")
  }
});
ScalaJS.isArrayOf.scala_throws$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_throws$)))
});
ScalaJS.asArrayOf.scala_throws$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_throws$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.throws;", depth)
  }
});
ScalaJS.data.scala_throws$ = new ScalaJS.ClassTypeData({
  scala_throws$: 0
}, false, "scala.throws$", ScalaJS.data.java_lang_Object, {
  scala_throws$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_throws$.prototype.$classData = ScalaJS.data.scala_throws$;
ScalaJS.moduleInstances.scala_throws = undefined;
ScalaJS.modules.scala_throws = (function() {
  if ((!ScalaJS.moduleInstances.scala_throws)) {
    ScalaJS.moduleInstances.scala_throws = new ScalaJS.c.scala_throws$().init___()
  };
  return ScalaJS.moduleInstances.scala_throws
});
//@ sourceMappingURL=throws$.js.map
