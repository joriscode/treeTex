/** @constructor */
ScalaJS.c.scala_Product19$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product19$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product19$.prototype.constructor = ScalaJS.c.scala_Product19$;
ScalaJS.c.scala_Product19$.prototype.unapply__Lscala_Product19__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product19$.prototype.unapply__Lscala_Product19__ = (function(x) {
  return this.unapply__Lscala_Product19__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product19$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product19$.prototype = ScalaJS.c.scala_Product19$.prototype;
ScalaJS.is.scala_Product19$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product19$)))
});
ScalaJS.as.scala_Product19$ = (function(obj) {
  if ((ScalaJS.is.scala_Product19$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product19")
  }
});
ScalaJS.isArrayOf.scala_Product19$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product19$)))
});
ScalaJS.asArrayOf.scala_Product19$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product19$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product19;", depth)
  }
});
ScalaJS.data.scala_Product19$ = new ScalaJS.ClassTypeData({
  scala_Product19$: 0
}, false, "scala.Product19$", ScalaJS.data.java_lang_Object, {
  scala_Product19$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product19$.prototype.$classData = ScalaJS.data.scala_Product19$;
ScalaJS.moduleInstances.scala_Product19 = undefined;
ScalaJS.modules.scala_Product19 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product19)) {
    ScalaJS.moduleInstances.scala_Product19 = new ScalaJS.c.scala_Product19$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product19
});
//@ sourceMappingURL=Product19$.js.map
