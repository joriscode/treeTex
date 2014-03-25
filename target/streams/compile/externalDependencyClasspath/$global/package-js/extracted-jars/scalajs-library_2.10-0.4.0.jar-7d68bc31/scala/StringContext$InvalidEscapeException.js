/** @constructor */
ScalaJS.c.scala_StringContext$InvalidEscapeException = (function() {
  ScalaJS.c.java_lang_IllegalArgumentException.call(this)
});
ScalaJS.c.scala_StringContext$InvalidEscapeException.prototype = new ScalaJS.inheritable.java_lang_IllegalArgumentException();
ScalaJS.c.scala_StringContext$InvalidEscapeException.prototype.constructor = ScalaJS.c.scala_StringContext$InvalidEscapeException;
ScalaJS.c.scala_StringContext$InvalidEscapeException.prototype.init___T__I = (function(str$2, idx) {
  ScalaJS.c.java_lang_IllegalArgumentException.prototype.init___T.call(this, (((("invalid escape character at index " + ScalaJS.bI(idx)) + " in \"") + str$2) + "\""));
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_StringContext$InvalidEscapeException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_StringContext$InvalidEscapeException.prototype = ScalaJS.c.scala_StringContext$InvalidEscapeException.prototype;
ScalaJS.is.scala_StringContext$InvalidEscapeException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_StringContext$InvalidEscapeException)))
});
ScalaJS.as.scala_StringContext$InvalidEscapeException = (function(obj) {
  if ((ScalaJS.is.scala_StringContext$InvalidEscapeException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.StringContext$InvalidEscapeException")
  }
});
ScalaJS.isArrayOf.scala_StringContext$InvalidEscapeException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_StringContext$InvalidEscapeException)))
});
ScalaJS.asArrayOf.scala_StringContext$InvalidEscapeException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_StringContext$InvalidEscapeException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.StringContext$InvalidEscapeException;", depth)
  }
});
ScalaJS.data.scala_StringContext$InvalidEscapeException = new ScalaJS.ClassTypeData({
  scala_StringContext$InvalidEscapeException: 0
}, false, "scala.StringContext$InvalidEscapeException", ScalaJS.data.java_lang_IllegalArgumentException, {
  scala_StringContext$InvalidEscapeException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_StringContext$InvalidEscapeException.prototype.$classData = ScalaJS.data.scala_StringContext$InvalidEscapeException;
//@ sourceMappingURL=StringContext$InvalidEscapeException.js.map
