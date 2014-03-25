/** @constructor */
ScalaJS.c.scala_scalajs_runtime_Long$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.BITS$1 = 0;
  this.BITS01$1 = 0;
  this.BITS2$1 = 0;
  this.MASK$1 = 0;
  this.MASK$und2$1 = 0;
  this.SIGN$undBIT$1 = 0;
  this.SIGN$undBIT$undVALUE$1 = 0;
  this.TWO$undPWR$und15$undDBL$1 = 0.0;
  this.TWO$undPWR$und16$undDBL$1 = 0.0;
  this.TWO$undPWR$und22$undDBL$1 = 0.0;
  this.TWO$undPWR$und31$undDBL$1 = 0.0;
  this.TWO$undPWR$und32$undDBL$1 = 0.0;
  this.TWO$undPWR$und44$undDBL$1 = 0.0;
  this.TWO$undPWR$und63$undDBL$1 = 0.0;
  this.zero$1 = null;
  this.one$1 = null;
  this.MinValue$1 = null;
  this.MaxValue$1 = null
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.constructor = ScalaJS.c.scala_scalajs_runtime_Long$;
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.BITS__p1__I = (function() {
  return 22
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.BITS01__p1__I = (function() {
  return 44
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.BITS2__p1__I = (function() {
  return 20
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.MASK__p1__I = (function() {
  return 4194303
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.MASK$und2__p1__I = (function() {
  return 1048575
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.SIGN$undBIT__p1__I = (function() {
  return 19
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.SIGN$undBIT$undVALUE__p1__I = (function() {
  return 524288
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.TWO$undPWR$und15$undDBL__p1__D = (function() {
  return 32768.0
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.TWO$undPWR$und16$undDBL__p1__D = (function() {
  return 65536.0
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.TWO$undPWR$und22$undDBL__p1__D = (function() {
  return 4194304.0
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.TWO$undPWR$und31$undDBL__p1__D = (function() {
  return 2.147483648E9
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.TWO$undPWR$und32$undDBL__p1__D = (function() {
  return 4.294967296E9
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.TWO$undPWR$und44$undDBL__p1__D = (function() {
  return 1.7592186044416E13
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.TWO$undPWR$und63$undDBL__p1__D = (function() {
  return 9.223372036854776E18
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.zero__Lscala_scalajs_runtime_Long = (function() {
  return this.zero$1
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.one__Lscala_scalajs_runtime_Long = (function() {
  return this.one$1
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromHexString__T__Lscala_scalajs_runtime_Long = (function(str) {
  ScalaJS.modules.scala_Predef().assert__Z__V((new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(str)).size__I() === 16));
  var l = (ScalaJS.g["parseInt"](ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(str, 10), 16) | 0);
  var m = ((ScalaJS.g["parseInt"](ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(str, 6, 7), 16) | 0) >> 2);
  var h = (ScalaJS.g["parseInt"](ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(str, 0, 5), 16) | 0);
  return this.masked__I__I__I__Lscala_scalajs_runtime_Long(l, m, h)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromString__T__Lscala_scalajs_runtime_Long = (function(str) {
  if ((ScalaJS.uC(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(str)).head__O()) === 45)) {
    return this.fromString__T__Lscala_scalajs_runtime_Long(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(str)).tail__O())).unary$und$minus__Lscala_scalajs_runtime_Long()
  } else {
    var maxLen = 9;
    return this.fromString0$1__p1__T__Lscala_scalajs_runtime_Long__T__I__Lscala_scalajs_runtime_Long(str, this.zero__Lscala_scalajs_runtime_Long(), str, maxLen)
  }
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromByte__B__Lscala_scalajs_runtime_Long = (function(value) {
  return this.fromInt__I__Lscala_scalajs_runtime_Long(value)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromShort__S__Lscala_scalajs_runtime_Long = (function(value) {
  return this.fromInt__I__Lscala_scalajs_runtime_Long(value)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromChar__C__Lscala_scalajs_runtime_Long = (function(value) {
  return this.fromInt__I__Lscala_scalajs_runtime_Long(value)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromInt__I__Lscala_scalajs_runtime_Long = (function(value) {
  var a0 = (value & 4194303);
  var a1 = ((value >> 22) & 4194303);
  if ((value < 0)) {
    var a2 = 1048575
  } else {
    var a2 = 0
  };
  return new ScalaJS.c.scala_scalajs_runtime_Long().init___I__I__I(a0, a1, a2)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromFloat__F__Lscala_scalajs_runtime_Long = (function(value) {
  return this.fromDouble__D__Lscala_scalajs_runtime_Long(value)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromDouble__D__Lscala_scalajs_runtime_Long = (function(value) {
  if (ScalaJS.modules.java_lang_Double().isNaN__D__Z(value)) {
    return this.zero__Lscala_scalajs_runtime_Long()
  } else {
    if ((value < (-9.223372036854776E18))) {
      return this.MinValue__Lscala_scalajs_runtime_Long()
    } else {
      if ((value >= 9.223372036854776E18)) {
        return this.MaxValue__Lscala_scalajs_runtime_Long()
      } else {
        if ((value < 0)) {
          return this.fromDouble__D__Lscala_scalajs_runtime_Long((-value)).unary$und$minus__Lscala_scalajs_runtime_Long()
        } else {
          var acc = value;
          if ((acc >= 1.7592186044416E13)) {
            var a2 = ((acc / 1.7592186044416E13) | 0)
          } else {
            var a2 = 0
          };
          acc = (acc - (a2 * 1.7592186044416E13));
          if ((acc >= 4194304.0)) {
            var a1 = ((acc / 4194304.0) | 0)
          } else {
            var a1 = 0
          };
          acc = (acc - (a1 * 4194304.0));
          var a0 = (acc | 0);
          return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(a0, a1, a2)
        }
      }
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.masked__I__I__I__Lscala_scalajs_runtime_Long = (function(l, m, h) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long((l & 4194303), (m & 4194303), (h & 1048575))
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.apply__I__I__I__Lscala_scalajs_runtime_Long = (function(l, m, h) {
  return new ScalaJS.c.scala_scalajs_runtime_Long().init___I__I__I(l, m, h)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.scala$scalajs$runtime$Long$$divModHelper__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long__Z__Z__Z__Lscala_scalajs_js_Array = (function(x, y, xNegative, yNegative, xMinValue) {
  var shift = (y.numberOfLeadingZeros__I() - x.numberOfLeadingZeros__I());
  var yShift = y.$$less$less__I__Lscala_scalajs_runtime_Long(shift);
  var absQuotRem = this.divide0$1__p1__I__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long__Lscala_scalajs_js_Array(shift, yShift, x, this.zero__Lscala_scalajs_runtime_Long());
  var absQuot = ScalaJS.as.scala_scalajs_runtime_Long(absQuotRem[0]);
  var absRem = ScalaJS.as.scala_scalajs_runtime_Long(absQuotRem[1]);
  if ((xNegative ^ yNegative)) {
    var quot = absQuot.unary$und$minus__Lscala_scalajs_runtime_Long()
  } else {
    var quot = absQuot
  };
  if ((xNegative && xMinValue)) {
    var rem = absRem.unary$und$minus__Lscala_scalajs_runtime_Long().$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(this.one__Lscala_scalajs_runtime_Long())
  } else {
    if (xNegative) {
      var rem = absRem.unary$und$minus__Lscala_scalajs_runtime_Long()
    } else {
      var rem = absRem
    }
  };
  return [quot, rem]
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.MinValue__Lscala_scalajs_runtime_Long = (function() {
  return this.MinValue$1
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.MaxValue__Lscala_scalajs_runtime_Long = (function() {
  return this.MaxValue$1
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromString0$1__p1__T__Lscala_scalajs_runtime_Long__T__I__Lscala_scalajs_runtime_Long = (function(str0, acc, str$1, maxLen$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(str0)).size__I() > 0)) {
      var x1 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(str0)).splitAt__I__Lscala_Tuple2(maxLen$1);
      matchEnd3: {
        if ((x1 !== null)) {
          var cur = ScalaJS.as.java_lang_String(x1.$$und1__O());
          var next = ScalaJS.as.java_lang_String(x1.$$und2__O());
          var x$3 = new ScalaJS.c.scala_Tuple2().init___O__O(cur, next);
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      var cur$2 = ScalaJS.as.java_lang_String(x$3.$$und1__O());
      var next$2 = ScalaJS.as.java_lang_String(x$3.$$und2__O());
      var macc = acc.$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(_$this.fromInt__I__Lscala_scalajs_runtime_Long((ScalaJS.modules.scala_math_package().pow__D__D__D(10.0, new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(cur$2)).size__I()) | 0)));
      var ival = ScalaJS.g["parseInt"](cur$2, 10);
      if (ScalaJS.g["isNaN"](ival)) {
        throw new ScalaJS.c.java_lang_NumberFormatException().init___T(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["For input string: \"", "\""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [str$1]))))
      };
      var cval = _$this.fromInt__I__Lscala_scalajs_runtime_Long((ival | 0));
      var temp$str0 = next$2;
      var temp$acc = macc.$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(cval);
      str0 = temp$str0;
      acc = temp$acc;
      continue tailCallLoop
    } else {
      return acc
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.divide0$1__p1__I__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long__Lscala_scalajs_js_Array = (function(shift, yShift, curX, quot) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (((shift < 0) || curX.scala$scalajs$runtime$Long$$isZero__Z())) {
      return [quot, curX]
    } else {
      var newX = curX.$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(yShift);
      if ((!newX.scala$scalajs$runtime$Long$$isNegative__Z())) {
        var temp$shift = (shift - 1);
        var temp$yShift = yShift.$$greater$greater__I__Lscala_scalajs_runtime_Long(1);
        var temp$curX = newX;
        var temp$quot = quot.scala$scalajs$runtime$Long$$setBit__I__Lscala_scalajs_runtime_Long(shift);
        shift = temp$shift;
        yShift = temp$yShift;
        curX = temp$curX;
        quot = temp$quot;
        continue tailCallLoop
      } else {
        var temp$shift = (shift - 1);
        var temp$yShift = yShift.$$greater$greater__I__Lscala_scalajs_runtime_Long(1);
        shift = temp$shift;
        yShift = temp$yShift;
        continue tailCallLoop
      }
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_scalajs_runtime_Long = this;
  this.zero$1 = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0);
  this.one$1 = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0);
  this.MinValue$1 = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288);
  this.MaxValue$1 = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287);
  return this
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.MaxValue__ = (function() {
  return this.MaxValue__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.MinValue__ = (function() {
  return this.MinValue__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.scala$scalajs$runtime$Long$$divModHelper__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long__Z__Z__Z__ = (function(x, y, xNegative, yNegative, xMinValue) {
  return this.scala$scalajs$runtime$Long$$divModHelper__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long__Z__Z__Z__Lscala_scalajs_js_Array(x, y, xNegative, yNegative, xMinValue)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.apply__I__I__I__ = (function(l, m, h) {
  return this.apply__I__I__I__Lscala_scalajs_runtime_Long(l, m, h)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.masked__I__I__I__ = (function(l$2, m$2, h$2) {
  return this.masked__I__I__I__Lscala_scalajs_runtime_Long(l$2, m$2, h$2)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromDouble__D__ = (function(value) {
  return this.fromDouble__D__Lscala_scalajs_runtime_Long(value)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromFloat__F__ = (function(value$2) {
  return this.fromFloat__F__Lscala_scalajs_runtime_Long(value$2)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromInt__I__ = (function(value$3) {
  return this.fromInt__I__Lscala_scalajs_runtime_Long(value$3)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromChar__C__ = (function(value$4) {
  return this.fromChar__C__Lscala_scalajs_runtime_Long(value$4)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromShort__S__ = (function(value$5) {
  return this.fromShort__S__Lscala_scalajs_runtime_Long(value$5)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromByte__B__ = (function(value$6) {
  return this.fromByte__B__Lscala_scalajs_runtime_Long(value$6)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromString__T__ = (function(str) {
  return this.fromString__T__Lscala_scalajs_runtime_Long(str)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromHexString__T__ = (function(str$2) {
  return this.fromHexString__T__Lscala_scalajs_runtime_Long(str$2)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.fromRuntimeLong__Lscala_scalajs_runtime_Long__ = (function(x$2) {
  return ScalaJS.bJ(this.fromRuntimeLong__Lscala_scalajs_runtime_Long__J(x$2))
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.toRuntimeLong__J__ = (function(x$3) {
  return this.toRuntimeLong__J__Lscala_scalajs_runtime_Long(x$3)
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.one__ = (function() {
  return this.one__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.zero__ = (function() {
  return this.zero__Lscala_scalajs_runtime_Long()
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_runtime_Long$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_runtime_Long$.prototype = ScalaJS.c.scala_scalajs_runtime_Long$.prototype;
ScalaJS.is.scala_scalajs_runtime_Long$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_runtime_Long$)))
});
ScalaJS.as.scala_scalajs_runtime_Long$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_runtime_Long$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.runtime.Long")
  }
});
ScalaJS.isArrayOf.scala_scalajs_runtime_Long$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_runtime_Long$)))
});
ScalaJS.asArrayOf.scala_scalajs_runtime_Long$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_runtime_Long$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.runtime.Long;", depth)
  }
});
ScalaJS.data.scala_scalajs_runtime_Long$ = new ScalaJS.ClassTypeData({
  scala_scalajs_runtime_Long$: 0
}, false, "scala.scalajs.runtime.Long$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_runtime_Long$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_runtime_Long$.prototype.$classData = ScalaJS.data.scala_scalajs_runtime_Long$;
ScalaJS.moduleInstances.scala_scalajs_runtime_Long = undefined;
ScalaJS.modules.scala_scalajs_runtime_Long = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_runtime_Long)) {
    ScalaJS.moduleInstances.scala_scalajs_runtime_Long = new ScalaJS.c.scala_scalajs_runtime_Long$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_runtime_Long
});
//@ sourceMappingURL=Long$.js.map
