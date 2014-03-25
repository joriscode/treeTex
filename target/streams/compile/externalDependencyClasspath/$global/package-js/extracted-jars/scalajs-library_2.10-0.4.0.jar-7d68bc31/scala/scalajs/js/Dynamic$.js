/** @constructor */
ScalaJS.c.scala_scalajs_js_Dynamic$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_scalajs_js_Dynamic$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_js_Dynamic$.prototype.constructor = ScalaJS.c.scala_scalajs_js_Dynamic$;
ScalaJS.c.scala_scalajs_js_Dynamic$.prototype.newInstance__Lscala_scalajs_js_Dynamic__Lscala_collection_Seq__ = (function(clazz, args) {
  return this.newInstance__Lscala_scalajs_js_Dynamic__Lscala_collection_Seq__Lscala_scalajs_js_Dynamic(clazz, args)
});
ScalaJS.c.scala_scalajs_js_Dynamic$.prototype.global__ = (function() {
  return this.global__Lscala_scalajs_js_Dynamic()
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_js_Dynamic$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_js_Dynamic$.prototype = ScalaJS.c.scala_scalajs_js_Dynamic$.prototype;
ScalaJS.is.scala_scalajs_js_Dynamic$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Dynamic$)))
});
ScalaJS.as.scala_scalajs_js_Dynamic$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Dynamic$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Dynamic")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Dynamic$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Dynamic$)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Dynamic$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Dynamic$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Dynamic;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Dynamic$ = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Dynamic$: 0
}, false, "scala.scalajs.js.Dynamic$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_js_Dynamic$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_js_Dynamic$.prototype.$classData = ScalaJS.data.scala_scalajs_js_Dynamic$;
ScalaJS.moduleInstances.scala_scalajs_js_Dynamic = undefined;
ScalaJS.modules.scala_scalajs_js_Dynamic = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_js_Dynamic)) {
    ScalaJS.moduleInstances.scala_scalajs_js_Dynamic = new ScalaJS.c.scala_scalajs_js_Dynamic$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_js_Dynamic
});
//@ sourceMappingURL=Dynamic$.js.map
