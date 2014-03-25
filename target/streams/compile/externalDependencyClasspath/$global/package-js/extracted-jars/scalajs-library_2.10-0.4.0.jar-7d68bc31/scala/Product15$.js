/** @constructor */
ScalaJS.c.scala_Product15$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product15$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product15$.prototype.constructor = ScalaJS.c.scala_Product15$;
ScalaJS.c.scala_Product15$.prototype.unapply__Lscala_Product15__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product15$.prototype.unapply__Lscala_Product15__ = (function(x) {
  return this.unapply__Lscala_Product15__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product15$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product15$.prototype = ScalaJS.c.scala_Product15$.prototype;
ScalaJS.is.scala_Product15$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product15$)))
});
ScalaJS.as.scala_Product15$ = (function(obj) {
  if ((ScalaJS.is.scala_Product15$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product15")
  }
});
ScalaJS.isArrayOf.scala_Product15$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product15$)))
});
ScalaJS.asArrayOf.scala_Product15$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product15$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product15;", depth)
  }
});
ScalaJS.data.scala_Product15$ = new ScalaJS.ClassTypeData({
  scala_Product15$: 0
}, false, "scala.Product15$", ScalaJS.data.java_lang_Object, {
  scala_Product15$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product15$.prototype.$classData = ScalaJS.data.scala_Product15$;
ScalaJS.moduleInstances.scala_Product15 = undefined;
ScalaJS.modules.scala_Product15 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product15)) {
    ScalaJS.moduleInstances.scala_Product15 = new ScalaJS.c.scala_Product15$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product15
});
//@ sourceMappingURL=Product15$.js.map
