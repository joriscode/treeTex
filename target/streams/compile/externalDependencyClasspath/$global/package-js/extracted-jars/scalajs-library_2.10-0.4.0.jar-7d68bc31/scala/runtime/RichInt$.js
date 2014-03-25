/** @constructor */
ScalaJS.c.scala_runtime_RichInt$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_RichInt$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichInt$.prototype.constructor = ScalaJS.c.scala_runtime_RichInt$;
ScalaJS.c.scala_runtime_RichInt$.prototype.num$extension__I__Lscala_math_Numeric$IntIsIntegral$ = (function($$this) {
  return ScalaJS.modules.scala_math_Numeric$IntIsIntegral()
});
ScalaJS.c.scala_runtime_RichInt$.prototype.ord$extension__I__Lscala_math_Ordering$Int$ = (function($$this) {
  return ScalaJS.modules.scala_math_Ordering$Int()
});
ScalaJS.c.scala_runtime_RichInt$.prototype.isWhole$extension__I__Z = (function($$this) {
  return true
});
ScalaJS.c.scala_runtime_RichInt$.prototype.until$extension0__I__I__Lscala_collection_immutable_Range = (function($$this, end) {
  return ScalaJS.modules.scala_collection_immutable_Range().apply__I__I__Lscala_collection_immutable_Range($$this, end)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.until$extension1__I__I__I__Lscala_collection_immutable_Range = (function($$this, end, step) {
  return ScalaJS.modules.scala_collection_immutable_Range().apply__I__I__I__Lscala_collection_immutable_Range($$this, end, step)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive = (function($$this, end) {
  return ScalaJS.modules.scala_collection_immutable_Range().inclusive__I__I__Lscala_collection_immutable_Range$Inclusive($$this, end)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.to$extension1__I__I__I__Lscala_collection_immutable_Range$Inclusive = (function($$this, end, step) {
  return ScalaJS.modules.scala_collection_immutable_Range().inclusive__I__I__I__Lscala_collection_immutable_Range$Inclusive($$this, end, step)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.min$extension__I__I__I = (function($$this, that) {
  if (($$this < that)) {
    return $$this
  } else {
    return that
  }
});
ScalaJS.c.scala_runtime_RichInt$.prototype.max$extension__I__I__I = (function($$this, that) {
  if (($$this > that)) {
    return $$this
  } else {
    return that
  }
});
ScalaJS.c.scala_runtime_RichInt$.prototype.abs$extension__I__I = (function($$this) {
  if (($$this < 0)) {
    return (-$$this)
  } else {
    return $$this
  }
});
ScalaJS.c.scala_runtime_RichInt$.prototype.toBinaryString$extension__I__T = (function($$this) {
  return ScalaJS.modules.java_lang_Integer().toBinaryString__I__T($$this)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.toHexString$extension__I__T = (function($$this) {
  return ScalaJS.modules.java_lang_Integer().toHexString__I__T($$this)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.toOctalString$extension__I__T = (function($$this) {
  return ScalaJS.modules.java_lang_Integer().toOctalString__I__T($$this)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.hashCode$extension__I__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bI($$this))
});
ScalaJS.c.scala_runtime_RichInt$.prototype.equals$extension__I__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_RichInt(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var RichInt$1 = ScalaJS.as.scala_runtime_RichInt(x$1).self__I();
    return ($$this === RichInt$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_RichInt$.prototype.equals$extension__I__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__I__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_RichInt$.prototype.hashCode$extension__I__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__I__I($$this$2))
});
ScalaJS.c.scala_runtime_RichInt$.prototype.toOctalString$extension__I__ = (function($$this$3) {
  return this.toOctalString$extension__I__T($$this$3)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.toHexString$extension__I__ = (function($$this$4) {
  return this.toHexString$extension__I__T($$this$4)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.toBinaryString$extension__I__ = (function($$this$5) {
  return this.toBinaryString$extension__I__T($$this$5)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.abs$extension__I__ = (function($$this$6) {
  return ScalaJS.bI(this.abs$extension__I__I($$this$6))
});
ScalaJS.c.scala_runtime_RichInt$.prototype.max$extension__I__I__ = (function($$this$7, that) {
  return ScalaJS.bI(this.max$extension__I__I__I($$this$7, that))
});
ScalaJS.c.scala_runtime_RichInt$.prototype.min$extension__I__I__ = (function($$this$8, that$2) {
  return ScalaJS.bI(this.min$extension__I__I__I($$this$8, that$2))
});
ScalaJS.c.scala_runtime_RichInt$.prototype.to$extension1__I__I__I__ = (function($$this$9, end, step) {
  return this.to$extension1__I__I__I__Lscala_collection_immutable_Range$Inclusive($$this$9, end, step)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.to$extension0__I__I__ = (function($$this$10, end$2) {
  return this.to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive($$this$10, end$2)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.until$extension1__I__I__I__ = (function($$this$11, end$3, step$2) {
  return this.until$extension1__I__I__I__Lscala_collection_immutable_Range($$this$11, end$3, step$2)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.until$extension0__I__I__ = (function($$this$12, end$4) {
  return this.until$extension0__I__I__Lscala_collection_immutable_Range($$this$12, end$4)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.isWhole$extension__I__ = (function($$this$13) {
  return ScalaJS.bZ(this.isWhole$extension__I__Z($$this$13))
});
ScalaJS.c.scala_runtime_RichInt$.prototype.ord$extension__I__ = (function($$this$14) {
  return this.ord$extension__I__Lscala_math_Ordering$Int$($$this$14)
});
ScalaJS.c.scala_runtime_RichInt$.prototype.num$extension__I__ = (function($$this$15) {
  return this.num$extension__I__Lscala_math_Numeric$IntIsIntegral$($$this$15)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichInt$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichInt$.prototype = ScalaJS.c.scala_runtime_RichInt$.prototype;
ScalaJS.is.scala_runtime_RichInt$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichInt$)))
});
ScalaJS.as.scala_runtime_RichInt$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichInt$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichInt")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichInt$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichInt$)))
});
ScalaJS.asArrayOf.scala_runtime_RichInt$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichInt$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichInt;", depth)
  }
});
ScalaJS.data.scala_runtime_RichInt$ = new ScalaJS.ClassTypeData({
  scala_runtime_RichInt$: 0
}, false, "scala.runtime.RichInt$", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichInt$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichInt$.prototype.$classData = ScalaJS.data.scala_runtime_RichInt$;
ScalaJS.moduleInstances.scala_runtime_RichInt = undefined;
ScalaJS.modules.scala_runtime_RichInt = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_RichInt)) {
    ScalaJS.moduleInstances.scala_runtime_RichInt = new ScalaJS.c.scala_runtime_RichInt$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_RichInt
});
//@ sourceMappingURL=RichInt$.js.map
