/** @constructor */
ScalaJS.c.scala_math_Ordering$Short$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordering$Short$.prototype.constructor = ScalaJS.c.scala_math_Ordering$Short$;
ScalaJS.c.scala_math_Ordering$Short$.prototype.compare__S__S__I = (function(x$11, y$11) {
  return ScalaJS.impls.scala_math_Ordering$ShortOrdering$class__compare__Lscala_math_Ordering$ShortOrdering__S__S__I(this, x$11, y$11)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.tryCompare__O__O__Lscala_Some = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__tryCompare__Lscala_math_Ordering__O__O__Lscala_Some(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.lteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.gteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.lt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.gt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.equiv__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__equiv__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.max__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__max__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.min__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__min__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.reverse__Lscala_math_Ordering = (function() {
  return ScalaJS.impls.scala_math_Ordering$class__reverse__Lscala_math_Ordering__Lscala_math_Ordering(this)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.on__Lscala_Function1__Lscala_math_Ordering = (function(f) {
  return ScalaJS.impls.scala_math_Ordering$class__on__Lscala_math_Ordering__Lscala_Function1__Lscala_math_Ordering(this, f)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.mkOrderingOps__O__Lscala_math_Ordering$Ops = (function(lhs) {
  return ScalaJS.impls.scala_math_Ordering$class__mkOrderingOps__Lscala_math_Ordering__O__Lscala_math_Ordering$Ops(this, lhs)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_Ordering$Short()
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.reverse__Lscala_math_PartialOrdering = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.tryCompare__O__O__Lscala_Option = (function(x, y) {
  return this.tryCompare__O__O__Lscala_Some(x, y)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.compare__O__O__I = (function(x, y) {
  return this.compare__S__S__I(ScalaJS.uS(x), ScalaJS.uS(y))
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_Ordering$Short = this;
  ScalaJS.impls.scala_math_PartialOrdering$class__$init$__Lscala_math_PartialOrdering__V(this);
  ScalaJS.impls.scala_math_Ordering$class__$init$__Lscala_math_Ordering__V(this);
  ScalaJS.impls.scala_math_Ordering$ShortOrdering$class__$init$__Lscala_math_Ordering$ShortOrdering__V(this);
  return this
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.mkOrderingOps__O__ = (function(lhs) {
  return this.mkOrderingOps__O__Lscala_math_Ordering$Ops(lhs)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.on__Lscala_Function1__ = (function(f) {
  return this.on__Lscala_Function1__Lscala_math_Ordering(f)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.reverse__ = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.min__O__O__ = (function(x, y) {
  return ScalaJS.bS(this.min__O__O__O(x, y))
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.max__O__O__ = (function(x$2, y$2) {
  return ScalaJS.bS(this.max__O__O__O(x$2, y$2))
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.equiv__O__O__ = (function(x$3, y$3) {
  return ScalaJS.bZ(this.equiv__O__O__Z(x$3, y$3))
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.gt__O__O__ = (function(x$4, y$4) {
  return ScalaJS.bZ(this.gt__O__O__Z(x$4, y$4))
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.lt__O__O__ = (function(x$5, y$5) {
  return ScalaJS.bZ(this.lt__O__O__Z(x$5, y$5))
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.gteq__O__O__ = (function(x$6, y$6) {
  return ScalaJS.bZ(this.gteq__O__O__Z(x$6, y$6))
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.lteq__O__O__ = (function(x$7, y$7) {
  return ScalaJS.bZ(this.lteq__O__O__Z(x$7, y$7))
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.tryCompare__O__O__ = (function(x$8, y$8) {
  return this.tryCompare__O__O__Lscala_Some(x$8, y$8)
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.compare__S__S__ = (function(x$9, y$9) {
  return ScalaJS.bI(this.compare__S__S__I(x$9, y$9))
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.compare__O__O__ = (function(x$10, y$10) {
  return ScalaJS.bI(this.compare__O__O__I(x$10, y$10))
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordering$Short$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordering$Short$.prototype = ScalaJS.c.scala_math_Ordering$Short$.prototype;
ScalaJS.is.scala_math_Ordering$Short$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordering$Short$)))
});
ScalaJS.as.scala_math_Ordering$Short$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordering$Short$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordering$Short")
  }
});
ScalaJS.isArrayOf.scala_math_Ordering$Short$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordering$Short$)))
});
ScalaJS.asArrayOf.scala_math_Ordering$Short$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordering$Short$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordering$Short;", depth)
  }
});
ScalaJS.data.scala_math_Ordering$Short$ = new ScalaJS.ClassTypeData({
  scala_math_Ordering$Short$: 0
}, false, "scala.math.Ordering$Short$", ScalaJS.data.java_lang_Object, {
  scala_math_Ordering$Short$: 1,
  scala_math_Ordering$ShortOrdering: 1,
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordering$Short$.prototype.$classData = ScalaJS.data.scala_math_Ordering$Short$;
ScalaJS.moduleInstances.scala_math_Ordering$Short = undefined;
ScalaJS.modules.scala_math_Ordering$Short = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Ordering$Short)) {
    ScalaJS.moduleInstances.scala_math_Ordering$Short = new ScalaJS.c.scala_math_Ordering$Short$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Ordering$Short
});
//@ sourceMappingURL=Ordering$Short$.js.map
