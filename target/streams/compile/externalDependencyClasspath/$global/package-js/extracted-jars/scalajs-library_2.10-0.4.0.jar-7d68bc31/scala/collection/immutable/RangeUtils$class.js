ScalaJS.impls.scala_collection_immutable_RangeUtils$class__inclusiveLast__Lscala_collection_immutable_RangeUtils__I = (function($$this) {
  var size = ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.end__I()).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.start__I()));
  return size.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.step__I())).$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.step__I())).$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.start__I())).toInt__I()
});
ScalaJS.impls.scala_collection_immutable_RangeUtils$class__$undlast__Lscala_collection_immutable_RangeUtils__I = (function($$this) {
  if ((!$$this.inclusive__Z())) {
    if ((($$this.step__I() === 1) || ($$this.step__I() === -1))) {
      return ($$this.end__I() - $$this.step__I())
    } else {
      var inclast = ScalaJS.impls.scala_collection_immutable_RangeUtils$class__inclusiveLast__Lscala_collection_immutable_RangeUtils__I($$this);
      if (ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.end__I()).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.start__I())).$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.step__I())).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
        return (inclast - $$this.step__I())
      } else {
        return inclast
      }
    }
  } else {
    if ((($$this.step__I() === 1) || ($$this.step__I() === -1))) {
      return $$this.end__I()
    } else {
      return ScalaJS.impls.scala_collection_immutable_RangeUtils$class__inclusiveLast__Lscala_collection_immutable_RangeUtils__I($$this)
    }
  }
});
ScalaJS.impls.scala_collection_immutable_RangeUtils$class__$undforeach__Lscala_collection_immutable_RangeUtils__Lscala_Function1__V = (function($$this, f) {
  if (($$this.$$undlength__I() > 0)) {
    var i = $$this.start__I();
    var last = $$this.$$undlast__I();
    while ((i !== last)) {
      f.apply__O__O(ScalaJS.bI(i));
      i = (i + $$this.step__I())
    }
  }
});
ScalaJS.impls.scala_collection_immutable_RangeUtils$class__$undlength__Lscala_collection_immutable_RangeUtils__I = (function($$this) {
  if ((!$$this.inclusive__Z())) {
    if (((($$this.end__I() > $$this.start__I()) === ($$this.step__I() > 0)) && ($$this.start__I() !== $$this.end__I()))) {
      var jsx$1 = ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.$$undlast__I()).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.start__I())).$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.step__I())).$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1))
    } else {
      var jsx$1 = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)
    };
    return jsx$1.toInt__I()
  } else {
    if (((($$this.end__I() > $$this.start__I()) === ($$this.step__I() > 0)) || ($$this.start__I() === $$this.end__I()))) {
      var jsx$2 = ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.$$undlast__I()).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.start__I())).$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.step__I())).$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1))
    } else {
      var jsx$2 = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)
    };
    return jsx$2.toInt__I()
  }
});
ScalaJS.impls.scala_collection_immutable_RangeUtils$class__$undapply__Lscala_collection_immutable_RangeUtils__I__I = (function($$this, idx) {
  if (((idx < 0) || (idx >= $$this.$$undlength__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  };
  return ($$this.start__I() + (idx * $$this.step__I()))
});
ScalaJS.impls.scala_collection_immutable_RangeUtils$class__locationAfterN__Lscala_collection_immutable_RangeUtils__I__I = (function($$this, n) {
  if ((n > 0)) {
    if (($$this.step__I() > 0)) {
      return ScalaJS.modules.scala_math_package().min__J__J__J(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.start__I()).$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.step__I()).$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(n))), ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.$$undlast__I())).toInt__I()
    } else {
      return ScalaJS.modules.scala_math_package().max__J__J__J(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.start__I()).$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.step__I()).$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(n))), ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.$$undlast__I())).toInt__I()
    }
  } else {
    return $$this.start__I()
  }
});
ScalaJS.impls.scala_collection_immutable_RangeUtils$class__$undtake__Lscala_collection_immutable_RangeUtils__I__Lscala_collection_immutable_RangeUtils = (function($$this, n) {
  if (((n > 0) && ($$this.$$undlength__I() > 0))) {
    return $$this.create__I__I__I__Z__Lscala_collection_immutable_RangeUtils($$this.start__I(), ScalaJS.impls.scala_collection_immutable_RangeUtils$class__locationAfterN__Lscala_collection_immutable_RangeUtils__I__I($$this, n), $$this.step__I(), true)
  } else {
    return $$this.create__I__I__I__Z__Lscala_collection_immutable_RangeUtils($$this.start__I(), $$this.start__I(), $$this.step__I(), false)
  }
});
ScalaJS.impls.scala_collection_immutable_RangeUtils$class__$unddrop__Lscala_collection_immutable_RangeUtils__I__Lscala_collection_immutable_RangeUtils = (function($$this, n) {
  return $$this.create__I__I__I__Z__Lscala_collection_immutable_RangeUtils(ScalaJS.impls.scala_collection_immutable_RangeUtils$class__locationAfterN__Lscala_collection_immutable_RangeUtils__I__I($$this, n), $$this.end__I(), $$this.step__I(), $$this.inclusive__Z())
});
ScalaJS.impls.scala_collection_immutable_RangeUtils$class__$undslice__Lscala_collection_immutable_RangeUtils__I__I__Lscala_collection_immutable_RangeUtils = (function($$this, from, until) {
  return $$this.$$unddrop__I__Lscala_collection_immutable_RangeUtils(from).$$undtake__I__Lscala_collection_immutable_RangeUtils((until - from))
});
ScalaJS.impls.scala_collection_immutable_RangeUtils$class__$init$__Lscala_collection_immutable_RangeUtils__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=RangeUtils$class.js.map
