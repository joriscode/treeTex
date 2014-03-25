/** @constructor */
ScalaJS.c.scala_io_UTF8Codec$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.UNI$undREPLACEMENT$undCHAR$1 = 0;
  this.UNI$undREPLACEMENT$undBYTES$1 = null
});
ScalaJS.c.scala_io_UTF8Codec$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_UTF8Codec$.prototype.constructor = ScalaJS.c.scala_io_UTF8Codec$;
ScalaJS.c.scala_io_UTF8Codec$.prototype.UNI$undREPLACEMENT$undCHAR__I = (function() {
  return this.UNI$undREPLACEMENT$undCHAR$1
});
ScalaJS.c.scala_io_UTF8Codec$.prototype.UNI$undREPLACEMENT$undBYTES__AB = (function() {
  return this.UNI$undREPLACEMENT$undBYTES$1
});
ScalaJS.c.scala_io_UTF8Codec$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_io_UTF8Codec = this;
  this.UNI$undREPLACEMENT$undCHAR$1 = 65533;
  this.UNI$undREPLACEMENT$undBYTES$1 = ScalaJS.asArrayOf.scala_Byte(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapByteArray__AB__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Byte.getArrayOf(), [-17, -65, -67])), ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1);
  return this
});
ScalaJS.c.scala_io_UTF8Codec$.prototype.UNI$undREPLACEMENT$undBYTES__ = (function() {
  return this.UNI$undREPLACEMENT$undBYTES__AB()
});
ScalaJS.c.scala_io_UTF8Codec$.prototype.UNI$undREPLACEMENT$undCHAR__ = (function() {
  return ScalaJS.bI(this.UNI$undREPLACEMENT$undCHAR__I())
});
/** @constructor */
ScalaJS.inheritable.scala_io_UTF8Codec$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_UTF8Codec$.prototype = ScalaJS.c.scala_io_UTF8Codec$.prototype;
ScalaJS.is.scala_io_UTF8Codec$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_UTF8Codec$)))
});
ScalaJS.as.scala_io_UTF8Codec$ = (function(obj) {
  if ((ScalaJS.is.scala_io_UTF8Codec$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.UTF8Codec")
  }
});
ScalaJS.isArrayOf.scala_io_UTF8Codec$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_UTF8Codec$)))
});
ScalaJS.asArrayOf.scala_io_UTF8Codec$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_UTF8Codec$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.UTF8Codec;", depth)
  }
});
ScalaJS.data.scala_io_UTF8Codec$ = new ScalaJS.ClassTypeData({
  scala_io_UTF8Codec$: 0
}, false, "scala.io.UTF8Codec$", ScalaJS.data.java_lang_Object, {
  scala_io_UTF8Codec$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_UTF8Codec$.prototype.$classData = ScalaJS.data.scala_io_UTF8Codec$;
ScalaJS.moduleInstances.scala_io_UTF8Codec = undefined;
ScalaJS.modules.scala_io_UTF8Codec = (function() {
  if ((!ScalaJS.moduleInstances.scala_io_UTF8Codec)) {
    ScalaJS.moduleInstances.scala_io_UTF8Codec = new ScalaJS.c.scala_io_UTF8Codec$().init___()
  };
  return ScalaJS.moduleInstances.scala_io_UTF8Codec
});
//@ sourceMappingURL=UTF8Codec$.js.map
