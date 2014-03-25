/** @constructor */
ScalaJS.c.scala_concurrent_duration_Duration$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.maxPreciseDouble$1 = 0.0;
  this.timeUnitLabels$1 = null;
  this.timeUnitName$1 = null;
  this.timeUnit$1 = null;
  this.\u00b5s$undper$undns$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.ms$undper$undns$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.s$undper$undns$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.min$undper$undns$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.h$undper$undns$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.d$undper$undns$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.Zero$1 = null;
  this.Undefined$1 = null;
  this.Inf$1 = null;
  this.MinusInf$1 = null
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_Duration$;
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.apply__D__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_Duration = (function(length, unit) {
  return this.fromNanos__D__Lscala_concurrent_duration_Duration((unit.toNanos__J__J(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0)).toDouble__D() * length))
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration = (function(length, unit) {
  return new ScalaJS.c.scala_concurrent_duration_FiniteDuration().init___J__Ljava_util_concurrent_TimeUnit(length, unit)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.apply__J__T__Lscala_concurrent_duration_FiniteDuration = (function(length, unit) {
  return new ScalaJS.c.scala_concurrent_duration_FiniteDuration().init___J__Ljava_util_concurrent_TimeUnit(length, ScalaJS.as.java_util_concurrent_TimeUnit(ScalaJS.modules.scala_concurrent_duration_Duration().timeUnit__Lscala_collection_immutable_Map().apply__O__O(unit)))
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.apply__T__Lscala_concurrent_duration_Duration = (function(s) {
  var s1 = ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).filterNot__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      x$1 = ScalaJS.uC(x$1);
      return ScalaJS.bZ(ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$1)))
    })
  })())));
  var x1 = s1;
  matchEnd11: {
    if (ScalaJS.anyRefEqEq("Inf", x1)) {
      var jsx$1 = true;
      break matchEnd11
    };
    if (ScalaJS.anyRefEqEq("PlusInf", x1)) {
      var jsx$1 = true;
      break matchEnd11
    };
    if (ScalaJS.anyRefEqEq("+Inf", x1)) {
      var jsx$1 = true;
      break matchEnd11
    };
    var jsx$1 = false;
    break matchEnd11
  };
  if (jsx$1) {
    return this.Inf__Lscala_concurrent_duration_Duration$Infinite()
  };
  matchEnd17: {
    if (ScalaJS.anyRefEqEq("MinusInf", x1)) {
      var jsx$2 = true;
      break matchEnd17
    };
    if (ScalaJS.anyRefEqEq("-Inf", x1)) {
      var jsx$2 = true;
      break matchEnd17
    };
    var jsx$2 = false;
    break matchEnd17
  };
  if (jsx$2) {
    return this.MinusInf__Lscala_concurrent_duration_Duration$Infinite()
  };
  var unitName = ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s1)).reverse__O()))).takeWhile__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      x$2 = ScalaJS.uC(x$2);
      return ScalaJS.bZ(ScalaJS.modules.scala_runtime_RichChar().isLetter$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$2)))
    })
  })()))))).reverse__O());
  var x1$2 = this.timeUnit__Lscala_collection_immutable_Map().get__O__Lscala_Option(unitName);
  if (ScalaJS.is.scala_Some(x1$2)) {
    var x2 = ScalaJS.as.scala_Some(x1$2);
    var unit = ScalaJS.as.java_util_concurrent_TimeUnit(x2.x__O());
    var valueStr = ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s1)).dropRight__I__O(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(unitName)));
    var valueD = ScalaJS.modules.java_lang_Double().parseDouble__T__D(valueStr);
    if (((valueD >= (-9.007199254740992E15)) && (valueD <= 9.007199254740992E15))) {
      return ScalaJS.modules.scala_concurrent_duration_Duration().apply__D__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_Duration(valueD, unit)
    } else {
      return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(ScalaJS.modules.java_lang_Long().parseLong__T__J(valueStr), unit)
    }
  };
  throw new ScalaJS.c.java_lang_NumberFormatException().init___T(("format error " + s))
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.scala$concurrent$duration$Duration$$words__T__Lscala_collection_immutable_List = (function(s) {
  return ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(s), "\\s+"), 1)).toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.scala$concurrent$duration$Duration$$expandLabels__T__Lscala_collection_immutable_List = (function(labels) {
  var x1 = this.scala$concurrent$duration$Duration$$words__T__Lscala_collection_immutable_List(labels);
  matchEnd4: {
    if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
      var x2 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
      var hd = ScalaJS.as.java_lang_String(x2.hd$1__O());
      var rest = x2.tl$1__Lscala_collection_immutable_List();
      var x$3 = new ScalaJS.c.scala_Tuple2().init___O__O(hd, rest);
      break matchEnd4
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var hd$2 = ScalaJS.as.java_lang_String(x$3.$$und1__O());
  var rest$2 = ScalaJS.as.scala_collection_immutable_List(x$3.$$und2__O());
  var x$4 = hd$2;
  return ScalaJS.as.scala_collection_immutable_List(rest$2.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(s) {
      return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), [s, (("" + s) + "s")]), 1)))
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).$$colon$colon__O__Lscala_collection_immutable_List(x$4)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.timeUnitName__Lscala_collection_immutable_Map = (function() {
  return this.timeUnitName$1
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.timeUnit__Lscala_collection_immutable_Map = (function() {
  return this.timeUnit$1
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.unapply__T__Lscala_Option = (function(s) {
  return this.liftedTree1$1__p1__T__Lscala_Option(s).flatMap__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(d) {
      return ScalaJS.modules.scala_concurrent_duration_Duration().unapply__Lscala_concurrent_duration_Duration__Lscala_Option(d)
    })
  })()))
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.unapply__Lscala_concurrent_duration_Duration__Lscala_Option = (function(d) {
  if (d.isFinite__Z()) {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bJ(d.length__J()), d.unit__Ljava_util_concurrent_TimeUnit()))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.fromNanos__D__Lscala_concurrent_duration_Duration = (function(nanos) {
  if (ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(nanos).isInfinite__Z()) {
    if ((nanos > 0)) {
      return this.Inf__Lscala_concurrent_duration_Duration$Infinite()
    } else {
      return this.MinusInf__Lscala_concurrent_duration_Duration$Infinite()
    }
  } else {
    if (ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(nanos).isNaN__Z()) {
      return this.Undefined__Lscala_concurrent_duration_Duration$Infinite()
    } else {
      if (((nanos > ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287).toDouble__D()) || (nanos < ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288).toDouble__D()))) {
        throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("trying to construct too large duration with " + ScalaJS.bD(nanos)) + "ns"))
      } else {
        return this.fromNanos__J__Lscala_concurrent_duration_FiniteDuration(ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long((nanos + 0.5)))
      }
    }
  }
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.fromNanos__J__Lscala_concurrent_duration_FiniteDuration = (function(nanos) {
  if (nanos.$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(983040, 3822149, 4)).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
    return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(nanos.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(983040, 3822149, 4)), ScalaJS.modules.java_util_concurrent_TimeUnit().DAYS__Ljava_util_concurrent_TimeUnit())
  } else {
    if (nanos.$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3710976, 858306, 0)).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
      return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(nanos.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3710976, 858306, 0)), ScalaJS.modules.java_util_concurrent_TimeUnit().HOURS__Ljava_util_concurrent_TimeUnit())
    } else {
      if (nanos.$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(481280, 14305, 0)).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
        return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(nanos.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(481280, 14305, 0)), ScalaJS.modules.java_util_concurrent_TimeUnit().MINUTES__Ljava_util_concurrent_TimeUnit())
      } else {
        if (nanos.$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1755648, 238, 0)).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
          return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(nanos.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1755648, 238, 0)), ScalaJS.modules.java_util_concurrent_TimeUnit().SECONDS__Ljava_util_concurrent_TimeUnit())
        } else {
          if (nanos.$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000000, 0, 0)).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
            return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(nanos.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000000, 0, 0)), ScalaJS.modules.java_util_concurrent_TimeUnit().MILLISECONDS__Ljava_util_concurrent_TimeUnit())
          } else {
            if (nanos.$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000, 0, 0)).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
              return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(nanos.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000, 0, 0)), ScalaJS.modules.java_util_concurrent_TimeUnit().MICROSECONDS__Ljava_util_concurrent_TimeUnit())
            } else {
              return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(nanos, ScalaJS.modules.java_util_concurrent_TimeUnit().NANOSECONDS__Ljava_util_concurrent_TimeUnit())
            }
          }
        }
      }
    }
  }
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.Zero__Lscala_concurrent_duration_FiniteDuration = (function() {
  return this.Zero$1
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.Undefined__Lscala_concurrent_duration_Duration$Infinite = (function() {
  return this.Undefined$1
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.Inf__Lscala_concurrent_duration_Duration$Infinite = (function() {
  return this.Inf$1
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.MinusInf__Lscala_concurrent_duration_Duration$Infinite = (function() {
  return this.MinusInf$1
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.create__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration = (function(length, unit) {
  return this.apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(length, unit)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.create__D__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_Duration = (function(length, unit) {
  return this.apply__D__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_Duration(length, unit)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.create__J__T__Lscala_concurrent_duration_FiniteDuration = (function(length, unit) {
  return this.apply__J__T__Lscala_concurrent_duration_FiniteDuration(length, unit)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.create__T__Lscala_concurrent_duration_Duration = (function(s) {
  return this.apply__T__Lscala_concurrent_duration_Duration(s)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_concurrent_duration_Duration()
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.liftedTree1$1__p1__T__Lscala_Option = (function(s$1) {
  try {
    return new ScalaJS.c.scala_Some().init___O(this.apply__T__Lscala_concurrent_duration_Duration(s$1))
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    if (ScalaJS.is.java_lang_RuntimeException($jsexc$)) {
      return ScalaJS.modules.scala_None()
    } else {
      throw ScalaJS.unwrapJavaScriptException($jsexc$)
    }
  }
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_concurrent_duration_Duration = this;
  this.timeUnitLabels$1 = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.java_util_concurrent_TimeUnit().DAYS__Ljava_util_concurrent_TimeUnit()), "d day"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.java_util_concurrent_TimeUnit().HOURS__Ljava_util_concurrent_TimeUnit()), "h hour"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.java_util_concurrent_TimeUnit().MINUTES__Ljava_util_concurrent_TimeUnit()), "min minute"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.java_util_concurrent_TimeUnit().SECONDS__Ljava_util_concurrent_TimeUnit()), "s sec second"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.java_util_concurrent_TimeUnit().MILLISECONDS__Ljava_util_concurrent_TimeUnit()), "ms milli millisecond"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.java_util_concurrent_TimeUnit().MICROSECONDS__Ljava_util_concurrent_TimeUnit()), "\u00b5s micro microsecond"), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.modules.java_util_concurrent_TimeUnit().NANOSECONDS__Ljava_util_concurrent_TimeUnit()), "ns nano nanosecond")]), 1)));
  this.timeUnitName$1 = this.timeUnitLabels$1.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less()).mapValues__Lscala_Function1__Lscala_collection_immutable_Map(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(s) {
      return ScalaJS.as.java_lang_String(ScalaJS.modules.scala_concurrent_duration_Duration().scala$concurrent$duration$Duration$$words__T__Lscala_collection_immutable_List(s).last__O())
    })
  })())).toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less());
  this.timeUnit$1 = ScalaJS.as.scala_collection_TraversableOnce(this.timeUnitLabels$1.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      if ((x1 !== null)) {
        var unit = ScalaJS.as.java_util_concurrent_TimeUnit(x1.$$und1__O());
        var names = ScalaJS.as.java_lang_String(x1.$$und2__O());
        return ScalaJS.as.scala_collection_immutable_List(ScalaJS.modules.scala_concurrent_duration_Duration().scala$concurrent$duration$Duration$$expandLabels__T__Lscala_collection_immutable_List(names).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_concurrent_duration_Duration$$anonfun$4$$anonfun$apply$1().init___Lscala_concurrent_duration_Duration$$anonfun$4__Ljava_util_concurrent_TimeUnit(this, unit), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })()), ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less());
  this.Zero$1 = new ScalaJS.c.scala_concurrent_duration_FiniteDuration().init___J__Ljava_util_concurrent_TimeUnit(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0), ScalaJS.modules.java_util_concurrent_TimeUnit().DAYS__Ljava_util_concurrent_TimeUnit());
  this.Undefined$1 = new ScalaJS.c.scala_concurrent_duration_Duration$$anon$1().init___();
  this.Inf$1 = new ScalaJS.c.scala_concurrent_duration_Duration$$anon$2().init___();
  this.MinusInf$1 = new ScalaJS.c.scala_concurrent_duration_Duration$$anon$3().init___();
  return this
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.create__T__ = (function(s) {
  return this.create__T__Lscala_concurrent_duration_Duration(s)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.create__J__T__ = (function(length, unit) {
  return this.create__J__T__Lscala_concurrent_duration_FiniteDuration(length, unit)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.create__D__Ljava_util_concurrent_TimeUnit__ = (function(length$2, unit$2) {
  return this.create__D__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_Duration(length$2, unit$2)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.create__J__Ljava_util_concurrent_TimeUnit__ = (function(length$3, unit$3) {
  return this.create__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(length$3, unit$3)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.MinusInf__ = (function() {
  return this.MinusInf__Lscala_concurrent_duration_Duration$Infinite()
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.Inf__ = (function() {
  return this.Inf__Lscala_concurrent_duration_Duration$Infinite()
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.Undefined__ = (function() {
  return this.Undefined__Lscala_concurrent_duration_Duration$Infinite()
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.Zero__ = (function() {
  return this.Zero__Lscala_concurrent_duration_FiniteDuration()
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.fromNanos__J__ = (function(nanos) {
  return this.fromNanos__J__Lscala_concurrent_duration_FiniteDuration(nanos)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.fromNanos__D__ = (function(nanos$2) {
  return this.fromNanos__D__Lscala_concurrent_duration_Duration(nanos$2)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.unapply__Lscala_concurrent_duration_Duration__ = (function(d) {
  return this.unapply__Lscala_concurrent_duration_Duration__Lscala_Option(d)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.unapply__T__ = (function(s$2) {
  return this.unapply__T__Lscala_Option(s$2)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.timeUnit__ = (function() {
  return this.timeUnit__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.timeUnitName__ = (function() {
  return this.timeUnitName__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.scala$concurrent$duration$Duration$$expandLabels__T__ = (function(labels) {
  return this.scala$concurrent$duration$Duration$$expandLabels__T__Lscala_collection_immutable_List(labels)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.scala$concurrent$duration$Duration$$words__T__ = (function(s$3) {
  return this.scala$concurrent$duration$Duration$$words__T__Lscala_collection_immutable_List(s$3)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.apply__T__ = (function(s$4) {
  return this.apply__T__Lscala_concurrent_duration_Duration(s$4)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.apply__J__T__ = (function(length$4, unit$4) {
  return this.apply__J__T__Lscala_concurrent_duration_FiniteDuration(length$4, unit$4)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.apply__J__Ljava_util_concurrent_TimeUnit__ = (function(length$5, unit$5) {
  return this.apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(length$5, unit$5)
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.apply__D__Ljava_util_concurrent_TimeUnit__ = (function(length$6, unit$6) {
  return this.apply__D__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_Duration(length$6, unit$6)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_Duration$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_Duration$.prototype = ScalaJS.c.scala_concurrent_duration_Duration$.prototype;
ScalaJS.is.scala_concurrent_duration_Duration$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_Duration$)))
});
ScalaJS.as.scala_concurrent_duration_Duration$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_Duration$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.Duration")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_Duration$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_Duration$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_Duration$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_Duration$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.Duration;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_Duration$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_Duration$: 0
}, false, "scala.concurrent.duration.Duration$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_Duration$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_Duration$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_Duration$;
ScalaJS.moduleInstances.scala_concurrent_duration_Duration = undefined;
ScalaJS.modules.scala_concurrent_duration_Duration = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_Duration)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_Duration = new ScalaJS.c.scala_concurrent_duration_Duration$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_Duration
});
//@ sourceMappingURL=Duration$.js.map
