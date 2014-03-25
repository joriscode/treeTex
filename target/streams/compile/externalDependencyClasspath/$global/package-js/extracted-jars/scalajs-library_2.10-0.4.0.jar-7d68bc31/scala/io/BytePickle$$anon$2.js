/** @constructor */
ScalaJS.c.scala_io_BytePickle$$anon$2 = (function() {
  ScalaJS.c.scala_io_BytePickle$PU.call(this)
});
ScalaJS.c.scala_io_BytePickle$$anon$2.prototype = new ScalaJS.inheritable.scala_io_BytePickle$PU();
ScalaJS.c.scala_io_BytePickle$$anon$2.prototype.constructor = ScalaJS.c.scala_io_BytePickle$$anon$2;
ScalaJS.c.scala_io_BytePickle$$anon$2.prototype.appP__I__AB__AB = (function(n, s$2) {
  return ScalaJS.asArrayOf.scala_Byte(ScalaJS.modules.scala_Array().concat__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Byte.getArrayOf().getArrayOf(), [s$2, ScalaJS.modules.scala_io_BytePickle().nat2Bytes__I__AB(n)]), 1)), ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1)
});
ScalaJS.c.scala_io_BytePickle$$anon$2.prototype.appU__AB__Lscala_Tuple2 = (function(s) {
  var num = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(this.readNat$1__p2__AB__Lscala_runtime_IntRef__I(s, num)), ScalaJS.modules.scala_Predef().byteArrayOps__AB__Lscala_collection_mutable_ArrayOps(s).slice__I__I__O(num.elem$1, s.underlying.length))
});
ScalaJS.c.scala_io_BytePickle$$anon$2.prototype.appP__O__AB__AB = (function(a, state) {
  return this.appP__I__AB__AB(ScalaJS.uI(a), state)
});
ScalaJS.c.scala_io_BytePickle$$anon$2.prototype.readNat$1__p2__AB__Lscala_runtime_IntRef__I = (function(s$1, num$1) {
  var b = 0;
  var x = 0;
  do {
    b = s$1.underlying[num$1.elem$1];
    num$1.elem$1 = (num$1.elem$1 + 1);
    x = ((x << 7) + (b & 127))
  } while (((b & 128) !== 0));
  return x
});
ScalaJS.c.scala_io_BytePickle$$anon$2.prototype.appP__I__AB__ = (function(n, s) {
  return this.appP__I__AB__AB(n, s)
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$$anon$2.prototype = ScalaJS.c.scala_io_BytePickle$$anon$2.prototype;
ScalaJS.is.scala_io_BytePickle$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$$anon$2)))
});
ScalaJS.as.scala_io_BytePickle$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$$anon$2)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$$anon$2;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$$anon$2 = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$$anon$2: 0
}, false, "scala.io.BytePickle$$anon$2", ScalaJS.data.scala_io_BytePickle$PU, {
  scala_io_BytePickle$$anon$2: 1,
  scala_io_BytePickle$PU: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$$anon$2.prototype.$classData = ScalaJS.data.scala_io_BytePickle$$anon$2;
//@ sourceMappingURL=BytePickle$$anon$2.js.map
