/** @constructor */
ScalaJS.c.scala_Product7$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product7$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product7$.prototype.constructor = ScalaJS.c.scala_Product7$;
ScalaJS.c.scala_Product7$.prototype.unapply__Lscala_Product7__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product7$.prototype.unapply__Lscala_Product7__ = (function(x) {
  return this.unapply__Lscala_Product7__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product7$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product7$.prototype = ScalaJS.c.scala_Product7$.prototype;
ScalaJS.is.scala_Product7$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product7$)))
});
ScalaJS.as.scala_Product7$ = (function(obj) {
  if ((ScalaJS.is.scala_Product7$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product7")
  }
});
ScalaJS.isArrayOf.scala_Product7$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product7$)))
});
ScalaJS.asArrayOf.scala_Product7$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product7$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product7;", depth)
  }
});
ScalaJS.data.scala_Product7$ = new ScalaJS.ClassTypeData({
  scala_Product7$: 0
}, false, "scala.Product7$", ScalaJS.data.java_lang_Object, {
  scala_Product7$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product7$.prototype.$classData = ScalaJS.data.scala_Product7$;
ScalaJS.moduleInstances.scala_Product7 = undefined;
ScalaJS.modules.scala_Product7 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product7)) {
    ScalaJS.moduleInstances.scala_Product7 = new ScalaJS.c.scala_Product7$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product7
});
//@ sourceMappingURL=Product7$.js.map
