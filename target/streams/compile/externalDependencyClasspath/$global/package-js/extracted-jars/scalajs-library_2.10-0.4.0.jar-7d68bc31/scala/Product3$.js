/** @constructor */
ScalaJS.c.scala_Product3$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product3$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product3$.prototype.constructor = ScalaJS.c.scala_Product3$;
ScalaJS.c.scala_Product3$.prototype.unapply__Lscala_Product3__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product3$.prototype.unapply__Lscala_Product3__ = (function(x) {
  return this.unapply__Lscala_Product3__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product3$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product3$.prototype = ScalaJS.c.scala_Product3$.prototype;
ScalaJS.is.scala_Product3$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product3$)))
});
ScalaJS.as.scala_Product3$ = (function(obj) {
  if ((ScalaJS.is.scala_Product3$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product3")
  }
});
ScalaJS.isArrayOf.scala_Product3$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product3$)))
});
ScalaJS.asArrayOf.scala_Product3$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product3$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product3;", depth)
  }
});
ScalaJS.data.scala_Product3$ = new ScalaJS.ClassTypeData({
  scala_Product3$: 0
}, false, "scala.Product3$", ScalaJS.data.java_lang_Object, {
  scala_Product3$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product3$.prototype.$classData = ScalaJS.data.scala_Product3$;
ScalaJS.moduleInstances.scala_Product3 = undefined;
ScalaJS.modules.scala_Product3 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product3)) {
    ScalaJS.moduleInstances.scala_Product3 = new ScalaJS.c.scala_Product3$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product3
});
//@ sourceMappingURL=Product3$.js.map
