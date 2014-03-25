/** @constructor */
ScalaJS.c.scala_collection_immutable_Range$Int$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_Range$Int$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Range$Int$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Range$Int$;
ScalaJS.c.scala_collection_immutable_Range$Int$.prototype.apply__I__I__I__Lscala_collection_immutable_NumericRange$Exclusive = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().apply__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Exclusive(ScalaJS.bI(start), ScalaJS.bI(end), ScalaJS.bI(step), ScalaJS.modules.scala_math_Numeric$IntIsIntegral())
});
ScalaJS.c.scala_collection_immutable_Range$Int$.prototype.inclusive__I__I__I__Lscala_collection_immutable_NumericRange$Inclusive = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().inclusive__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Inclusive(ScalaJS.bI(start), ScalaJS.bI(end), ScalaJS.bI(step), ScalaJS.modules.scala_math_Numeric$IntIsIntegral())
});
ScalaJS.c.scala_collection_immutable_Range$Int$.prototype.inclusive__I__I__I__ = (function(start, end, step) {
  return this.inclusive__I__I__I__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step)
});
ScalaJS.c.scala_collection_immutable_Range$Int$.prototype.apply__I__I__I__ = (function(start$2, end$2, step$2) {
  return this.apply__I__I__I__Lscala_collection_immutable_NumericRange$Exclusive(start$2, end$2, step$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Range$Int$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Range$Int$.prototype = ScalaJS.c.scala_collection_immutable_Range$Int$.prototype;
ScalaJS.is.scala_collection_immutable_Range$Int$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Range$Int$)))
});
ScalaJS.as.scala_collection_immutable_Range$Int$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Range$Int$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Range$Int")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Range$Int$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Range$Int$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Range$Int$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Range$Int$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Range$Int;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Range$Int$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Range$Int$: 0
}, false, "scala.collection.immutable.Range$Int$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Range$Int$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Range$Int$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Range$Int$;
ScalaJS.moduleInstances.scala_collection_immutable_Range$Int = undefined;
ScalaJS.modules.scala_collection_immutable_Range$Int = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Range$Int)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Range$Int = new ScalaJS.c.scala_collection_immutable_Range$Int$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Range$Int
});
//@ sourceMappingURL=Range$Int$.js.map
