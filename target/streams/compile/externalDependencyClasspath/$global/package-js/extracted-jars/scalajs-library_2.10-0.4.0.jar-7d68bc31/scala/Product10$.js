/** @constructor */
ScalaJS.c.scala_Product10$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product10$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product10$.prototype.constructor = ScalaJS.c.scala_Product10$;
ScalaJS.c.scala_Product10$.prototype.unapply__Lscala_Product10__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product10$.prototype.unapply__Lscala_Product10__ = (function(x) {
  return this.unapply__Lscala_Product10__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product10$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product10$.prototype = ScalaJS.c.scala_Product10$.prototype;
ScalaJS.is.scala_Product10$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product10$)))
});
ScalaJS.as.scala_Product10$ = (function(obj) {
  if ((ScalaJS.is.scala_Product10$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product10")
  }
});
ScalaJS.isArrayOf.scala_Product10$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product10$)))
});
ScalaJS.asArrayOf.scala_Product10$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product10$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product10;", depth)
  }
});
ScalaJS.data.scala_Product10$ = new ScalaJS.ClassTypeData({
  scala_Product10$: 0
}, false, "scala.Product10$", ScalaJS.data.java_lang_Object, {
  scala_Product10$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product10$.prototype.$classData = ScalaJS.data.scala_Product10$;
ScalaJS.moduleInstances.scala_Product10 = undefined;
ScalaJS.modules.scala_Product10 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product10)) {
    ScalaJS.moduleInstances.scala_Product10 = new ScalaJS.c.scala_Product10$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product10
});
//@ sourceMappingURL=Product10$.js.map
