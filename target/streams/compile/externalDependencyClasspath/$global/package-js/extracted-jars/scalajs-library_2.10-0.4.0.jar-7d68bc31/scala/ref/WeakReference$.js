/** @constructor */
ScalaJS.c.scala_ref_WeakReference$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_ref_WeakReference$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_ref_WeakReference$.prototype.constructor = ScalaJS.c.scala_ref_WeakReference$;
ScalaJS.c.scala_ref_WeakReference$.prototype.apply__O__Lscala_ref_WeakReference = (function(value) {
  return new ScalaJS.c.scala_ref_WeakReference().init___O(value)
});
ScalaJS.c.scala_ref_WeakReference$.prototype.unapply__Lscala_ref_WeakReference__Lscala_Option = (function(wr) {
  var x = wr.underlying__Ljava_lang_ref_WeakReference().get__O();
  if ((!ScalaJS.anyRefEqEq(x, null))) {
    return new ScalaJS.c.scala_Some().init___O(x)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_ref_WeakReference$.prototype.unapply__Lscala_ref_WeakReference__ = (function(wr) {
  return this.unapply__Lscala_ref_WeakReference__Lscala_Option(wr)
});
ScalaJS.c.scala_ref_WeakReference$.prototype.apply__O__ = (function(value) {
  return this.apply__O__Lscala_ref_WeakReference(value)
});
/** @constructor */
ScalaJS.inheritable.scala_ref_WeakReference$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_ref_WeakReference$.prototype = ScalaJS.c.scala_ref_WeakReference$.prototype;
ScalaJS.is.scala_ref_WeakReference$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ref_WeakReference$)))
});
ScalaJS.as.scala_ref_WeakReference$ = (function(obj) {
  if ((ScalaJS.is.scala_ref_WeakReference$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ref.WeakReference")
  }
});
ScalaJS.isArrayOf.scala_ref_WeakReference$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ref_WeakReference$)))
});
ScalaJS.asArrayOf.scala_ref_WeakReference$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ref_WeakReference$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ref.WeakReference;", depth)
  }
});
ScalaJS.data.scala_ref_WeakReference$ = new ScalaJS.ClassTypeData({
  scala_ref_WeakReference$: 0
}, false, "scala.ref.WeakReference$", ScalaJS.data.java_lang_Object, {
  scala_ref_WeakReference$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_ref_WeakReference$.prototype.$classData = ScalaJS.data.scala_ref_WeakReference$;
ScalaJS.moduleInstances.scala_ref_WeakReference = undefined;
ScalaJS.modules.scala_ref_WeakReference = (function() {
  if ((!ScalaJS.moduleInstances.scala_ref_WeakReference)) {
    ScalaJS.moduleInstances.scala_ref_WeakReference = new ScalaJS.c.scala_ref_WeakReference$().init___()
  };
  return ScalaJS.moduleInstances.scala_ref_WeakReference
});
//@ sourceMappingURL=WeakReference$.js.map
