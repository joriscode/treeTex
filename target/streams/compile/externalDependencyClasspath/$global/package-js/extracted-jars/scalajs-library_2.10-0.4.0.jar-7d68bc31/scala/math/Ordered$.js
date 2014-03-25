/** @constructor */
ScalaJS.c.scala_math_Ordered$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Ordered$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordered$.prototype.constructor = ScalaJS.c.scala_math_Ordered$;
ScalaJS.c.scala_math_Ordered$.prototype.orderingToOrdered__O__Lscala_math_Ordering__Lscala_math_Ordered = (function(x, ord) {
  return new ScalaJS.c.scala_math_Ordered$$anon$1().init___O__Lscala_math_Ordering(x, ord)
});
ScalaJS.c.scala_math_Ordered$.prototype.orderingToOrdered__O__Lscala_math_Ordering__ = (function(x, ord) {
  return this.orderingToOrdered__O__Lscala_math_Ordering__Lscala_math_Ordered(x, ord)
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordered$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordered$.prototype = ScalaJS.c.scala_math_Ordered$.prototype;
ScalaJS.is.scala_math_Ordered$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordered$)))
});
ScalaJS.as.scala_math_Ordered$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordered$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordered")
  }
});
ScalaJS.isArrayOf.scala_math_Ordered$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordered$)))
});
ScalaJS.asArrayOf.scala_math_Ordered$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordered$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordered;", depth)
  }
});
ScalaJS.data.scala_math_Ordered$ = new ScalaJS.ClassTypeData({
  scala_math_Ordered$: 0
}, false, "scala.math.Ordered$", ScalaJS.data.java_lang_Object, {
  scala_math_Ordered$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordered$.prototype.$classData = ScalaJS.data.scala_math_Ordered$;
ScalaJS.moduleInstances.scala_math_Ordered = undefined;
ScalaJS.modules.scala_math_Ordered = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Ordered)) {
    ScalaJS.moduleInstances.scala_math_Ordered = new ScalaJS.c.scala_math_Ordered$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Ordered
});
//@ sourceMappingURL=Ordered$.js.map
