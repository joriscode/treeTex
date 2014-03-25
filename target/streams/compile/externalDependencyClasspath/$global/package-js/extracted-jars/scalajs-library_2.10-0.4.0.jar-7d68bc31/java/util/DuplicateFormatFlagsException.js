/** @constructor */
ScalaJS.c.java_util_DuplicateFormatFlagsException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.flags$6 = null
});
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.constructor = ScalaJS.c.java_util_DuplicateFormatFlagsException;
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.flags__p6__T = (function() {
  return this.flags$6
});
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.flags$und$eq__p6__T__V = (function(x$1) {
  this.flags$6 = x$1
});
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.getFlags__T = (function() {
  return this.flags__p6__T()
});
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.getMessage__T = (function() {
  return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["Flags = '", "'"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.flags__p6__T()])))
});
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.init___ = (function() {
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  this.flags$6 = null;
  return this
});
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.init___T = (function(f) {
  ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.init___.call(this);
  if (ScalaJS.anyRefEqEq(f, null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  this.flags$und$eq__p6__T__V(f);
  return this
});
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.getFlags__ = (function() {
  return this.getFlags__T()
});
/** @constructor */
ScalaJS.inheritable.java_util_DuplicateFormatFlagsException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_DuplicateFormatFlagsException.prototype = ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype;
ScalaJS.is.java_util_DuplicateFormatFlagsException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_DuplicateFormatFlagsException)))
});
ScalaJS.as.java_util_DuplicateFormatFlagsException = (function(obj) {
  if ((ScalaJS.is.java_util_DuplicateFormatFlagsException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.DuplicateFormatFlagsException")
  }
});
ScalaJS.isArrayOf.java_util_DuplicateFormatFlagsException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_DuplicateFormatFlagsException)))
});
ScalaJS.asArrayOf.java_util_DuplicateFormatFlagsException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_DuplicateFormatFlagsException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.DuplicateFormatFlagsException;", depth)
  }
});
ScalaJS.data.java_util_DuplicateFormatFlagsException = new ScalaJS.ClassTypeData({
  java_util_DuplicateFormatFlagsException: 0
}, false, "java.util.DuplicateFormatFlagsException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_DuplicateFormatFlagsException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_DuplicateFormatFlagsException.prototype.$classData = ScalaJS.data.java_util_DuplicateFormatFlagsException;
//@ sourceMappingURL=DuplicateFormatFlagsException.js.map
