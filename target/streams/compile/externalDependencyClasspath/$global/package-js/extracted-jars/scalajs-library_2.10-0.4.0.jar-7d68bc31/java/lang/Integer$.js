/** @constructor */
ScalaJS.c.java_lang_Integer$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TYPE$1 = null;
  this.MIN$undVALUE$1 = 0;
  this.MAX$undVALUE$1 = 0;
  this.SIZE$1 = 0
});
ScalaJS.c.java_lang_Integer$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Integer$.prototype.constructor = ScalaJS.c.java_lang_Integer$;
ScalaJS.c.java_lang_Integer$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.java_lang_Integer$.prototype.MIN$undVALUE__I = (function() {
  return this.MIN$undVALUE$1
});
ScalaJS.c.java_lang_Integer$.prototype.MAX$undVALUE__I = (function() {
  return this.MAX$undVALUE$1
});
ScalaJS.c.java_lang_Integer$.prototype.SIZE__I = (function() {
  return this.SIZE$1
});
ScalaJS.c.java_lang_Integer$.prototype.valueOf__I__Ljava_lang_Integer = (function(intValue) {
  return new ScalaJS.c.java_lang_Integer().init___I(intValue)
});
ScalaJS.c.java_lang_Integer$.prototype.parseInt__T__I = (function(s) {
  return this.parseInt__T__I__I(s, 10)
});
ScalaJS.c.java_lang_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
  var res = ScalaJS.g["parseInt"](s, radix);
  if (ScalaJS.g["isNaN"](res)) {
    throw new ScalaJS.c.java_lang_NumberFormatException().init___T(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["For input string: \"", "\""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [s]))))
  } else {
    return (res | 0)
  }
});
ScalaJS.c.java_lang_Integer$.prototype.toString__I__T = (function(i) {
  return this.valueOf__I__Ljava_lang_Integer(i).toString__T()
});
ScalaJS.c.java_lang_Integer$.prototype.bitCount__I__I = (function(i) {
  var t1 = (i - ((i >> 1) & 1431655765));
  var t2 = ((t1 & 858993459) + ((t1 >> 2) & 858993459));
  return ((((t2 + (t2 >> 4)) & 252645135) * 16843009) >> 24)
});
ScalaJS.c.java_lang_Integer$.prototype.reverseBytes__I__I = (function(i) {
  var byte3 = (i >>> 24);
  var byte2 = ((i >>> 8) & 65280);
  var byte1 = ((i << 8) & 16711680);
  var byte0 = (i << 24);
  return (((byte0 | byte1) | byte2) | byte3)
});
ScalaJS.c.java_lang_Integer$.prototype.rotateLeft__I__I__I = (function(i, distance) {
  return ((i << distance) | (i >>> (32 - distance)))
});
ScalaJS.c.java_lang_Integer$.prototype.rotateRight__I__I__I = (function(i, distance) {
  return ((i >>> distance) | (i << (32 - distance)))
});
ScalaJS.c.java_lang_Integer$.prototype.signum__I__I = (function(i) {
  if ((i === 0)) {
    return 0
  } else {
    if ((i < 0)) {
      return -1
    } else {
      return 1
    }
  }
});
ScalaJS.c.java_lang_Integer$.prototype.numberOfLeadingZeros__I__I = (function(i) {
  var x = i;
  x = (x | (x >>> 1));
  x = (x | (x >>> 2));
  x = (x | (x >>> 4));
  x = (x | (x >>> 8));
  x = (x | (x >>> 16));
  return (32 - this.bitCount__I__I(x))
});
ScalaJS.c.java_lang_Integer$.prototype.numberOfTrailingZeros__I__I = (function(i) {
  return this.bitCount__I__I(((i & (-i)) - 1))
});
ScalaJS.c.java_lang_Integer$.prototype.toBinaryString__I__T = (function(i) {
  return this.toStringBase__p1__I__I__T(i, 2)
});
ScalaJS.c.java_lang_Integer$.prototype.toHexString__I__T = (function(i) {
  return this.toStringBase__p1__I__I__T(i, 16)
});
ScalaJS.c.java_lang_Integer$.prototype.toOctalString__I__T = (function(i) {
  return this.toStringBase__p1__I__I__T(i, 8)
});
ScalaJS.c.java_lang_Integer$.prototype.toStringBase__p1__I__I__T = (function(i, base) {
  if ((i > 2147483647)) {
    return ("+" + i["toString"](base))
  } else {
    if ((i < -2147483648)) {
      return i["toString"](base)
    } else {
      return (i >>> 0)["toString"](base)
    }
  }
});
ScalaJS.c.java_lang_Integer$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Integer = this;
  this.TYPE$1 = ScalaJS.data.scala_Int.getClassOf();
  this.MIN$undVALUE$1 = -2147483648;
  this.MAX$undVALUE$1 = 2147483647;
  this.SIZE$1 = 32;
  return this
});
ScalaJS.c.java_lang_Integer$.prototype.toOctalString__I__ = (function(i) {
  return this.toOctalString__I__T(i)
});
ScalaJS.c.java_lang_Integer$.prototype.toHexString__I__ = (function(i$2) {
  return this.toHexString__I__T(i$2)
});
ScalaJS.c.java_lang_Integer$.prototype.toBinaryString__I__ = (function(i$3) {
  return this.toBinaryString__I__T(i$3)
});
ScalaJS.c.java_lang_Integer$.prototype.numberOfTrailingZeros__I__ = (function(i$4) {
  return ScalaJS.bI(this.numberOfTrailingZeros__I__I(i$4))
});
ScalaJS.c.java_lang_Integer$.prototype.numberOfLeadingZeros__I__ = (function(i$5) {
  return ScalaJS.bI(this.numberOfLeadingZeros__I__I(i$5))
});
ScalaJS.c.java_lang_Integer$.prototype.signum__I__ = (function(i$6) {
  return ScalaJS.bI(this.signum__I__I(i$6))
});
ScalaJS.c.java_lang_Integer$.prototype.rotateRight__I__I__ = (function(i$7, distance) {
  return ScalaJS.bI(this.rotateRight__I__I__I(i$7, distance))
});
ScalaJS.c.java_lang_Integer$.prototype.rotateLeft__I__I__ = (function(i$8, distance$2) {
  return ScalaJS.bI(this.rotateLeft__I__I__I(i$8, distance$2))
});
ScalaJS.c.java_lang_Integer$.prototype.reverseBytes__I__ = (function(i$9) {
  return ScalaJS.bI(this.reverseBytes__I__I(i$9))
});
ScalaJS.c.java_lang_Integer$.prototype.bitCount__I__ = (function(i$10) {
  return ScalaJS.bI(this.bitCount__I__I(i$10))
});
ScalaJS.c.java_lang_Integer$.prototype.toString__I__ = (function(i$11) {
  return this.toString__I__T(i$11)
});
ScalaJS.c.java_lang_Integer$.prototype.parseInt__T__I__ = (function(s, radix) {
  return ScalaJS.bI(this.parseInt__T__I__I(s, radix))
});
ScalaJS.c.java_lang_Integer$.prototype.parseInt__T__ = (function(s$2) {
  return ScalaJS.bI(this.parseInt__T__I(s$2))
});
ScalaJS.c.java_lang_Integer$.prototype.valueOf__I__ = (function(intValue) {
  return this.valueOf__I__Ljava_lang_Integer(intValue)
});
ScalaJS.c.java_lang_Integer$.prototype.SIZE__ = (function() {
  return ScalaJS.bI(this.SIZE__I())
});
ScalaJS.c.java_lang_Integer$.prototype.MAX$undVALUE__ = (function() {
  return ScalaJS.bI(this.MAX$undVALUE__I())
});
ScalaJS.c.java_lang_Integer$.prototype.MIN$undVALUE__ = (function() {
  return ScalaJS.bI(this.MIN$undVALUE__I())
});
ScalaJS.c.java_lang_Integer$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Integer$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Integer$.prototype = ScalaJS.c.java_lang_Integer$.prototype;
ScalaJS.is.java_lang_Integer$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Integer$)))
});
ScalaJS.as.java_lang_Integer$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Integer$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Integer")
  }
});
ScalaJS.isArrayOf.java_lang_Integer$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Integer$)))
});
ScalaJS.asArrayOf.java_lang_Integer$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Integer$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Integer;", depth)
  }
});
ScalaJS.data.java_lang_Integer$ = new ScalaJS.ClassTypeData({
  java_lang_Integer$: 0
}, false, "java.lang.Integer$", ScalaJS.data.java_lang_Object, {
  java_lang_Integer$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Integer$.prototype.$classData = ScalaJS.data.java_lang_Integer$;
ScalaJS.moduleInstances.java_lang_Integer = undefined;
ScalaJS.modules.java_lang_Integer = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Integer)) {
    ScalaJS.moduleInstances.java_lang_Integer = new ScalaJS.c.java_lang_Integer$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Integer
});
//@ sourceMappingURL=Integer$.js.map
