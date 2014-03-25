/** @constructor */
ScalaJS.c.scala_collection_immutable_NumericRange$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.defaultOrdering$1 = null
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.constructor = ScalaJS.c.scala_collection_immutable_NumericRange$;
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.count__O__O__O__Z__Lscala_math_Integral__I = (function(start$2, end$2, step$2, isInclusive, num) {
  var zero = num.zero__O();
  var upward = num.lt__O__O__Z(start$2, end$2);
  var posStep = num.gt__O__O__Z(step$2, zero);
  if (ScalaJS.anyEqEq(step$2, zero)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("step cannot be 0.")
  } else {
    if (ScalaJS.anyEqEq(start$2, end$2)) {
      if (isInclusive) {
        return 1
      } else {
        return 0
      }
    } else {
      if ((upward !== posStep)) {
        return 0
      } else {
        var diff = num.minus__O__O__O(end$2, start$2);
        var jumps = num.toLong__O__J(num.quot__O__O__O(diff, step$2));
        var remainder = num.rem__O__O__O(diff, step$2);
        var jsx$4 = jumps;
        var jsx$3 = ScalaJS.modules.scala_scalajs_runtime_Long();
        if (((!isInclusive) && ScalaJS.anyEqEq(zero, remainder))) {
          var jsx$2 = 0
        } else {
          var jsx$2 = 1
        };
        var jsx$1 = jsx$3.fromInt__I__Lscala_scalajs_runtime_Long(jsx$2);
        var longCount = jsx$4.$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(jsx$1);
        var isOverflow = (longCount.equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0)) && (num.lt__O__O__Z(num.plus__O__O__O(start$2, step$2), end$2) === upward));
        if (((longCount.$$greater__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(2147483647)) || longCount.$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0))) || isOverflow)) {
          if (isInclusive) {
            var word = "to"
          } else {
            var word = "until"
          };
          var descr = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [start$2, word, end$2, "by", step$2]))).mkString__T__T(" ");
          throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("" + descr) + ": seqs cannot contain more than Int.MaxValue elements."))
        };
        return longCount.toInt__I()
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.apply__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Exclusive = (function(start, end, step, num) {
  return new ScalaJS.c.scala_collection_immutable_NumericRange$Exclusive().init___O__O__O__Lscala_math_Integral(start, end, step, num)
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.inclusive__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Inclusive = (function(start, end, step, num) {
  return new ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive().init___O__O__O__Lscala_math_Integral(start, end, step, num)
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.defaultOrdering__Lscala_collection_immutable_Map = (function() {
  return this.defaultOrdering$1
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_NumericRange()
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_NumericRange = this;
  this.defaultOrdering$1 = ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_collection_immutable_Map().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.scala_math_Numeric$BigIntIsIntegral()), ScalaJS.modules.scala_math_Ordering$BigInt()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.scala_math_Numeric$IntIsIntegral()), ScalaJS.modules.scala_math_Ordering$Int()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.scala_math_Numeric$ShortIsIntegral()), ScalaJS.modules.scala_math_Ordering$Short()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.scala_math_Numeric$ByteIsIntegral()), ScalaJS.modules.scala_math_Ordering$Byte()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.scala_math_Numeric$CharIsIntegral()), ScalaJS.modules.scala_math_Ordering$Char()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.scala_math_Numeric$LongIsIntegral()), ScalaJS.modules.scala_math_Ordering$Long()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.scala_math_Numeric$FloatAsIfIntegral()), ScalaJS.modules.scala_math_Ordering$Float()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.scala_math_Numeric$DoubleAsIfIntegral()), ScalaJS.modules.scala_math_Ordering$Double()), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.scala_math_Numeric$BigDecimalAsIfIntegral()), ScalaJS.modules.scala_math_Ordering$BigDecimal())]), 1))));
  return this
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.defaultOrdering__ = (function() {
  return this.defaultOrdering__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.inclusive__O__O__O__Lscala_math_Integral__ = (function(start, end, step, num) {
  return this.inclusive__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step, num)
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.apply__O__O__O__Lscala_math_Integral__ = (function(start$2, end$2, step$2, num$2) {
  return this.apply__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Exclusive(start$2, end$2, step$2, num$2)
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.count__O__O__O__Z__Lscala_math_Integral__ = (function(start$3, end$3, step$3, isInclusive, num$3) {
  return ScalaJS.bI(this.count__O__O__O__Z__Lscala_math_Integral__I(start$3, end$3, step$3, isInclusive, num$3))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_NumericRange$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_NumericRange$.prototype = ScalaJS.c.scala_collection_immutable_NumericRange$.prototype;
ScalaJS.is.scala_collection_immutable_NumericRange$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_NumericRange$)))
});
ScalaJS.as.scala_collection_immutable_NumericRange$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_NumericRange$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.NumericRange")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_NumericRange$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_NumericRange$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_NumericRange$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_NumericRange$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.NumericRange;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_NumericRange$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_NumericRange$: 0
}, false, "scala.collection.immutable.NumericRange$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_NumericRange$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_NumericRange$.prototype.$classData = ScalaJS.data.scala_collection_immutable_NumericRange$;
ScalaJS.moduleInstances.scala_collection_immutable_NumericRange = undefined;
ScalaJS.modules.scala_collection_immutable_NumericRange = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_NumericRange)) {
    ScalaJS.moduleInstances.scala_collection_immutable_NumericRange = new ScalaJS.c.scala_collection_immutable_NumericRange$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_NumericRange
});
//@ sourceMappingURL=NumericRange$.js.map
