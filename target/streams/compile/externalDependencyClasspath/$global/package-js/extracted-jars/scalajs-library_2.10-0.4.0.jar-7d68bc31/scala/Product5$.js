/** @constructor */
ScalaJS.c.scala_Product5$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Product5$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Product5$.prototype.constructor = ScalaJS.c.scala_Product5$;
ScalaJS.c.scala_Product5$.prototype.unapply__Lscala_Product5__Lscala_Option = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Product5$.prototype.unapply__Lscala_Product5__ = (function(x) {
  return this.unapply__Lscala_Product5__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Product5$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Product5$.prototype = ScalaJS.c.scala_Product5$.prototype;
ScalaJS.is.scala_Product5$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product5$)))
});
ScalaJS.as.scala_Product5$ = (function(obj) {
  if ((ScalaJS.is.scala_Product5$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product5")
  }
});
ScalaJS.isArrayOf.scala_Product5$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product5$)))
});
ScalaJS.asArrayOf.scala_Product5$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product5$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product5;", depth)
  }
});
ScalaJS.data.scala_Product5$ = new ScalaJS.ClassTypeData({
  scala_Product5$: 0
}, false, "scala.Product5$", ScalaJS.data.java_lang_Object, {
  scala_Product5$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Product5$.prototype.$classData = ScalaJS.data.scala_Product5$;
ScalaJS.moduleInstances.scala_Product5 = undefined;
ScalaJS.modules.scala_Product5 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Product5)) {
    ScalaJS.moduleInstances.scala_Product5 = new ScalaJS.c.scala_Product5$().init___()
  };
  return ScalaJS.moduleInstances.scala_Product5
});
//@ sourceMappingURL=Product5$.js.map
