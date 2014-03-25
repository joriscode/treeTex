/** @constructor */
ScalaJS.c.scala_io_BytePickle$$anon$6 = (function() {
  ScalaJS.c.scala_io_BytePickle$PU.call(this);
  this.f$1$2 = null;
  this.pa$2$2 = null;
  this.k$1$2 = null
});
ScalaJS.c.scala_io_BytePickle$$anon$6.prototype = new ScalaJS.inheritable.scala_io_BytePickle$PU();
ScalaJS.c.scala_io_BytePickle$$anon$6.prototype.constructor = ScalaJS.c.scala_io_BytePickle$$anon$6;
ScalaJS.c.scala_io_BytePickle$$anon$6.prototype.appP__O__AB__AB = (function(b, s) {
  var a = this.f$1$2.apply__O__O(b);
  var sPrime = this.pa$2$2.appP__O__AB__AB(a, s);
  var pb = ScalaJS.as.scala_io_BytePickle$PU(this.k$1$2.apply__O__O(a));
  var sPrimePrime = pb.appP__O__AB__AB(b, sPrime);
  return sPrimePrime
});
ScalaJS.c.scala_io_BytePickle$$anon$6.prototype.appU__AB__Lscala_Tuple2 = (function(s) {
  var resPa = this.pa$2$2.appU__AB__Lscala_Tuple2(s);
  var a = resPa.$$und1__O();
  var sPrime = ScalaJS.asArrayOf.scala_Byte(resPa.$$und2__O(), 1);
  var pb = ScalaJS.as.scala_io_BytePickle$PU(this.k$1$2.apply__O__O(a));
  return pb.appU__AB__Lscala_Tuple2(sPrime)
});
ScalaJS.c.scala_io_BytePickle$$anon$6.prototype.init___Lscala_Function1__Lscala_io_BytePickle$PU__Lscala_Function1 = (function(f$1, pa$2, k$1) {
  this.f$1$2 = f$1;
  this.pa$2$2 = pa$2;
  this.k$1$2 = k$1;
  ScalaJS.c.scala_io_BytePickle$PU.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$$anon$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$$anon$6.prototype = ScalaJS.c.scala_io_BytePickle$$anon$6.prototype;
ScalaJS.is.scala_io_BytePickle$$anon$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$$anon$6)))
});
ScalaJS.as.scala_io_BytePickle$$anon$6 = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$$anon$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$$anon$6")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$$anon$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$$anon$6)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$$anon$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$$anon$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$$anon$6;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$$anon$6 = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$$anon$6: 0
}, false, "scala.io.BytePickle$$anon$6", ScalaJS.data.scala_io_BytePickle$PU, {
  scala_io_BytePickle$$anon$6: 1,
  scala_io_BytePickle$PU: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$$anon$6.prototype.$classData = ScalaJS.data.scala_io_BytePickle$$anon$6;
//@ sourceMappingURL=BytePickle$$anon$6.js.map
