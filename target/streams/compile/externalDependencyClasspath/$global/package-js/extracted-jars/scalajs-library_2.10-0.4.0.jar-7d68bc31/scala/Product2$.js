/** @constructor */
ScalaJS.c.scala_Product2$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product2$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product2$.prototype.constructor = ScalaJS.c.scala_Product2$;
ScalaJS.c.scala_Product2$.prototype.unapply__Lscala_Product2__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product2$.prototype.unapply__Lscala_Product2__ = (function(x) {
  return this.unapply__Lscala_Product2__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product2$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product2$.prototype = ScalaJS.c.scala_Product2$.prototype;
ScalaJS.is.scala_Product2$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product2$)))
});
ScalaJS.as.scala_Product2$ = (function(obj) {
  if ((ScalaJS.is.scala_Product2$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product2")
  }
});
ScalaJS.isArrayOf.scala_Product2$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product2$)))
});
ScalaJS.asArrayOf.scala_Product2$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product2$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product2;", depth)
  }
});
ScalaJS.data.scala_Product2$ = new ScalaJS.ClassTypeData({
  scala_Product2$: 0
}, false, "scala.Product2$", ScalaJS.data.java_lang_Object, {
  scala_Product2$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product2$.prototype.$classData = ScalaJS.data.scala_Product2$;
ScalaJS.moduleInstances.scala_Product2 = undefined;
ScalaJS.modules.scala_Product2 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product2)) {
    ScalaJS.moduleInstances.scala_Product2 = new ScalaJS.c.scala_Product2$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product2
});
//@ sourceMappingURL=Product2$.js.map
