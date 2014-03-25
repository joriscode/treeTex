/** @constructor */
ScalaJS.c.java_util_IllegalFormatCodePointException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.c$6 = 0
});
ScalaJS.c.java_util_IllegalFormatCodePointException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_IllegalFormatCodePointException.prototype.constructor = ScalaJS.c.java_util_IllegalFormatCodePointException;
ScalaJS.c.java_util_IllegalFormatCodePointException.prototype.c__p6__I = (function() {
  return this.c$6
});
ScalaJS.c.java_util_IllegalFormatCodePointException.prototype.getCodePoint__I = (function() {
  return this.c__p6__I()
});
ScalaJS.c.java_util_IllegalFormatCodePointException.prototype.getMessage__T = (function() {
  return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["Code point = ", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(this.c__p6__I())])))
});
ScalaJS.c.java_util_IllegalFormatCodePointException.prototype.init___I = (function(c) {
  this.c$6 = c;
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_IllegalFormatCodePointException.prototype.getCodePoint__ = (function() {
  return ScalaJS.bI(this.getCodePoint__I())
});
/** @constructor */
ScalaJS.inheritable.java_util_IllegalFormatCodePointException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_IllegalFormatCodePointException.prototype = ScalaJS.c.java_util_IllegalFormatCodePointException.prototype;
ScalaJS.is.java_util_IllegalFormatCodePointException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_IllegalFormatCodePointException)))
});
ScalaJS.as.java_util_IllegalFormatCodePointException = (function(obj) {
  if ((ScalaJS.is.java_util_IllegalFormatCodePointException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.IllegalFormatCodePointException")
  }
});
ScalaJS.isArrayOf.java_util_IllegalFormatCodePointException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_IllegalFormatCodePointException)))
});
ScalaJS.asArrayOf.java_util_IllegalFormatCodePointException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_IllegalFormatCodePointException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.IllegalFormatCodePointException;", depth)
  }
});
ScalaJS.data.java_util_IllegalFormatCodePointException = new ScalaJS.ClassTypeData({
  java_util_IllegalFormatCodePointException: 0
}, false, "java.util.IllegalFormatCodePointException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_IllegalFormatCodePointException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_IllegalFormatCodePointException.prototype.$classData = ScalaJS.data.java_util_IllegalFormatCodePointException;
//@ sourceMappingURL=IllegalFormatCodePointException.js.map
