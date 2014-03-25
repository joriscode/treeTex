/** @constructor */
ScalaJS.c.scala_runtime_RichException = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.exc$1 = null
});
ScalaJS.c.scala_runtime_RichException.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichException.prototype.constructor = ScalaJS.c.scala_runtime_RichException;
ScalaJS.c.scala_runtime_RichException.prototype.getStackTraceString__T = (function() {
  return ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.exc$1.getStackTrace__ALjava_lang_StackTraceElement(), 1)).mkString__T__T__T__T("", ScalaJS.modules.scala_compat_Platform().EOL__T(), ScalaJS.modules.scala_compat_Platform().EOL__T())
});
ScalaJS.c.scala_runtime_RichException.prototype.init___Ljava_lang_Throwable = (function(exc) {
  this.exc$1 = exc;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_RichException.prototype.getStackTraceString__ = (function() {
  return this.getStackTraceString__T()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichException.prototype = ScalaJS.c.scala_runtime_RichException.prototype;
ScalaJS.is.scala_runtime_RichException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichException)))
});
ScalaJS.as.scala_runtime_RichException = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichException")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichException)))
});
ScalaJS.asArrayOf.scala_runtime_RichException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichException;", depth)
  }
});
ScalaJS.data.scala_runtime_RichException = new ScalaJS.ClassTypeData({
  scala_runtime_RichException: 0
}, false, "scala.runtime.RichException", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichException: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichException.prototype.$classData = ScalaJS.data.scala_runtime_RichException;
//@ sourceMappingURL=RichException.js.map
