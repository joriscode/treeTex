/** @constructor */
ScalaJS.c.scala_io_BytePickle$$anon$4 = (function() {
  ScalaJS.c.scala_io_BytePickle$PU.call(this);
  this.x$4$2 = null
});
ScalaJS.c.scala_io_BytePickle$$anon$4.prototype = new ScalaJS.inheritable.scala_io_BytePickle$PU();
ScalaJS.c.scala_io_BytePickle$$anon$4.prototype.constructor = ScalaJS.c.scala_io_BytePickle$$anon$4;
ScalaJS.c.scala_io_BytePickle$$anon$4.prototype.appP__O__AB__AB = (function(a, state) {
  if ((!ScalaJS.anyEqEq(this.x$4$2, a))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(((("value to be pickled (" + a) + ") != ") + this.x$4$2))
  } else {
    return state
  }
});
ScalaJS.c.scala_io_BytePickle$$anon$4.prototype.appU__AB__Lscala_Tuple2 = (function(state) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.x$4$2, state)
});
ScalaJS.c.scala_io_BytePickle$$anon$4.prototype.init___O = (function(x$4) {
  this.x$4$2 = x$4;
  ScalaJS.c.scala_io_BytePickle$PU.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$$anon$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$$anon$4.prototype = ScalaJS.c.scala_io_BytePickle$$anon$4.prototype;
ScalaJS.is.scala_io_BytePickle$$anon$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$$anon$4)))
});
ScalaJS.as.scala_io_BytePickle$$anon$4 = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$$anon$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$$anon$4")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$$anon$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$$anon$4)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$$anon$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$$anon$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$$anon$4;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$$anon$4 = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$$anon$4: 0
}, false, "scala.io.BytePickle$$anon$4", ScalaJS.data.scala_io_BytePickle$PU, {
  scala_io_BytePickle$$anon$4: 1,
  scala_io_BytePickle$PU: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$$anon$4.prototype.$classData = ScalaJS.data.scala_io_BytePickle$$anon$4;
//@ sourceMappingURL=BytePickle$$anon$4.js.map
