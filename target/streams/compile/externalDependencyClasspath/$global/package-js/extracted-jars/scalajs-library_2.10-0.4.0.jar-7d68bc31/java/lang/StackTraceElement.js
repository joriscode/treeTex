/** @constructor */
ScalaJS.c.java_lang_StackTraceElement = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.declaringClass$1 = null;
  this.methodName$1 = null;
  this.fileName$1 = null;
  this.lineNumber$1 = 0
});
ScalaJS.c.java_lang_StackTraceElement.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_StackTraceElement.prototype.constructor = ScalaJS.c.java_lang_StackTraceElement;
ScalaJS.c.java_lang_StackTraceElement.prototype.getFileName__T = (function() {
  return this.fileName$1
});
ScalaJS.c.java_lang_StackTraceElement.prototype.getLineNumber__I = (function() {
  return this.lineNumber$1
});
ScalaJS.c.java_lang_StackTraceElement.prototype.getClassName__T = (function() {
  return this.declaringClass$1
});
ScalaJS.c.java_lang_StackTraceElement.prototype.getMethodName__T = (function() {
  return this.methodName$1
});
ScalaJS.c.java_lang_StackTraceElement.prototype.isNativeMethod__Z = (function() {
  return false
});
ScalaJS.c.java_lang_StackTraceElement.prototype.equals__O__Z = (function(that) {
  var x1 = that;
  if (ScalaJS.is.java_lang_StackTraceElement(x1)) {
    var x2 = ScalaJS.as.java_lang_StackTraceElement(x1);
    return (((ScalaJS.anyRefEqEq(this.getFileName__T(), x2.getFileName__T()) && (this.getLineNumber__I() === x2.getLineNumber__I())) && ScalaJS.anyRefEqEq(this.getClassName__T(), x2.getClassName__T())) && ScalaJS.anyRefEqEq(this.getMethodName__T(), x2.getMethodName__T()))
  };
  return false
});
ScalaJS.c.java_lang_StackTraceElement.prototype.toString__T = (function() {
  var result = "";
  if ((!ScalaJS.anyRefEqEq(this.declaringClass$1, "<jscode>"))) {
    result = (("" + result) + (("" + this.declaringClass$1) + "."))
  };
  result = (("" + result) + this.methodName$1);
  if ((this.fileName$1 === null)) {
    if (this.isNativeMethod__Z()) {
      result = (("" + result) + "(Native Method)")
    } else {
      result = (("" + result) + "(Unknown Source)")
    }
  } else {
    result = (("" + result) + new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["(", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.fileName$1]))));
    if ((this.lineNumber$1 >= 0)) {
      result = (("" + result) + new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), [":", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(this.lineNumber$1)]))))
    };
    result = (("" + result) + ")")
  };
  return result
});
ScalaJS.c.java_lang_StackTraceElement.prototype.hashCode__I = (function() {
  return (ScalaJS.objectHashCode(this.declaringClass$1) ^ ScalaJS.objectHashCode(this.methodName$1))
});
ScalaJS.c.java_lang_StackTraceElement.prototype.init___T__T__T__I = (function(declaringClass, methodName, fileName, lineNumber) {
  this.declaringClass$1 = declaringClass;
  this.methodName$1 = methodName;
  this.fileName$1 = fileName;
  this.lineNumber$1 = lineNumber;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_lang_StackTraceElement.prototype.isNativeMethod__ = (function() {
  return ScalaJS.bZ(this.isNativeMethod__Z())
});
ScalaJS.c.java_lang_StackTraceElement.prototype.getMethodName__ = (function() {
  return this.getMethodName__T()
});
ScalaJS.c.java_lang_StackTraceElement.prototype.getClassName__ = (function() {
  return this.getClassName__T()
});
ScalaJS.c.java_lang_StackTraceElement.prototype.getLineNumber__ = (function() {
  return ScalaJS.bI(this.getLineNumber__I())
});
ScalaJS.c.java_lang_StackTraceElement.prototype.getFileName__ = (function() {
  return this.getFileName__T()
});
/** @constructor */
ScalaJS.inheritable.java_lang_StackTraceElement = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_StackTraceElement.prototype = ScalaJS.c.java_lang_StackTraceElement.prototype;
ScalaJS.is.java_lang_StackTraceElement = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_StackTraceElement)))
});
ScalaJS.as.java_lang_StackTraceElement = (function(obj) {
  if ((ScalaJS.is.java_lang_StackTraceElement(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.StackTraceElement")
  }
});
ScalaJS.isArrayOf.java_lang_StackTraceElement = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_StackTraceElement)))
});
ScalaJS.asArrayOf.java_lang_StackTraceElement = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_StackTraceElement(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.StackTraceElement;", depth)
  }
});
ScalaJS.data.java_lang_StackTraceElement = new ScalaJS.ClassTypeData({
  java_lang_StackTraceElement: 0
}, false, "java.lang.StackTraceElement", ScalaJS.data.java_lang_Object, {
  java_lang_StackTraceElement: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_StackTraceElement.prototype.$classData = ScalaJS.data.java_lang_StackTraceElement;
//@ sourceMappingURL=StackTraceElement.js.map
