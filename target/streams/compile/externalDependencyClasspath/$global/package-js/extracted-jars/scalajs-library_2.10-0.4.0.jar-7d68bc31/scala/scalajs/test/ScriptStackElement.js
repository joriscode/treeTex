/** @constructor */
ScalaJS.c.scala_scalajs_test_ScriptStackElement = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.fileName$1 = null;
  this.functionName$1 = null;
  this.lineNumber$1 = 0
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype.constructor = ScalaJS.c.scala_scalajs_test_ScriptStackElement;
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype.fileName__T = (function() {
  return this.fileName$1
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype.functionName__T = (function() {
  return this.functionName$1
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype.lineNumber__I = (function() {
  return this.lineNumber$1
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype.init___T__T__I = (function(fileName, functionName, lineNumber) {
  this.fileName$1 = fileName;
  this.functionName$1 = functionName;
  this.lineNumber$1 = lineNumber;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype.lineNumber__ = (function() {
  return ScalaJS.bI(this.lineNumber__I())
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype.functionName__ = (function() {
  return this.functionName__T()
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype.fileName__ = (function() {
  return this.fileName__T()
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_test_ScriptStackElement = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_test_ScriptStackElement.prototype = ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype;
ScalaJS.is.scala_scalajs_test_ScriptStackElement = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_test_ScriptStackElement)))
});
ScalaJS.as.scala_scalajs_test_ScriptStackElement = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_test_ScriptStackElement(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.test.ScriptStackElement")
  }
});
ScalaJS.isArrayOf.scala_scalajs_test_ScriptStackElement = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_test_ScriptStackElement)))
});
ScalaJS.asArrayOf.scala_scalajs_test_ScriptStackElement = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_test_ScriptStackElement(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.test.ScriptStackElement;", depth)
  }
});
ScalaJS.data.scala_scalajs_test_ScriptStackElement = new ScalaJS.ClassTypeData({
  scala_scalajs_test_ScriptStackElement: 0
}, false, "scala.scalajs.test.ScriptStackElement", ScalaJS.data.java_lang_Object, {
  scala_scalajs_test_ScriptStackElement: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_test_ScriptStackElement.prototype.$classData = ScalaJS.data.scala_scalajs_test_ScriptStackElement;
//@ sourceMappingURL=ScriptStackElement.js.map
