/** @constructor */
ScalaJS.c.scala_Product1$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product1$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product1$.prototype.constructor = ScalaJS.c.scala_Product1$;
ScalaJS.c.scala_Product1$.prototype.unapply__Lscala_Product1__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product1$.prototype.unapply__Lscala_Product1__ = (function(x) {
  return this.unapply__Lscala_Product1__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product1$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product1$.prototype = ScalaJS.c.scala_Product1$.prototype;
ScalaJS.is.scala_Product1$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product1$)))
});
ScalaJS.as.scala_Product1$ = (function(obj) {
  if ((ScalaJS.is.scala_Product1$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product1")
  }
});
ScalaJS.isArrayOf.scala_Product1$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product1$)))
});
ScalaJS.asArrayOf.scala_Product1$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product1$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product1;", depth)
  }
});
ScalaJS.data.scala_Product1$ = new ScalaJS.ClassTypeData({
  scala_Product1$: 0
}, false, "scala.Product1$", ScalaJS.data.java_lang_Object, {
  scala_Product1$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product1$.prototype.$classData = ScalaJS.data.scala_Product1$;
ScalaJS.moduleInstances.scala_Product1 = undefined;
ScalaJS.modules.scala_Product1 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product1)) {
    ScalaJS.moduleInstances.scala_Product1 = new ScalaJS.c.scala_Product1$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product1
});
//@ sourceMappingURL=Product1$.js.map
