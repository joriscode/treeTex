/** @constructor */
ScalaJS.c.scala_io_BytePickle$$anon$8 = (function() {
  ScalaJS.c.scala_io_BytePickle$SPU.call(this)
});
ScalaJS.c.scala_io_BytePickle$$anon$8.prototype = new ScalaJS.inheritable.scala_io_BytePickle$SPU();
ScalaJS.c.scala_io_BytePickle$$anon$8.prototype.constructor = ScalaJS.c.scala_io_BytePickle$$anon$8;
ScalaJS.c.scala_io_BytePickle$$anon$8.prototype.appP__I__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState = (function(n, s) {
  return new ScalaJS.c.scala_io_BytePickle$PicklerState().init___AB__Lscala_io_BytePickle$PicklerEnv(ScalaJS.asArrayOf.scala_Byte(ScalaJS.modules.scala_Array().concat__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Byte.getArrayOf().getArrayOf(), [s.stream__AB(), ScalaJS.modules.scala_io_BytePickle().nat2Bytes__I__AB(n)]), 1)), ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1), s.dict__Lscala_io_BytePickle$PicklerEnv())
});
ScalaJS.c.scala_io_BytePickle$$anon$8.prototype.appU__Lscala_io_BytePickle$UnPicklerState__Lscala_Tuple2 = (function(s) {
  var num = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(this.readNat$2__p2__Lscala_io_BytePickle$UnPicklerState__Lscala_runtime_IntRef__I(s, num)), new ScalaJS.c.scala_io_BytePickle$UnPicklerState().init___AB__Lscala_io_BytePickle$UnPicklerEnv(ScalaJS.asArrayOf.scala_Byte(ScalaJS.modules.scala_Predef().byteArrayOps__AB__Lscala_collection_mutable_ArrayOps(s.stream__AB()).slice__I__I__O(num.elem$1, s.stream__AB().underlying.length), 1), s.dict__Lscala_io_BytePickle$UnPicklerEnv()))
});
ScalaJS.c.scala_io_BytePickle$$anon$8.prototype.appP__O__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState = (function(a, state) {
  return this.appP__I__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState(ScalaJS.uI(a), state)
});
ScalaJS.c.scala_io_BytePickle$$anon$8.prototype.readNat$2__p2__Lscala_io_BytePickle$UnPicklerState__Lscala_runtime_IntRef__I = (function(s$2, num$2) {
  var b = 0;
  var x = 0;
  do {
    b = s$2.stream__AB().underlying[num$2.elem$1];
    num$2.elem$1 = (num$2.elem$1 + 1);
    x = ((x << 7) + (b & 127))
  } while (((b & 128) !== 0));
  return x
});
ScalaJS.c.scala_io_BytePickle$$anon$8.prototype.appP__I__Lscala_io_BytePickle$PicklerState__ = (function(n, s) {
  return this.appP__I__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState(n, s)
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$$anon$8 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$$anon$8.prototype = ScalaJS.c.scala_io_BytePickle$$anon$8.prototype;
ScalaJS.is.scala_io_BytePickle$$anon$8 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$$anon$8)))
});
ScalaJS.as.scala_io_BytePickle$$anon$8 = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$$anon$8(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$$anon$8")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$$anon$8 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$$anon$8)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$$anon$8 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$$anon$8(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$$anon$8;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$$anon$8 = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$$anon$8: 0
}, false, "scala.io.BytePickle$$anon$8", ScalaJS.data.scala_io_BytePickle$SPU, {
  scala_io_BytePickle$$anon$8: 1,
  scala_io_BytePickle$SPU: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$$anon$8.prototype.$classData = ScalaJS.data.scala_io_BytePickle$$anon$8;
//@ sourceMappingURL=BytePickle$$anon$8.js.map
