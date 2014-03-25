/** @constructor */
ScalaJS.c.java_util_IllegalFormatConversionException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.c$6 = 0;
  this.arg$6 = null
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.constructor = ScalaJS.c.java_util_IllegalFormatConversionException;
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.c__p6__C = (function() {
  return this.c$6
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.arg__p6__Ljava_lang_Class = (function() {
  return this.arg$6
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.arg$und$eq__p6__Ljava_lang_Class__V = (function(x$1) {
  this.arg$6 = x$1
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.getConversion__C = (function() {
  return this.c__p6__C()
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.getArgumentClass__Ljava_lang_Class = (function() {
  return this.arg__p6__Ljava_lang_Class()
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.getMessage__T = (function() {
  return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["", " != ", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bC(this.c__p6__C()), this.arg__p6__Ljava_lang_Class().getName__T()])))
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.init___C = (function(c) {
  this.c$6 = c;
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  this.arg$6 = null;
  return this
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.init___C__Ljava_lang_Class = (function(c, arg) {
  ScalaJS.c.java_util_IllegalFormatConversionException.prototype.init___C.call(this, c);
  if (ScalaJS.anyRefEqEq(arg, null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  this.arg$und$eq__p6__Ljava_lang_Class__V(arg);
  return this
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.getArgumentClass__ = (function() {
  return this.getArgumentClass__Ljava_lang_Class()
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.getConversion__ = (function() {
  return ScalaJS.bC(this.getConversion__C())
});
/** @constructor */
ScalaJS.inheritable.java_util_IllegalFormatConversionException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_IllegalFormatConversionException.prototype = ScalaJS.c.java_util_IllegalFormatConversionException.prototype;
ScalaJS.is.java_util_IllegalFormatConversionException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_IllegalFormatConversionException)))
});
ScalaJS.as.java_util_IllegalFormatConversionException = (function(obj) {
  if ((ScalaJS.is.java_util_IllegalFormatConversionException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.IllegalFormatConversionException")
  }
});
ScalaJS.isArrayOf.java_util_IllegalFormatConversionException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_IllegalFormatConversionException)))
});
ScalaJS.asArrayOf.java_util_IllegalFormatConversionException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_IllegalFormatConversionException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.IllegalFormatConversionException;", depth)
  }
});
ScalaJS.data.java_util_IllegalFormatConversionException = new ScalaJS.ClassTypeData({
  java_util_IllegalFormatConversionException: 0
}, false, "java.util.IllegalFormatConversionException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_IllegalFormatConversionException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_IllegalFormatConversionException.prototype.$classData = ScalaJS.data.java_util_IllegalFormatConversionException;
//@ sourceMappingURL=IllegalFormatConversionException.js.map
