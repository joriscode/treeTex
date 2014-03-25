/** @constructor */
ScalaJS.c.scala_io_BytePickle$$anon$5 = (function() {
  ScalaJS.c.scala_io_BytePickle$SPU.call(this);
  this.x$5$2 = null
});
ScalaJS.c.scala_io_BytePickle$$anon$5.prototype = new ScalaJS.inheritable.scala_io_BytePickle$SPU();
ScalaJS.c.scala_io_BytePickle$$anon$5.prototype.constructor = ScalaJS.c.scala_io_BytePickle$$anon$5;
ScalaJS.c.scala_io_BytePickle$$anon$5.prototype.appP__O__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState = (function(a, state) {
  if ((!ScalaJS.anyEqEq(this.x$5$2, a))) {
    return state
  } else {
    return state
  }
});
ScalaJS.c.scala_io_BytePickle$$anon$5.prototype.appU__Lscala_io_BytePickle$UnPicklerState__Lscala_Tuple2 = (function(state) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.x$5$2, state)
});
ScalaJS.c.scala_io_BytePickle$$anon$5.prototype.init___O = (function(x$5) {
  this.x$5$2 = x$5;
  ScalaJS.c.scala_io_BytePickle$SPU.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$$anon$5.prototype = ScalaJS.c.scala_io_BytePickle$$anon$5.prototype;
ScalaJS.is.scala_io_BytePickle$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$$anon$5)))
});
ScalaJS.as.scala_io_BytePickle$$anon$5 = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$$anon$5")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$$anon$5)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$$anon$5;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$$anon$5 = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$$anon$5: 0
}, false, "scala.io.BytePickle$$anon$5", ScalaJS.data.scala_io_BytePickle$SPU, {
  scala_io_BytePickle$$anon$5: 1,
  scala_io_BytePickle$SPU: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$$anon$5.prototype.$classData = ScalaJS.data.scala_io_BytePickle$$anon$5;
//@ sourceMappingURL=BytePickle$$anon$5.js.map
