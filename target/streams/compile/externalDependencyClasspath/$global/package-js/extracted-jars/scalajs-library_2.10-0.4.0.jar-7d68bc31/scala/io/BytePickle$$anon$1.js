/** @constructor */
ScalaJS.c.scala_io_BytePickle$$anon$1 = (function() {
  ScalaJS.c.scala_io_BytePickle$PU.call(this)
});
ScalaJS.c.scala_io_BytePickle$$anon$1.prototype = new ScalaJS.inheritable.scala_io_BytePickle$PU();
ScalaJS.c.scala_io_BytePickle$$anon$1.prototype.constructor = ScalaJS.c.scala_io_BytePickle$$anon$1;
ScalaJS.c.scala_io_BytePickle$$anon$1.prototype.appP__Lscala_io_BytePickle$RefDef__AB__AB = (function(b, s) {
  var x1 = b;
  if (ScalaJS.is.scala_io_BytePickle$Ref(x1)) {
    return ScalaJS.asArrayOf.scala_Byte(ScalaJS.modules.scala_Array().concat__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Byte.getArrayOf().getArrayOf(), [s, ScalaJS.asArrayOf.scala_Byte(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapByteArray__AB__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Byte.getArrayOf(), [0])), ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1)]), 1)), ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1)
  };
  if (ScalaJS.is.scala_io_BytePickle$Def(x1)) {
    return ScalaJS.asArrayOf.scala_Byte(ScalaJS.modules.scala_Array().concat__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Byte.getArrayOf().getArrayOf(), [s, ScalaJS.asArrayOf.scala_Byte(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapByteArray__AB__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Byte.getArrayOf(), [1])), ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1)]), 1)), ScalaJS.modules.scala_reflect_ClassTag().Byte__Lscala_reflect_ClassTag()), 1)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_io_BytePickle$$anon$1.prototype.appU__AB__Lscala_Tuple2 = (function(s) {
  if ((s.underlying[0] === 0)) {
    return new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_io_BytePickle$Ref().init___(), ScalaJS.modules.scala_Predef().byteArrayOps__AB__Lscala_collection_mutable_ArrayOps(s).slice__I__I__O(1, s.underlying.length))
  } else {
    return new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_io_BytePickle$Def().init___(), ScalaJS.modules.scala_Predef().byteArrayOps__AB__Lscala_collection_mutable_ArrayOps(s).slice__I__I__O(1, s.underlying.length))
  }
});
ScalaJS.c.scala_io_BytePickle$$anon$1.prototype.appP__O__AB__AB = (function(a, state) {
  return this.appP__Lscala_io_BytePickle$RefDef__AB__AB(ScalaJS.as.scala_io_BytePickle$RefDef(a), state)
});
ScalaJS.c.scala_io_BytePickle$$anon$1.prototype.appP__Lscala_io_BytePickle$RefDef__AB__ = (function(b, s) {
  return this.appP__Lscala_io_BytePickle$RefDef__AB__AB(b, s)
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$$anon$1.prototype = ScalaJS.c.scala_io_BytePickle$$anon$1.prototype;
ScalaJS.is.scala_io_BytePickle$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$$anon$1)))
});
ScalaJS.as.scala_io_BytePickle$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$$anon$1)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$$anon$1;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$$anon$1 = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$$anon$1: 0
}, false, "scala.io.BytePickle$$anon$1", ScalaJS.data.scala_io_BytePickle$PU, {
  scala_io_BytePickle$$anon$1: 1,
  scala_io_BytePickle$PU: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$$anon$1.prototype.$classData = ScalaJS.data.scala_io_BytePickle$$anon$1;
//@ sourceMappingURL=BytePickle$$anon$1.js.map
