/** @constructor */
ScalaJS.c.scala_collection_immutable_Range$Double$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.bigDecAsIntegral$1 = null;
  this.doubleAsIntegral$1 = null
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Range$Double$;
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.bigDecAsIntegral__Lscala_math_Numeric$BigDecimalAsIfIntegral$ = (function() {
  return this.bigDecAsIntegral$1
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.doubleAsIntegral__Lscala_math_Numeric$DoubleAsIfIntegral$ = (function() {
  return this.doubleAsIntegral$1
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.toBD__D__Lscala_math_BigDecimal = (function(x) {
  return ScalaJS.modules.scala_math_BigDecimal().valueOf__D__Lscala_math_BigDecimal(x)
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.apply__D__D__D__Lscala_collection_immutable_NumericRange = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_Range$BigDecimal().apply__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Exclusive(this.toBD__D__Lscala_math_BigDecimal(start), this.toBD__D__Lscala_math_BigDecimal(end), this.toBD__D__Lscala_math_BigDecimal(step)).mapRange__Lscala_Function1__Lscala_math_Integral__Lscala_collection_immutable_NumericRange(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.bD(x$1.doubleValue__D())
    })
  })()), this.doubleAsIntegral__Lscala_math_Numeric$DoubleAsIfIntegral$())
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.inclusive__D__D__D__Lscala_collection_immutable_NumericRange = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_Range$BigDecimal().inclusive__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Inclusive(this.toBD__D__Lscala_math_BigDecimal(start), this.toBD__D__Lscala_math_BigDecimal(end), this.toBD__D__Lscala_math_BigDecimal(step)).mapRange__Lscala_Function1__Lscala_math_Integral__Lscala_collection_immutable_NumericRange(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      return ScalaJS.bD(x$2.doubleValue__D())
    })
  })()), this.doubleAsIntegral__Lscala_math_Numeric$DoubleAsIfIntegral$())
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_Range$Double = this;
  this.bigDecAsIntegral$1 = ScalaJS.modules.scala_math_Numeric$BigDecimalAsIfIntegral();
  this.doubleAsIntegral$1 = ScalaJS.modules.scala_math_Numeric$DoubleAsIfIntegral();
  return this
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.inclusive__D__D__D__ = (function(start, end, step) {
  return this.inclusive__D__D__D__Lscala_collection_immutable_NumericRange(start, end, step)
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.apply__D__D__D__ = (function(start$2, end$2, step$2) {
  return this.apply__D__D__D__Lscala_collection_immutable_NumericRange(start$2, end$2, step$2)
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.toBD__D__ = (function(x) {
  return this.toBD__D__Lscala_math_BigDecimal(x)
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.doubleAsIntegral__ = (function() {
  return this.doubleAsIntegral__Lscala_math_Numeric$DoubleAsIfIntegral$()
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.bigDecAsIntegral__ = (function() {
  return this.bigDecAsIntegral__Lscala_math_Numeric$BigDecimalAsIfIntegral$()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Range$Double$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Range$Double$.prototype = ScalaJS.c.scala_collection_immutable_Range$Double$.prototype;
ScalaJS.is.scala_collection_immutable_Range$Double$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Range$Double$)))
});
ScalaJS.as.scala_collection_immutable_Range$Double$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Range$Double$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Range$Double")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Range$Double$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Range$Double$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Range$Double$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Range$Double$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Range$Double;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Range$Double$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Range$Double$: 0
}, false, "scala.collection.immutable.Range$Double$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Range$Double$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Range$Double$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Range$Double$;
ScalaJS.moduleInstances.scala_collection_immutable_Range$Double = undefined;
ScalaJS.modules.scala_collection_immutable_Range$Double = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Range$Double)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Range$Double = new ScalaJS.c.scala_collection_immutable_Range$Double$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Range$Double
});
//@ sourceMappingURL=Range$Double$.js.map
