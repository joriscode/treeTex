/** @constructor */
ScalaJS.c.scala_scalajs_js_Dynamic$literal$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_scalajs_js_Dynamic$literal$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_js_Dynamic$literal$.prototype.constructor = ScalaJS.c.scala_scalajs_js_Dynamic$literal$;
ScalaJS.c.scala_scalajs_js_Dynamic$literal$.prototype.applyDynamic__T__Lscala_collection_Seq__ = (function(name, fields) {
  return this.applyDynamic__T__Lscala_collection_Seq__Lscala_scalajs_js_Dynamic(name, fields)
});
ScalaJS.c.scala_scalajs_js_Dynamic$literal$.prototype.applyDynamicNamed__T__Lscala_collection_Seq__ = (function(name$2, fields$2) {
  return this.applyDynamicNamed__T__Lscala_collection_Seq__Lscala_scalajs_js_Dynamic(name$2, fields$2)
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_js_Dynamic$literal$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_js_Dynamic$literal$.prototype = ScalaJS.c.scala_scalajs_js_Dynamic$literal$.prototype;
ScalaJS.is.scala_scalajs_js_Dynamic$literal$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Dynamic$literal$)))
});
ScalaJS.as.scala_scalajs_js_Dynamic$literal$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Dynamic$literal$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Dynamic$literal")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Dynamic$literal$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Dynamic$literal$)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Dynamic$literal$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Dynamic$literal$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Dynamic$literal;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Dynamic$literal$ = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Dynamic$literal$: 0
}, false, "scala.scalajs.js.Dynamic$literal$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_js_Dynamic$literal$: 1,
  scala_Dynamic: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_js_Dynamic$literal$.prototype.$classData = ScalaJS.data.scala_scalajs_js_Dynamic$literal$;
ScalaJS.moduleInstances.scala_scalajs_js_Dynamic$literal = undefined;
ScalaJS.modules.scala_scalajs_js_Dynamic$literal = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_js_Dynamic$literal)) {
    ScalaJS.moduleInstances.scala_scalajs_js_Dynamic$literal = new ScalaJS.c.scala_scalajs_js_Dynamic$literal$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_js_Dynamic$literal
});
//@ sourceMappingURL=Dynamic$literal$.js.map
