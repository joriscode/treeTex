/** @constructor */
ScalaJS.c.scala_io_BytePickle$SPU = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_io_BytePickle$SPU.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_BytePickle$SPU.prototype.constructor = ScalaJS.c.scala_io_BytePickle$SPU;
ScalaJS.c.scala_io_BytePickle$SPU.prototype.appU__Lscala_io_BytePickle$UnPicklerState__ = (function(state) {
  return this.appU__Lscala_io_BytePickle$UnPicklerState__Lscala_Tuple2(state)
});
ScalaJS.c.scala_io_BytePickle$SPU.prototype.appP__O__Lscala_io_BytePickle$PicklerState__ = (function(a, state$2) {
  return this.appP__O__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState(a, state$2)
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$SPU = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$SPU.prototype = ScalaJS.c.scala_io_BytePickle$SPU.prototype;
ScalaJS.is.scala_io_BytePickle$SPU = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$SPU)))
});
ScalaJS.as.scala_io_BytePickle$SPU = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$SPU(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$SPU")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$SPU = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$SPU)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$SPU = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$SPU(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$SPU;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$SPU = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$SPU: 0
}, false, "scala.io.BytePickle$SPU", ScalaJS.data.java_lang_Object, {
  scala_io_BytePickle$SPU: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$SPU.prototype.$classData = ScalaJS.data.scala_io_BytePickle$SPU;
//@ sourceMappingURL=BytePickle$SPU.js.map
