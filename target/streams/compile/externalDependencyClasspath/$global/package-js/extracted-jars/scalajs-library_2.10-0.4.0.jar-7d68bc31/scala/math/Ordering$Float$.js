/** @constructor */
ScalaJS.c.scala_math_Ordering$Float$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordering$Float$.prototype.constructor = ScalaJS.c.scala_math_Ordering$Float$;
ScalaJS.c.scala_math_Ordering$Float$.prototype.compare__F__F__I = (function(x$18, y$18) {
  return ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__compare__Lscala_math_Ordering$FloatOrdering__F__F__I(this, x$18, y$18)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.lteq__F__F__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__lteq__Lscala_math_Ordering$FloatOrdering__F__F__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.gteq__F__F__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__gteq__Lscala_math_Ordering$FloatOrdering__F__F__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.lt__F__F__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__lt__Lscala_math_Ordering$FloatOrdering__F__F__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.gt__F__F__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__gt__Lscala_math_Ordering$FloatOrdering__F__F__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.equiv__F__F__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__equiv__Lscala_math_Ordering$FloatOrdering__F__F__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.max__F__F__F = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__max__Lscala_math_Ordering$FloatOrdering__F__F__F(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.min__F__F__F = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__min__Lscala_math_Ordering$FloatOrdering__F__F__F(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.reverse__Lscala_math_Ordering = (function() {
  return ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__reverse__Lscala_math_Ordering$FloatOrdering__Lscala_math_Ordering(this)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.tryCompare__O__O__Lscala_Some = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__tryCompare__Lscala_math_Ordering__O__O__Lscala_Some(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.on__Lscala_Function1__Lscala_math_Ordering = (function(f) {
  return ScalaJS.impls.scala_math_Ordering$class__on__Lscala_math_Ordering__Lscala_Function1__Lscala_math_Ordering(this, f)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.mkOrderingOps__O__Lscala_math_Ordering$Ops = (function(lhs) {
  return ScalaJS.impls.scala_math_Ordering$class__mkOrderingOps__Lscala_math_Ordering__O__Lscala_math_Ordering$Ops(this, lhs)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_Ordering$Float()
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.tryCompare__O__O__Lscala_Option = (function(x, y) {
  return this.tryCompare__O__O__Lscala_Some(x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.reverse__Lscala_math_PartialOrdering = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.min__O__O__O = (function(x, y) {
  return ScalaJS.bF(this.min__F__F__F(ScalaJS.uF(x), ScalaJS.uF(y)))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.max__O__O__O = (function(x, y) {
  return ScalaJS.bF(this.max__F__F__F(ScalaJS.uF(x), ScalaJS.uF(y)))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.equiv__O__O__Z = (function(x, y) {
  return this.equiv__F__F__Z(ScalaJS.uF(x), ScalaJS.uF(y))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.gt__O__O__Z = (function(x, y) {
  return this.gt__F__F__Z(ScalaJS.uF(x), ScalaJS.uF(y))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.lt__O__O__Z = (function(x, y) {
  return this.lt__F__F__Z(ScalaJS.uF(x), ScalaJS.uF(y))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.gteq__O__O__Z = (function(x, y) {
  return this.gteq__F__F__Z(ScalaJS.uF(x), ScalaJS.uF(y))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.lteq__O__O__Z = (function(x, y) {
  return this.lteq__F__F__Z(ScalaJS.uF(x), ScalaJS.uF(y))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.compare__O__O__I = (function(x, y) {
  return this.compare__F__F__I(ScalaJS.uF(x), ScalaJS.uF(y))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_Ordering$Float = this;
  ScalaJS.impls.scala_math_PartialOrdering$class__$init$__Lscala_math_PartialOrdering__V(this);
  ScalaJS.impls.scala_math_Ordering$class__$init$__Lscala_math_Ordering__V(this);
  ScalaJS.impls.scala_math_Ordering$FloatOrdering$class__$init$__Lscala_math_Ordering$FloatOrdering__V(this);
  return this
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.mkOrderingOps__O__ = (function(lhs) {
  return this.mkOrderingOps__O__Lscala_math_Ordering$Ops(lhs)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.on__Lscala_Function1__ = (function(f) {
  return this.on__Lscala_Function1__Lscala_math_Ordering(f)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.tryCompare__O__O__ = (function(x, y) {
  return this.tryCompare__O__O__Lscala_Some(x, y)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.reverse__ = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.min__F__F__ = (function(x$2, y$2) {
  return ScalaJS.bF(this.min__F__F__F(x$2, y$2))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.max__F__F__ = (function(x$3, y$3) {
  return ScalaJS.bF(this.max__F__F__F(x$3, y$3))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.equiv__F__F__ = (function(x$4, y$4) {
  return ScalaJS.bZ(this.equiv__F__F__Z(x$4, y$4))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.gt__F__F__ = (function(x$5, y$5) {
  return ScalaJS.bZ(this.gt__F__F__Z(x$5, y$5))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.lt__F__F__ = (function(x$6, y$6) {
  return ScalaJS.bZ(this.lt__F__F__Z(x$6, y$6))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.gteq__F__F__ = (function(x$7, y$7) {
  return ScalaJS.bZ(this.gteq__F__F__Z(x$7, y$7))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.lteq__F__F__ = (function(x$8, y$8) {
  return ScalaJS.bZ(this.lteq__F__F__Z(x$8, y$8))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.compare__F__F__ = (function(x$9, y$9) {
  return ScalaJS.bI(this.compare__F__F__I(x$9, y$9))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.min__O__O__ = (function(x$10, y$10) {
  return this.min__O__O__O(x$10, y$10)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.max__O__O__ = (function(x$11, y$11) {
  return this.max__O__O__O(x$11, y$11)
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.equiv__O__O__ = (function(x$12, y$12) {
  return ScalaJS.bZ(this.equiv__O__O__Z(x$12, y$12))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.gt__O__O__ = (function(x$13, y$13) {
  return ScalaJS.bZ(this.gt__O__O__Z(x$13, y$13))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.lt__O__O__ = (function(x$14, y$14) {
  return ScalaJS.bZ(this.lt__O__O__Z(x$14, y$14))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.gteq__O__O__ = (function(x$15, y$15) {
  return ScalaJS.bZ(this.gteq__O__O__Z(x$15, y$15))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.lteq__O__O__ = (function(x$16, y$16) {
  return ScalaJS.bZ(this.lteq__O__O__Z(x$16, y$16))
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.compare__O__O__ = (function(x$17, y$17) {
  return ScalaJS.bI(this.compare__O__O__I(x$17, y$17))
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordering$Float$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordering$Float$.prototype = ScalaJS.c.scala_math_Ordering$Float$.prototype;
ScalaJS.is.scala_math_Ordering$Float$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordering$Float$)))
});
ScalaJS.as.scala_math_Ordering$Float$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordering$Float$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordering$Float")
  }
});
ScalaJS.isArrayOf.scala_math_Ordering$Float$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordering$Float$)))
});
ScalaJS.asArrayOf.scala_math_Ordering$Float$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordering$Float$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordering$Float;", depth)
  }
});
ScalaJS.data.scala_math_Ordering$Float$ = new ScalaJS.ClassTypeData({
  scala_math_Ordering$Float$: 0
}, false, "scala.math.Ordering$Float$", ScalaJS.data.java_lang_Object, {
  scala_math_Ordering$Float$: 1,
  scala_math_Ordering$FloatOrdering: 1,
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordering$Float$.prototype.$classData = ScalaJS.data.scala_math_Ordering$Float$;
ScalaJS.moduleInstances.scala_math_Ordering$Float = undefined;
ScalaJS.modules.scala_math_Ordering$Float = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Ordering$Float)) {
    ScalaJS.moduleInstances.scala_math_Ordering$Float = new ScalaJS.c.scala_math_Ordering$Float$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Ordering$Float
});
//@ sourceMappingURL=Ordering$Float$.js.map
