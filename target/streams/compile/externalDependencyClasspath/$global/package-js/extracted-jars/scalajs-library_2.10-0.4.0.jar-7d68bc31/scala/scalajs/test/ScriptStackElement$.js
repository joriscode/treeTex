/** @constructor */
ScalaJS.c.scala_scalajs_test_ScriptStackElement$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_test_ScriptStackElement$.prototype.constructor = ScalaJS.c.scala_scalajs_test_ScriptStackElement$;
ScalaJS.c.scala_scalajs_test_ScriptStackElement$.prototype.apply__T__T__I__Lscala_scalajs_test_ScriptStackElement = (function(fileName, functionName, lineNumber) {
  return new ScalaJS.c.scala_scalajs_test_ScriptStackElement().init___T__T__I(fileName, functionName, lineNumber)
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement$.prototype.apply__T__T__I__ = (function(fileName, functionName, lineNumber) {
  return this.apply__T__T__I__Lscala_scalajs_test_ScriptStackElement(fileName, functionName, lineNumber)
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_test_ScriptStackElement$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_test_ScriptStackElement$.prototype = ScalaJS.c.scala_scalajs_test_ScriptStackElement$.prototype;
ScalaJS.is.scala_scalajs_test_ScriptStackElement$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_test_ScriptStackElement$)))
});
ScalaJS.as.scala_scalajs_test_ScriptStackElement$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_test_ScriptStackElement$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.test.ScriptStackElement")
  }
});
ScalaJS.isArrayOf.scala_scalajs_test_ScriptStackElement$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_test_ScriptStackElement$)))
});
ScalaJS.asArrayOf.scala_scalajs_test_ScriptStackElement$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_test_ScriptStackElement$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.test.ScriptStackElement;", depth)
  }
});
ScalaJS.data.scala_scalajs_test_ScriptStackElement$ = new ScalaJS.ClassTypeData({
  scala_scalajs_test_ScriptStackElement$: 0
}, false, "scala.scalajs.test.ScriptStackElement$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_test_ScriptStackElement$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement$.prototype.$classData = ScalaJS.data.scala_scalajs_test_ScriptStackElement$;
ScalaJS.moduleInstances.scala_scalajs_test_ScriptStackElement = undefined;
ScalaJS.modules.scala_scalajs_test_ScriptStackElement = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_test_ScriptStackElement)) {
    ScalaJS.moduleInstances.scala_scalajs_test_ScriptStackElement = new ScalaJS.c.scala_scalajs_test_ScriptStackElement$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_test_ScriptStackElement
});
//@ sourceMappingURL=ScriptStackElement$.js.map
