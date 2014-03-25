/** @constructor */
ScalaJS.c.scala_collection_immutable_Range$BigInt$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_Range$BigInt$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Range$BigInt$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Range$BigInt$;
ScalaJS.c.scala_collection_immutable_Range$BigInt$.prototype.apply__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Exclusive = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().apply__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Exclusive(start, end, step, ScalaJS.modules.scala_math_Numeric$BigIntIsIntegral())
});
ScalaJS.c.scala_collection_immutable_Range$BigInt$.prototype.inclusive__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Inclusive = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().inclusive__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step, ScalaJS.modules.scala_math_Numeric$BigIntIsIntegral())
});
ScalaJS.c.scala_collection_immutable_Range$BigInt$.prototype.inclusive__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt__ = (function(start, end, step) {
  return this.inclusive__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step)
});
ScalaJS.c.scala_collection_immutable_Range$BigInt$.prototype.apply__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt__ = (function(start$2, end$2, step$2) {
  return this.apply__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Exclusive(start$2, end$2, step$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Range$BigInt$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Range$BigInt$.prototype = ScalaJS.c.scala_collection_immutable_Range$BigInt$.prototype;
ScalaJS.is.scala_collection_immutable_Range$BigInt$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Range$BigInt$)))
});
ScalaJS.as.scala_collection_immutable_Range$BigInt$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Range$BigInt$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Range$BigInt")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Range$BigInt$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Range$BigInt$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Range$BigInt$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Range$BigInt$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Range$BigInt;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Range$BigInt$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Range$BigInt$: 0
}, false, "scala.collection.immutable.Range$BigInt$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Range$BigInt$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Range$BigInt$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Range$BigInt$;
ScalaJS.moduleInstances.scala_collection_immutable_Range$BigInt = undefined;
ScalaJS.modules.scala_collection_immutable_Range$BigInt = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Range$BigInt)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Range$BigInt = new ScalaJS.c.scala_collection_immutable_Range$BigInt$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Range$BigInt
});
//@ sourceMappingURL=Range$BigInt$.js.map
