/** @constructor */
ScalaJS.c.scala_io_BytePickle$PicklerState = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.stream$1 = null;
  this.dict$1 = null
});
ScalaJS.c.scala_io_BytePickle$PicklerState.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_BytePickle$PicklerState.prototype.constructor = ScalaJS.c.scala_io_BytePickle$PicklerState;
ScalaJS.c.scala_io_BytePickle$PicklerState.prototype.stream__AB = (function() {
  return this.stream$1
});
ScalaJS.c.scala_io_BytePickle$PicklerState.prototype.dict__Lscala_io_BytePickle$PicklerEnv = (function() {
  return this.dict$1
});
ScalaJS.c.scala_io_BytePickle$PicklerState.prototype.init___AB__Lscala_io_BytePickle$PicklerEnv = (function(stream, dict) {
  this.stream$1 = stream;
  this.dict$1 = dict;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_io_BytePickle$PicklerState.prototype.dict__ = (function() {
  return this.dict__Lscala_io_BytePickle$PicklerEnv()
});
ScalaJS.c.scala_io_BytePickle$PicklerState.prototype.stream__ = (function() {
  return this.stream__AB()
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$PicklerState = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$PicklerState.prototype = ScalaJS.c.scala_io_BytePickle$PicklerState.prototype;
ScalaJS.is.scala_io_BytePickle$PicklerState = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$PicklerState)))
});
ScalaJS.as.scala_io_BytePickle$PicklerState = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$PicklerState(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$PicklerState")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$PicklerState = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$PicklerState)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$PicklerState = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$PicklerState(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$PicklerState;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$PicklerState = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$PicklerState: 0
}, false, "scala.io.BytePickle$PicklerState", ScalaJS.data.java_lang_Object, {
  scala_io_BytePickle$PicklerState: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$PicklerState.prototype.$classData = ScalaJS.data.scala_io_BytePickle$PicklerState;
//@ sourceMappingURL=BytePickle$PicklerState.js.map
