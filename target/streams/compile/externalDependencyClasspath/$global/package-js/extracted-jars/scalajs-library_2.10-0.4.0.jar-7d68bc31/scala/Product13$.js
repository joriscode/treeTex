/** @constructor */
ScalaJS.c.scala_Product13$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product13$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product13$.prototype.constructor = ScalaJS.c.scala_Product13$;
ScalaJS.c.scala_Product13$.prototype.unapply__Lscala_Product13__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product13$.prototype.unapply__Lscala_Product13__ = (function(x) {
  return this.unapply__Lscala_Product13__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product13$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product13$.prototype = ScalaJS.c.scala_Product13$.prototype;
ScalaJS.is.scala_Product13$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product13$)))
});
ScalaJS.as.scala_Product13$ = (function(obj) {
  if ((ScalaJS.is.scala_Product13$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product13")
  }
});
ScalaJS.isArrayOf.scala_Product13$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product13$)))
});
ScalaJS.asArrayOf.scala_Product13$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product13$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product13;", depth)
  }
});
ScalaJS.data.scala_Product13$ = new ScalaJS.ClassTypeData({
  scala_Product13$: 0
}, false, "scala.Product13$", ScalaJS.data.java_lang_Object, {
  scala_Product13$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product13$.prototype.$classData = ScalaJS.data.scala_Product13$;
ScalaJS.moduleInstances.scala_Product13 = undefined;
ScalaJS.modules.scala_Product13 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product13)) {
    ScalaJS.moduleInstances.scala_Product13 = new ScalaJS.c.scala_Product13$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product13
});
//@ sourceMappingURL=Product13$.js.map
