/** @constructor */
ScalaJS.c.scala_Product20$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product20$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product20$.prototype.constructor = ScalaJS.c.scala_Product20$;
ScalaJS.c.scala_Product20$.prototype.unapply__Lscala_Product20__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product20$.prototype.unapply__Lscala_Product20__ = (function(x) {
  return this.unapply__Lscala_Product20__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product20$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product20$.prototype = ScalaJS.c.scala_Product20$.prototype;
ScalaJS.is.scala_Product20$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product20$)))
});
ScalaJS.as.scala_Product20$ = (function(obj) {
  if ((ScalaJS.is.scala_Product20$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product20")
  }
});
ScalaJS.isArrayOf.scala_Product20$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product20$)))
});
ScalaJS.asArrayOf.scala_Product20$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product20$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product20;", depth)
  }
});
ScalaJS.data.scala_Product20$ = new ScalaJS.ClassTypeData({
  scala_Product20$: 0
}, false, "scala.Product20$", ScalaJS.data.java_lang_Object, {
  scala_Product20$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product20$.prototype.$classData = ScalaJS.data.scala_Product20$;
ScalaJS.moduleInstances.scala_Product20 = undefined;
ScalaJS.modules.scala_Product20 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product20)) {
    ScalaJS.moduleInstances.scala_Product20 = new ScalaJS.c.scala_Product20$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product20
});
//@ sourceMappingURL=Product20$.js.map
