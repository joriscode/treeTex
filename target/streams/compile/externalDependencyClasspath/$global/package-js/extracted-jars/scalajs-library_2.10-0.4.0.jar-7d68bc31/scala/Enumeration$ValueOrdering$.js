/** @constructor */
ScalaJS.c.scala_Enumeration$ValueOrdering$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.constructor = ScalaJS.c.scala_Enumeration$ValueOrdering$;
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.tryCompare__O__O__Lscala_Some = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__tryCompare__Lscala_math_Ordering__O__O__Lscala_Some(this, x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.lteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.gteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.lt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.gt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.equiv__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__equiv__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.max__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__max__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.min__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__min__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.reverse__Lscala_math_Ordering = (function() {
  return ScalaJS.impls.scala_math_Ordering$class__reverse__Lscala_math_Ordering__Lscala_math_Ordering(this)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.on__Lscala_Function1__Lscala_math_Ordering = (function(f) {
  return ScalaJS.impls.scala_math_Ordering$class__on__Lscala_math_Ordering__Lscala_Function1__Lscala_math_Ordering(this, f)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.mkOrderingOps__O__Lscala_math_Ordering$Ops = (function(lhs) {
  return ScalaJS.impls.scala_math_Ordering$class__mkOrderingOps__Lscala_math_Ordering__O__Lscala_math_Ordering$Ops(this, lhs)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.compare__Lscala_Enumeration$Value__Lscala_Enumeration$Value__I = (function(x, y) {
  return x.compare__Lscala_Enumeration$Value__I(y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.readResolve__p1__O = (function() {
  return this.$$outer$1.ValueOrdering__Lscala_Enumeration$ValueOrdering$()
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.reverse__Lscala_math_PartialOrdering = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.tryCompare__O__O__Lscala_Option = (function(x, y) {
  return this.tryCompare__O__O__Lscala_Some(x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.compare__O__O__I = (function(x, y) {
  return this.compare__Lscala_Enumeration$Value__Lscala_Enumeration$Value__I(ScalaJS.as.scala_Enumeration$Value(x), ScalaJS.as.scala_Enumeration$Value(y))
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.init___Lscala_Enumeration = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_math_PartialOrdering$class__$init$__Lscala_math_PartialOrdering__V(this);
  ScalaJS.impls.scala_math_Ordering$class__$init$__Lscala_math_Ordering__V(this);
  return this
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.mkOrderingOps__O__ = (function(lhs) {
  return this.mkOrderingOps__O__Lscala_math_Ordering$Ops(lhs)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.on__Lscala_Function1__ = (function(f) {
  return this.on__Lscala_Function1__Lscala_math_Ordering(f)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.reverse__ = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.min__O__O__ = (function(x, y) {
  return this.min__O__O__O(x, y)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.max__O__O__ = (function(x$2, y$2) {
  return this.max__O__O__O(x$2, y$2)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.equiv__O__O__ = (function(x$3, y$3) {
  return ScalaJS.bZ(this.equiv__O__O__Z(x$3, y$3))
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.gt__O__O__ = (function(x$4, y$4) {
  return ScalaJS.bZ(this.gt__O__O__Z(x$4, y$4))
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.lt__O__O__ = (function(x$5, y$5) {
  return ScalaJS.bZ(this.lt__O__O__Z(x$5, y$5))
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.gteq__O__O__ = (function(x$6, y$6) {
  return ScalaJS.bZ(this.gteq__O__O__Z(x$6, y$6))
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.lteq__O__O__ = (function(x$7, y$7) {
  return ScalaJS.bZ(this.lteq__O__O__Z(x$7, y$7))
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.tryCompare__O__O__ = (function(x$8, y$8) {
  return this.tryCompare__O__O__Lscala_Some(x$8, y$8)
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.compare__Lscala_Enumeration$Value__Lscala_Enumeration$Value__ = (function(x$9, y$9) {
  return ScalaJS.bI(this.compare__Lscala_Enumeration$Value__Lscala_Enumeration$Value__I(x$9, y$9))
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.compare__O__O__ = (function(x$10, y$10) {
  return ScalaJS.bI(this.compare__O__O__I(x$10, y$10))
});
/** @constructor */
ScalaJS.inheritable.scala_Enumeration$ValueOrdering$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Enumeration$ValueOrdering$.prototype = ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype;
ScalaJS.is.scala_Enumeration$ValueOrdering$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Enumeration$ValueOrdering$)))
});
ScalaJS.as.scala_Enumeration$ValueOrdering$ = (function(obj) {
  if ((ScalaJS.is.scala_Enumeration$ValueOrdering$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Enumeration$ValueOrdering")
  }
});
ScalaJS.isArrayOf.scala_Enumeration$ValueOrdering$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Enumeration$ValueOrdering$)))
});
ScalaJS.asArrayOf.scala_Enumeration$ValueOrdering$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Enumeration$ValueOrdering$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Enumeration$ValueOrdering;", depth)
  }
});
ScalaJS.data.scala_Enumeration$ValueOrdering$ = new ScalaJS.ClassTypeData({
  scala_Enumeration$ValueOrdering$: 0
}, false, "scala.Enumeration$ValueOrdering$", ScalaJS.data.java_lang_Object, {
  scala_Enumeration$ValueOrdering$: 1,
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Enumeration$ValueOrdering$.prototype.$classData = ScalaJS.data.scala_Enumeration$ValueOrdering$;
//@ sourceMappingURL=Enumeration$ValueOrdering$.js.map
