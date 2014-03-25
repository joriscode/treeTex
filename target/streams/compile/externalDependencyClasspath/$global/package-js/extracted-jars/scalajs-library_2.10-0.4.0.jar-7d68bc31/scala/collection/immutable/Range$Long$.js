/** @constructor */
ScalaJS.c.scala_collection_immutable_Range$Long$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_Range$Long$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Range$Long$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Range$Long$;
ScalaJS.c.scala_collection_immutable_Range$Long$.prototype.apply__J__J__J__Lscala_collection_immutable_NumericRange$Exclusive = (function(start$3, end$3, step$3) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().apply__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Exclusive(ScalaJS.bJ(start$3), ScalaJS.bJ(end$3), ScalaJS.bJ(step$3), ScalaJS.modules.scala_math_Numeric$LongIsIntegral())
});
ScalaJS.c.scala_collection_immutable_Range$Long$.prototype.inclusive__J__J__J__Lscala_collection_immutable_NumericRange$Inclusive = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().inclusive__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Inclusive(ScalaJS.bJ(start), ScalaJS.bJ(end), ScalaJS.bJ(step), ScalaJS.modules.scala_math_Numeric$LongIsIntegral())
});
ScalaJS.c.scala_collection_immutable_Range$Long$.prototype.inclusive__J__J__J__ = (function(start, end, step) {
  return this.inclusive__J__J__J__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step)
});
ScalaJS.c.scala_collection_immutable_Range$Long$.prototype.apply__J__J__J__ = (function(start$2, end$2, step$2) {
  return this.apply__J__J__J__Lscala_collection_immutable_NumericRange$Exclusive(start$2, end$2, step$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Range$Long$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Range$Long$.prototype = ScalaJS.c.scala_collection_immutable_Range$Long$.prototype;
ScalaJS.is.scala_collection_immutable_Range$Long$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Range$Long$)))
});
ScalaJS.as.scala_collection_immutable_Range$Long$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Range$Long$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Range$Long")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Range$Long$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Range$Long$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Range$Long$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Range$Long$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Range$Long;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Range$Long$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Range$Long$: 0
}, false, "scala.collection.immutable.Range$Long$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Range$Long$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Range$Long$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Range$Long$;
ScalaJS.moduleInstances.scala_collection_immutable_Range$Long = undefined;
ScalaJS.modules.scala_collection_immutable_Range$Long = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Range$Long)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Range$Long = new ScalaJS.c.scala_collection_immutable_Range$Long$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Range$Long
});
//@ sourceMappingURL=Range$Long$.js.map
