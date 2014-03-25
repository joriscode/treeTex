/** @constructor */
ScalaJS.c.java_util_UnknownFormatConversionException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.s$6 = null
});
ScalaJS.c.java_util_UnknownFormatConversionException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_UnknownFormatConversionException.prototype.constructor = ScalaJS.c.java_util_UnknownFormatConversionException;
ScalaJS.c.java_util_UnknownFormatConversionException.prototype.s__p6__T = (function() {
  return this.s$6
});
ScalaJS.c.java_util_UnknownFormatConversionException.prototype.s$und$eq__p6__T__V = (function(x$1) {
  this.s$6 = x$1
});
ScalaJS.c.java_util_UnknownFormatConversionException.prototype.getConversion__T = (function() {
  return this.s__p6__T()
});
ScalaJS.c.java_util_UnknownFormatConversionException.prototype.getMessage__T = (function() {
  return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["Conversion = '", "'"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.s__p6__T()])))
});
ScalaJS.c.java_util_UnknownFormatConversionException.prototype.init___ = (function() {
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  this.s$6 = null;
  return this
});
ScalaJS.c.java_util_UnknownFormatConversionException.prototype.init___T = (function(s) {
  ScalaJS.c.java_util_UnknownFormatConversionException.prototype.init___.call(this);
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  this.s$und$eq__p6__T__V(s);
  return this
});
ScalaJS.c.java_util_UnknownFormatConversionException.prototype.getConversion__ = (function() {
  return this.getConversion__T()
});
/** @constructor */
ScalaJS.inheritable.java_util_UnknownFormatConversionException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_UnknownFormatConversionException.prototype = ScalaJS.c.java_util_UnknownFormatConversionException.prototype;
ScalaJS.is.java_util_UnknownFormatConversionException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_UnknownFormatConversionException)))
});
ScalaJS.as.java_util_UnknownFormatConversionException = (function(obj) {
  if ((ScalaJS.is.java_util_UnknownFormatConversionException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.UnknownFormatConversionException")
  }
});
ScalaJS.isArrayOf.java_util_UnknownFormatConversionException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_UnknownFormatConversionException)))
});
ScalaJS.asArrayOf.java_util_UnknownFormatConversionException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_UnknownFormatConversionException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.UnknownFormatConversionException;", depth)
  }
});
ScalaJS.data.java_util_UnknownFormatConversionException = new ScalaJS.ClassTypeData({
  java_util_UnknownFormatConversionException: 0
}, false, "java.util.UnknownFormatConversionException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_UnknownFormatConversionException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_UnknownFormatConversionException.prototype.$classData = ScalaJS.data.java_util_UnknownFormatConversionException;
//@ sourceMappingURL=UnknownFormatConversionException.js.map
