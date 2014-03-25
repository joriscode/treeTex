/** @constructor */
ScalaJS.c.scala_io_BytePickle$$anon$7 = (function() {
  ScalaJS.c.scala_io_BytePickle$SPU.call(this);
  this.f$2$2 = null;
  this.pa$3$2 = null;
  this.k$2$2 = null
});
ScalaJS.c.scala_io_BytePickle$$anon$7.prototype = new ScalaJS.inheritable.scala_io_BytePickle$SPU();
ScalaJS.c.scala_io_BytePickle$$anon$7.prototype.constructor = ScalaJS.c.scala_io_BytePickle$$anon$7;
ScalaJS.c.scala_io_BytePickle$$anon$7.prototype.appP__O__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState = (function(b, s) {
  var a = this.f$2$2.apply__O__O(b);
  var sPrime = this.pa$3$2.appP__O__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState(a, s);
  var pb = ScalaJS.as.scala_io_BytePickle$SPU(this.k$2$2.apply__O__O(a));
  return pb.appP__O__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState(b, sPrime)
});
ScalaJS.c.scala_io_BytePickle$$anon$7.prototype.appU__Lscala_io_BytePickle$UnPicklerState__Lscala_Tuple2 = (function(s) {
  var resPa = this.pa$3$2.appU__Lscala_io_BytePickle$UnPicklerState__Lscala_Tuple2(s);
  var a = resPa.$$und1__O();
  var sPrime = ScalaJS.as.scala_io_BytePickle$UnPicklerState(resPa.$$und2__O());
  var pb = ScalaJS.as.scala_io_BytePickle$SPU(this.k$2$2.apply__O__O(a));
  return pb.appU__Lscala_io_BytePickle$UnPicklerState__Lscala_Tuple2(sPrime)
});
ScalaJS.c.scala_io_BytePickle$$anon$7.prototype.init___Lscala_Function1__Lscala_io_BytePickle$SPU__Lscala_Function1 = (function(f$2, pa$3, k$2) {
  this.f$2$2 = f$2;
  this.pa$3$2 = pa$3;
  this.k$2$2 = k$2;
  ScalaJS.c.scala_io_BytePickle$SPU.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$$anon$7 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$$anon$7.prototype = ScalaJS.c.scala_io_BytePickle$$anon$7.prototype;
ScalaJS.is.scala_io_BytePickle$$anon$7 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$$anon$7)))
});
ScalaJS.as.scala_io_BytePickle$$anon$7 = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$$anon$7(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$$anon$7")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$$anon$7 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$$anon$7)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$$anon$7 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$$anon$7(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$$anon$7;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$$anon$7 = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$$anon$7: 0
}, false, "scala.io.BytePickle$$anon$7", ScalaJS.data.scala_io_BytePickle$SPU, {
  scala_io_BytePickle$$anon$7: 1,
  scala_io_BytePickle$SPU: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$$anon$7.prototype.$classData = ScalaJS.data.scala_io_BytePickle$$anon$7;
//@ sourceMappingURL=BytePickle$$anon$7.js.map
