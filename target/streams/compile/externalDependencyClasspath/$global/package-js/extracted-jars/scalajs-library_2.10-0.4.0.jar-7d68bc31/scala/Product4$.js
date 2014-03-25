/** @constructor */
ScalaJS.c.scala_Product4$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product4$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product4$.prototype.constructor = ScalaJS.c.scala_Product4$;
ScalaJS.c.scala_Product4$.prototype.unapply__Lscala_Product4__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product4$.prototype.unapply__Lscala_Product4__ = (function(x) {
  return this.unapply__Lscala_Product4__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product4$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product4$.prototype = ScalaJS.c.scala_Product4$.prototype;
ScalaJS.is.scala_Product4$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product4$)))
});
ScalaJS.as.scala_Product4$ = (function(obj) {
  if ((ScalaJS.is.scala_Product4$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product4")
  }
});
ScalaJS.isArrayOf.scala_Product4$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product4$)))
});
ScalaJS.asArrayOf.scala_Product4$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product4$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product4;", depth)
  }
});
ScalaJS.data.scala_Product4$ = new ScalaJS.ClassTypeData({
  scala_Product4$: 0
}, false, "scala.Product4$", ScalaJS.data.java_lang_Object, {
  scala_Product4$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product4$.prototype.$classData = ScalaJS.data.scala_Product4$;
ScalaJS.moduleInstances.scala_Product4 = undefined;
ScalaJS.modules.scala_Product4 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product4)) {
    ScalaJS.moduleInstances.scala_Product4 = new ScalaJS.c.scala_Product4$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product4
});
//@ sourceMappingURL=Product4$.js.map
