/** @constructor */
ScalaJS.c.scala_math_Ordering$$anon$3 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.optionOrdering$1 = null
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.constructor = ScalaJS.c.scala_math_Ordering$$anon$3;
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.compare__Lscala_Option__Lscala_Option__I = (function(x$10, y$10) {
  return ScalaJS.impls.scala_math_Ordering$OptionOrdering$class__compare__Lscala_math_Ordering$OptionOrdering__Lscala_Option__Lscala_Option__I(this, x$10, y$10)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.tryCompare__O__O__Lscala_Some = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__tryCompare__Lscala_math_Ordering__O__O__Lscala_Some(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.lteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.gteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.lt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.gt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.equiv__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__equiv__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.max__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__max__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.min__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__min__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.reverse__Lscala_math_Ordering = (function() {
  return ScalaJS.impls.scala_math_Ordering$class__reverse__Lscala_math_Ordering__Lscala_math_Ordering(this)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.on__Lscala_Function1__Lscala_math_Ordering = (function(f) {
  return ScalaJS.impls.scala_math_Ordering$class__on__Lscala_math_Ordering__Lscala_Function1__Lscala_math_Ordering(this, f)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.mkOrderingOps__O__Lscala_math_Ordering$Ops = (function(lhs) {
  return ScalaJS.impls.scala_math_Ordering$class__mkOrderingOps__Lscala_math_Ordering__O__Lscala_math_Ordering$Ops(this, lhs)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.optionOrdering__Lscala_math_Ordering = (function() {
  return this.optionOrdering$1
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.reverse__Lscala_math_PartialOrdering = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.tryCompare__O__O__Lscala_Option = (function(x, y) {
  return this.tryCompare__O__O__Lscala_Some(x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.compare__O__O__I = (function(x, y) {
  return this.compare__Lscala_Option__Lscala_Option__I(ScalaJS.as.scala_Option(x), ScalaJS.as.scala_Option(y))
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.init___Lscala_math_Ordering = (function(ord$2) {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_math_PartialOrdering$class__$init$__Lscala_math_PartialOrdering__V(this);
  ScalaJS.impls.scala_math_Ordering$class__$init$__Lscala_math_Ordering__V(this);
  ScalaJS.impls.scala_math_Ordering$OptionOrdering$class__$init$__Lscala_math_Ordering$OptionOrdering__V(this);
  this.optionOrdering$1 = ord$2;
  return this
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.mkOrderingOps__O__ = (function(lhs) {
  return this.mkOrderingOps__O__Lscala_math_Ordering$Ops(lhs)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.on__Lscala_Function1__ = (function(f) {
  return this.on__Lscala_Function1__Lscala_math_Ordering(f)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.reverse__ = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.min__O__O__ = (function(x, y) {
  return this.min__O__O__O(x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.max__O__O__ = (function(x$2, y$2) {
  return this.max__O__O__O(x$2, y$2)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.equiv__O__O__ = (function(x$3, y$3) {
  return ScalaJS.bZ(this.equiv__O__O__Z(x$3, y$3))
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.gt__O__O__ = (function(x$4, y$4) {
  return ScalaJS.bZ(this.gt__O__O__Z(x$4, y$4))
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.lt__O__O__ = (function(x$5, y$5) {
  return ScalaJS.bZ(this.lt__O__O__Z(x$5, y$5))
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.gteq__O__O__ = (function(x$6, y$6) {
  return ScalaJS.bZ(this.gteq__O__O__Z(x$6, y$6))
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.lteq__O__O__ = (function(x$7, y$7) {
  return ScalaJS.bZ(this.lteq__O__O__Z(x$7, y$7))
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.tryCompare__O__O__ = (function(x$8, y$8) {
  return this.tryCompare__O__O__Lscala_Some(x$8, y$8)
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.compare__Lscala_Option__Lscala_Option__ = (function(x$9, y$9) {
  return ScalaJS.bI(this.compare__Lscala_Option__Lscala_Option__I(x$9, y$9))
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.optionOrdering__ = (function() {
  return this.optionOrdering__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.compare__O__O__ = (function(x$10, y$10) {
  return ScalaJS.bI(this.compare__O__O__I(x$10, y$10))
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordering$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordering$$anon$3.prototype = ScalaJS.c.scala_math_Ordering$$anon$3.prototype;
ScalaJS.is.scala_math_Ordering$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordering$$anon$3)))
});
ScalaJS.as.scala_math_Ordering$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordering$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordering$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_math_Ordering$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordering$$anon$3)))
});
ScalaJS.asArrayOf.scala_math_Ordering$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordering$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordering$$anon$3;", depth)
  }
});
ScalaJS.data.scala_math_Ordering$$anon$3 = new ScalaJS.ClassTypeData({
  scala_math_Ordering$$anon$3: 0
}, false, "scala.math.Ordering$$anon$3", ScalaJS.data.java_lang_Object, {
  scala_math_Ordering$$anon$3: 1,
  scala_math_Ordering$OptionOrdering: 1,
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordering$$anon$3.prototype.$classData = ScalaJS.data.scala_math_Ordering$$anon$3;
//@ sourceMappingURL=Ordering$$anon$3.js.map
