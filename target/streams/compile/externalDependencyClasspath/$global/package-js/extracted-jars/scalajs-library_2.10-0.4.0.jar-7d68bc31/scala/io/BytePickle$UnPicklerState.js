/** @constructor */
ScalaJS.c.scala_io_BytePickle$UnPicklerState = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.stream$1 = null;
  this.dict$1 = null
});
ScalaJS.c.scala_io_BytePickle$UnPicklerState.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_BytePickle$UnPicklerState.prototype.constructor = ScalaJS.c.scala_io_BytePickle$UnPicklerState;
ScalaJS.c.scala_io_BytePickle$UnPicklerState.prototype.stream__AB = (function() {
  return this.stream$1
});
ScalaJS.c.scala_io_BytePickle$UnPicklerState.prototype.dict__Lscala_io_BytePickle$UnPicklerEnv = (function() {
  return this.dict$1
});
ScalaJS.c.scala_io_BytePickle$UnPicklerState.prototype.init___AB__Lscala_io_BytePickle$UnPicklerEnv = (function(stream, dict) {
  this.stream$1 = stream;
  this.dict$1 = dict;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_io_BytePickle$UnPicklerState.prototype.dict__ = (function() {
  return this.dict__Lscala_io_BytePickle$UnPicklerEnv()
});
ScalaJS.c.scala_io_BytePickle$UnPicklerState.prototype.stream__ = (function() {
  return this.stream__AB()
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$UnPicklerState = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$UnPicklerState.prototype = ScalaJS.c.scala_io_BytePickle$UnPicklerState.prototype;
ScalaJS.is.scala_io_BytePickle$UnPicklerState = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$UnPicklerState)))
});
ScalaJS.as.scala_io_BytePickle$UnPicklerState = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$UnPicklerState(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$UnPicklerState")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$UnPicklerState = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$UnPicklerState)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$UnPicklerState = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$UnPicklerState(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$UnPicklerState;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$UnPicklerState = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$UnPicklerState: 0
}, false, "scala.io.BytePickle$UnPicklerState", ScalaJS.data.java_lang_Object, {
  scala_io_BytePickle$UnPicklerState: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$UnPicklerState.prototype.$classData = ScalaJS.data.scala_io_BytePickle$UnPicklerState;
//@ sourceMappingURL=BytePickle$UnPicklerState.js.map
