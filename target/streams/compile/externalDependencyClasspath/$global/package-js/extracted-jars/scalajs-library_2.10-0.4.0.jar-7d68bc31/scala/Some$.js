/** @constructor */
ScalaJS.c.scala_Some$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Some$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Some$.prototype.constructor = ScalaJS.c.scala_Some$;
ScalaJS.c.scala_Some$.prototype.toString__T = (function() {
  return "Some"
});
ScalaJS.c.scala_Some$.prototype.apply__O__Lscala_Some = (function(x) {
  return new ScalaJS.c.scala_Some().init___O(x)
});
ScalaJS.c.scala_Some$.prototype.unapply__Lscala_Some__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.x__O())
  }
});
ScalaJS.c.scala_Some$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Some()
});
ScalaJS.c.scala_Some$.prototype.unapply__Lscala_Some__ = (function(x$0) {
  return this.unapply__Lscala_Some__Lscala_Option(x$0)
});
ScalaJS.c.scala_Some$.prototype.apply__O__ = (function(x) {
  return this.apply__O__Lscala_Some(x)
});
/** @constructor */
ScalaJS.inheritable.scala_Some$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Some$.prototype = ScalaJS.c.scala_Some$.prototype;
ScalaJS.is.scala_Some$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Some$)))
});
ScalaJS.as.scala_Some$ = (function(obj) {
  if ((ScalaJS.is.scala_Some$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Some")
  }
});
ScalaJS.isArrayOf.scala_Some$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Some$)))
});
ScalaJS.asArrayOf.scala_Some$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Some$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Some;", depth)
  }
});
ScalaJS.data.scala_Some$ = new ScalaJS.ClassTypeData({
  scala_Some$: 0
}, false, "scala.Some$", ScalaJS.data.java_lang_Object, {
  scala_Some$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Some$.prototype.$classData = ScalaJS.data.scala_Some$;
ScalaJS.moduleInstances.scala_Some = undefined;
ScalaJS.modules.scala_Some = (function() {
  if ((!ScalaJS.moduleInstances.scala_Some)) {
    ScalaJS.moduleInstances.scala_Some = new ScalaJS.c.scala_Some$().init___()
  };
  return ScalaJS.moduleInstances.scala_Some
});
//@ sourceMappingURL=Some$.js.map
