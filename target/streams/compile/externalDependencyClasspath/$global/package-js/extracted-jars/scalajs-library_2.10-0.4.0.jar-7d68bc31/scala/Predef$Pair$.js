/** @constructor */
ScalaJS.c.scala_Predef$Pair$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Predef$Pair$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Predef$Pair$.prototype.constructor = ScalaJS.c.scala_Predef$Pair$;
ScalaJS.c.scala_Predef$Pair$.prototype.apply__O__O__Lscala_Tuple2 = (function(x, y) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(x, y)
});
ScalaJS.c.scala_Predef$Pair$.prototype.unapply__Lscala_Tuple2__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Predef$Pair$.prototype.unapply__Lscala_Tuple2__ = (function(x) {
  return this.unapply__Lscala_Tuple2__Lscala_Option(x)
});
ScalaJS.c.scala_Predef$Pair$.prototype.apply__O__O__ = (function(x$2, y) {
  return this.apply__O__O__Lscala_Tuple2(x$2, y)
});
/** @constructor */
ScalaJS.inheritable.scala_Predef$Pair$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Predef$Pair$.prototype = ScalaJS.c.scala_Predef$Pair$.prototype;
ScalaJS.is.scala_Predef$Pair$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Predef$Pair$)))
});
ScalaJS.as.scala_Predef$Pair$ = (function(obj) {
  if ((ScalaJS.is.scala_Predef$Pair$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Predef$Pair")
  }
});
ScalaJS.isArrayOf.scala_Predef$Pair$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Predef$Pair$)))
});
ScalaJS.asArrayOf.scala_Predef$Pair$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Predef$Pair$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Predef$Pair;", depth)
  }
});
ScalaJS.data.scala_Predef$Pair$ = new ScalaJS.ClassTypeData({
  scala_Predef$Pair$: 0
}, false, "scala.Predef$Pair$", ScalaJS.data.java_lang_Object, {
  scala_Predef$Pair$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Predef$Pair$.prototype.$classData = ScalaJS.data.scala_Predef$Pair$;
ScalaJS.moduleInstances.scala_Predef$Pair = undefined;
ScalaJS.modules.scala_Predef$Pair = (function() {
  if ((!ScalaJS.moduleInstances.scala_Predef$Pair)) {
    ScalaJS.moduleInstances.scala_Predef$Pair = new ScalaJS.c.scala_Predef$Pair$().init___()
  };
  return ScalaJS.moduleInstances.scala_Predef$Pair
});
//@ sourceMappingURL=Predef$Pair$.js.map
