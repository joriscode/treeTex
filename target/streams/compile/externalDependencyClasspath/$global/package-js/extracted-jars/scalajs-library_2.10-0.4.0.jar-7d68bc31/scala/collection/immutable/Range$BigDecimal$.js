/** @constructor */
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.bigDecAsIntegral$1 = null
});
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Range$BigDecimal$;
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype.bigDecAsIntegral__Lscala_math_Numeric$BigDecimalAsIfIntegral$ = (function() {
  return this.bigDecAsIntegral$1
});
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype.apply__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Exclusive = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().apply__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Exclusive(start, end, step, this.bigDecAsIntegral__Lscala_math_Numeric$BigDecimalAsIfIntegral$())
});
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype.inclusive__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Inclusive = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().inclusive__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step, this.bigDecAsIntegral__Lscala_math_Numeric$BigDecimalAsIfIntegral$())
});
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_Range$BigDecimal = this;
  this.bigDecAsIntegral$1 = ScalaJS.modules.scala_math_Numeric$BigDecimalAsIfIntegral();
  return this
});
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype.inclusive__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__ = (function(start, end, step) {
  return this.inclusive__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step)
});
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype.apply__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__ = (function(start$2, end$2, step$2) {
  return this.apply__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Exclusive(start$2, end$2, step$2)
});
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype.bigDecAsIntegral__ = (function() {
  return this.bigDecAsIntegral__Lscala_math_Numeric$BigDecimalAsIfIntegral$()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Range$BigDecimal$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Range$BigDecimal$.prototype = ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype;
ScalaJS.is.scala_collection_immutable_Range$BigDecimal$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Range$BigDecimal$)))
});
ScalaJS.as.scala_collection_immutable_Range$BigDecimal$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Range$BigDecimal$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Range$BigDecimal")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Range$BigDecimal$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Range$BigDecimal$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Range$BigDecimal$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Range$BigDecimal$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Range$BigDecimal;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Range$BigDecimal$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Range$BigDecimal$: 0
}, false, "scala.collection.immutable.Range$BigDecimal$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Range$BigDecimal$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Range$BigDecimal$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Range$BigDecimal$;
ScalaJS.moduleInstances.scala_collection_immutable_Range$BigDecimal = undefined;
ScalaJS.modules.scala_collection_immutable_Range$BigDecimal = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Range$BigDecimal)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Range$BigDecimal = new ScalaJS.c.scala_collection_immutable_Range$BigDecimal$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Range$BigDecimal
});
//@ sourceMappingURL=Range$BigDecimal$.js.map
