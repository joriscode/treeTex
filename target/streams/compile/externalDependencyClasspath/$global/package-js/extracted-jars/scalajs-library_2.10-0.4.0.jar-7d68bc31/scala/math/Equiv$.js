/** @constructor */
ScalaJS.c.scala_math_Equiv$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Equiv$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Equiv$.prototype.constructor = ScalaJS.c.scala_math_Equiv$;
ScalaJS.c.scala_math_Equiv$.prototype.universalEquiv__Lscala_math_Equiv = (function() {
  return ScalaJS.impls.scala_math_LowPriorityEquiv$class__universalEquiv__Lscala_math_Equiv$__Lscala_math_Equiv(this)
});
ScalaJS.c.scala_math_Equiv$.prototype.reference__Lscala_math_Equiv = (function() {
  return new ScalaJS.c.scala_math_Equiv$$anon$1().init___()
});
ScalaJS.c.scala_math_Equiv$.prototype.universal__Lscala_math_Equiv = (function() {
  return new ScalaJS.c.scala_math_Equiv$$anon$2().init___()
});
ScalaJS.c.scala_math_Equiv$.prototype.fromComparator__Ljava_util_Comparator__Lscala_math_Equiv = (function(cmp) {
  return new ScalaJS.c.scala_math_Equiv$$anon$3().init___Ljava_util_Comparator(cmp)
});
ScalaJS.c.scala_math_Equiv$.prototype.fromFunction__Lscala_Function2__Lscala_math_Equiv = (function(cmp) {
  return new ScalaJS.c.scala_math_Equiv$$anon$4().init___Lscala_Function2(cmp)
});
ScalaJS.c.scala_math_Equiv$.prototype.by__Lscala_Function1__Lscala_math_Equiv__Lscala_math_Equiv = (function(f, evidence$1) {
  return this.fromFunction__Lscala_Function2__Lscala_math_Equiv(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(f$1, evidence$1$1) {
    return (function(x$2, y) {
      return ScalaJS.bZ(ScalaJS.as.scala_math_Equiv(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$1$1)).equiv__O__O__Z(f$1.apply__O__O(x$2), f$1.apply__O__O(y)))
    })
  })(f, evidence$1)))
});
ScalaJS.c.scala_math_Equiv$.prototype.apply__Lscala_math_Equiv__Lscala_math_Equiv = (function(evidence$2) {
  return ScalaJS.as.scala_math_Equiv(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$2))
});
ScalaJS.c.scala_math_Equiv$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_Equiv()
});
ScalaJS.c.scala_math_Equiv$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_Equiv = this;
  ScalaJS.impls.scala_math_LowPriorityEquiv$class__$init$__Lscala_math_Equiv$__V(this);
  return this
});
ScalaJS.c.scala_math_Equiv$.prototype.universalEquiv__ = (function() {
  return this.universalEquiv__Lscala_math_Equiv()
});
ScalaJS.c.scala_math_Equiv$.prototype.apply__Lscala_math_Equiv__ = (function(evidence$2) {
  return this.apply__Lscala_math_Equiv__Lscala_math_Equiv(evidence$2)
});
ScalaJS.c.scala_math_Equiv$.prototype.by__Lscala_Function1__Lscala_math_Equiv__ = (function(f, evidence$1) {
  return this.by__Lscala_Function1__Lscala_math_Equiv__Lscala_math_Equiv(f, evidence$1)
});
ScalaJS.c.scala_math_Equiv$.prototype.fromFunction__Lscala_Function2__ = (function(cmp) {
  return this.fromFunction__Lscala_Function2__Lscala_math_Equiv(cmp)
});
ScalaJS.c.scala_math_Equiv$.prototype.fromComparator__Ljava_util_Comparator__ = (function(cmp$2) {
  return this.fromComparator__Ljava_util_Comparator__Lscala_math_Equiv(cmp$2)
});
ScalaJS.c.scala_math_Equiv$.prototype.universal__ = (function() {
  return this.universal__Lscala_math_Equiv()
});
ScalaJS.c.scala_math_Equiv$.prototype.reference__ = (function() {
  return this.reference__Lscala_math_Equiv()
});
/** @constructor */
ScalaJS.inheritable.scala_math_Equiv$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Equiv$.prototype = ScalaJS.c.scala_math_Equiv$.prototype;
ScalaJS.is.scala_math_Equiv$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Equiv$)))
});
ScalaJS.as.scala_math_Equiv$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Equiv$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Equiv")
  }
});
ScalaJS.isArrayOf.scala_math_Equiv$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Equiv$)))
});
ScalaJS.asArrayOf.scala_math_Equiv$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Equiv$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Equiv;", depth)
  }
});
ScalaJS.data.scala_math_Equiv$ = new ScalaJS.ClassTypeData({
  scala_math_Equiv$: 0
}, false, "scala.math.Equiv$", ScalaJS.data.java_lang_Object, {
  scala_math_Equiv$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_math_LowPriorityEquiv: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Equiv$.prototype.$classData = ScalaJS.data.scala_math_Equiv$;
ScalaJS.moduleInstances.scala_math_Equiv = undefined;
ScalaJS.modules.scala_math_Equiv = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Equiv)) {
    ScalaJS.moduleInstances.scala_math_Equiv = new ScalaJS.c.scala_math_Equiv$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Equiv
});
//@ sourceMappingURL=Equiv$.js.map
