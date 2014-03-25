/** @constructor */
ScalaJS.c.scala_Product9$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product9$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product9$.prototype.constructor = ScalaJS.c.scala_Product9$;
ScalaJS.c.scala_Product9$.prototype.unapply__Lscala_Product9__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product9$.prototype.unapply__Lscala_Product9__ = (function(x) {
  return this.unapply__Lscala_Product9__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product9$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product9$.prototype = ScalaJS.c.scala_Product9$.prototype;
ScalaJS.is.scala_Product9$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product9$)))
});
ScalaJS.as.scala_Product9$ = (function(obj) {
  if ((ScalaJS.is.scala_Product9$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product9")
  }
});
ScalaJS.isArrayOf.scala_Product9$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product9$)))
});
ScalaJS.asArrayOf.scala_Product9$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product9$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product9;", depth)
  }
});
ScalaJS.data.scala_Product9$ = new ScalaJS.ClassTypeData({
  scala_Product9$: 0
}, false, "scala.Product9$", ScalaJS.data.java_lang_Object, {
  scala_Product9$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product9$.prototype.$classData = ScalaJS.data.scala_Product9$;
ScalaJS.moduleInstances.scala_Product9 = undefined;
ScalaJS.modules.scala_Product9 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product9)) {
    ScalaJS.moduleInstances.scala_Product9 = new ScalaJS.c.scala_Product9$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product9
});
//@ sourceMappingURL=Product9$.js.map
