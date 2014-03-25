/** @constructor */
ScalaJS.c.scala_math_Ordering$BigInt$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.constructor = ScalaJS.c.scala_math_Ordering$BigInt$;
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.compare__Lscala_math_BigInt__Lscala_math_BigInt__I = (function(x$18, y$18) {
  return ScalaJS.impls.scala_math_Ordering$BigIntOrdering$class__compare__Lscala_math_Ordering$BigIntOrdering__Lscala_math_BigInt__Lscala_math_BigInt__I(this, x$18, y$18)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.tryCompare__O__O__Lscala_Some = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__tryCompare__Lscala_math_Ordering__O__O__Lscala_Some(this, x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.lteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.gteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.lt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.gt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.equiv__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__equiv__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.max__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__max__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.min__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__min__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.reverse__Lscala_math_Ordering = (function() {
  return ScalaJS.impls.scala_math_Ordering$class__reverse__Lscala_math_Ordering__Lscala_math_Ordering(this)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.on__Lscala_Function1__Lscala_math_Ordering = (function(f) {
  return ScalaJS.impls.scala_math_Ordering$class__on__Lscala_math_Ordering__Lscala_Function1__Lscala_math_Ordering(this, f)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.mkOrderingOps__O__Lscala_math_Ordering$Ops = (function(lhs) {
  return ScalaJS.impls.scala_math_Ordering$class__mkOrderingOps__Lscala_math_Ordering__O__Lscala_math_Ordering$Ops(this, lhs)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_Ordering$BigInt()
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.reverse__Lscala_math_PartialOrdering = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.tryCompare__O__O__Lscala_Option = (function(x, y) {
  return this.tryCompare__O__O__Lscala_Some(x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.compare__O__O__I = (function(x, y) {
  return this.compare__Lscala_math_BigInt__Lscala_math_BigInt__I(ScalaJS.as.scala_math_BigInt(x), ScalaJS.as.scala_math_BigInt(y))
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_Ordering$BigInt = this;
  ScalaJS.impls.scala_math_PartialOrdering$class__$init$__Lscala_math_PartialOrdering__V(this);
  ScalaJS.impls.scala_math_Ordering$class__$init$__Lscala_math_Ordering__V(this);
  ScalaJS.impls.scala_math_Ordering$BigIntOrdering$class__$init$__Lscala_math_Ordering$BigIntOrdering__V(this);
  return this
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.mkOrderingOps__O__ = (function(lhs) {
  return this.mkOrderingOps__O__Lscala_math_Ordering$Ops(lhs)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.on__Lscala_Function1__ = (function(f) {
  return this.on__Lscala_Function1__Lscala_math_Ordering(f)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.reverse__ = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.min__O__O__ = (function(x, y) {
  return this.min__O__O__O(x, y)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.max__O__O__ = (function(x$2, y$2) {
  return this.max__O__O__O(x$2, y$2)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.equiv__O__O__ = (function(x$3, y$3) {
  return ScalaJS.bZ(this.equiv__O__O__Z(x$3, y$3))
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.gt__O__O__ = (function(x$4, y$4) {
  return ScalaJS.bZ(this.gt__O__O__Z(x$4, y$4))
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.lt__O__O__ = (function(x$5, y$5) {
  return ScalaJS.bZ(this.lt__O__O__Z(x$5, y$5))
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.gteq__O__O__ = (function(x$6, y$6) {
  return ScalaJS.bZ(this.gteq__O__O__Z(x$6, y$6))
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.lteq__O__O__ = (function(x$7, y$7) {
  return ScalaJS.bZ(this.lteq__O__O__Z(x$7, y$7))
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.tryCompare__O__O__ = (function(x$8, y$8) {
  return this.tryCompare__O__O__Lscala_Some(x$8, y$8)
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.compare__Lscala_math_BigInt__Lscala_math_BigInt__ = (function(x$9, y$9) {
  return ScalaJS.bI(this.compare__Lscala_math_BigInt__Lscala_math_BigInt__I(x$9, y$9))
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.compare__O__O__ = (function(x$10, y$10) {
  return ScalaJS.bI(this.compare__O__O__I(x$10, y$10))
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordering$BigInt$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordering$BigInt$.prototype = ScalaJS.c.scala_math_Ordering$BigInt$.prototype;
ScalaJS.is.scala_math_Ordering$BigInt$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordering$BigInt$)))
});
ScalaJS.as.scala_math_Ordering$BigInt$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordering$BigInt$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordering$BigInt")
  }
});
ScalaJS.isArrayOf.scala_math_Ordering$BigInt$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordering$BigInt$)))
});
ScalaJS.asArrayOf.scala_math_Ordering$BigInt$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordering$BigInt$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordering$BigInt;", depth)
  }
});
ScalaJS.data.scala_math_Ordering$BigInt$ = new ScalaJS.ClassTypeData({
  scala_math_Ordering$BigInt$: 0
}, false, "scala.math.Ordering$BigInt$", ScalaJS.data.java_lang_Object, {
  scala_math_Ordering$BigInt$: 1,
  scala_math_Ordering$BigIntOrdering: 1,
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordering$BigInt$.prototype.$classData = ScalaJS.data.scala_math_Ordering$BigInt$;
ScalaJS.moduleInstances.scala_math_Ordering$BigInt = undefined;
ScalaJS.modules.scala_math_Ordering$BigInt = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Ordering$BigInt)) {
    ScalaJS.moduleInstances.scala_math_Ordering$BigInt = new ScalaJS.c.scala_math_Ordering$BigInt$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Ordering$BigInt
});
//@ sourceMappingURL=Ordering$BigInt$.js.map
