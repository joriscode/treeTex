/** @constructor */
ScalaJS.c.scala_math_Ordering$$anon$16 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ord1$3$1 = null;
  this.ord2$3$1 = null;
  this.ord3$3$1 = null;
  this.ord4$3$1 = null;
  this.ord5$3$1 = null;
  this.ord6$3$1 = null;
  this.ord7$3$1 = null
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.constructor = ScalaJS.c.scala_math_Ordering$$anon$16;
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.tryCompare__O__O__Lscala_Some = (function(x$11, y$11) {
  return ScalaJS.impls.scala_math_Ordering$class__tryCompare__Lscala_math_Ordering__O__O__Lscala_Some(this, x$11, y$11)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.lteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.gteq__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gteq__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.lt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__lt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.gt__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__gt__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.equiv__O__O__Z = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__equiv__Lscala_math_Ordering__O__O__Z(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.max__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__max__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.min__O__O__O = (function(x, y) {
  return ScalaJS.impls.scala_math_Ordering$class__min__Lscala_math_Ordering__O__O__O(this, x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.reverse__Lscala_math_Ordering = (function() {
  return ScalaJS.impls.scala_math_Ordering$class__reverse__Lscala_math_Ordering__Lscala_math_Ordering(this)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.on__Lscala_Function1__Lscala_math_Ordering = (function(f) {
  return ScalaJS.impls.scala_math_Ordering$class__on__Lscala_math_Ordering__Lscala_Function1__Lscala_math_Ordering(this, f)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.mkOrderingOps__O__Lscala_math_Ordering$Ops = (function(lhs) {
  return ScalaJS.impls.scala_math_Ordering$class__mkOrderingOps__Lscala_math_Ordering__O__Lscala_math_Ordering$Ops(this, lhs)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.compare__Lscala_Tuple7__Lscala_Tuple7__I = (function(x, y) {
  var compare1 = this.ord1$3$1.compare__O__O__I(x.$$und1__O(), y.$$und1__O());
  if ((compare1 !== 0)) {
    return compare1
  };
  var compare2 = this.ord2$3$1.compare__O__O__I(x.$$und2__O(), y.$$und2__O());
  if ((compare2 !== 0)) {
    return compare2
  };
  var compare3 = this.ord3$3$1.compare__O__O__I(x.$$und3__O(), y.$$und3__O());
  if ((compare3 !== 0)) {
    return compare3
  };
  var compare4 = this.ord4$3$1.compare__O__O__I(x.$$und4__O(), y.$$und4__O());
  if ((compare4 !== 0)) {
    return compare4
  };
  var compare5 = this.ord5$3$1.compare__O__O__I(x.$$und5__O(), y.$$und5__O());
  if ((compare5 !== 0)) {
    return compare5
  };
  var compare6 = this.ord6$3$1.compare__O__O__I(x.$$und6__O(), y.$$und6__O());
  if ((compare6 !== 0)) {
    return compare6
  };
  var compare7 = this.ord7$3$1.compare__O__O__I(x.$$und7__O(), y.$$und7__O());
  if ((compare7 !== 0)) {
    return compare7
  };
  return 0
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.reverse__Lscala_math_PartialOrdering = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.tryCompare__O__O__Lscala_Option = (function(x, y) {
  return this.tryCompare__O__O__Lscala_Some(x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.compare__O__O__I = (function(x, y) {
  return this.compare__Lscala_Tuple7__Lscala_Tuple7__I(ScalaJS.as.scala_Tuple7(x), ScalaJS.as.scala_Tuple7(y))
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.init___Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord1$3, ord2$3, ord3$3, ord4$3, ord5$3, ord6$3, ord7$3) {
  this.ord1$3$1 = ord1$3;
  this.ord2$3$1 = ord2$3;
  this.ord3$3$1 = ord3$3;
  this.ord4$3$1 = ord4$3;
  this.ord5$3$1 = ord5$3;
  this.ord6$3$1 = ord6$3;
  this.ord7$3$1 = ord7$3;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_math_PartialOrdering$class__$init$__Lscala_math_PartialOrdering__V(this);
  ScalaJS.impls.scala_math_Ordering$class__$init$__Lscala_math_Ordering__V(this);
  return this
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.mkOrderingOps__O__ = (function(lhs) {
  return this.mkOrderingOps__O__Lscala_math_Ordering$Ops(lhs)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.on__Lscala_Function1__ = (function(f) {
  return this.on__Lscala_Function1__Lscala_math_Ordering(f)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.reverse__ = (function() {
  return this.reverse__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.min__O__O__ = (function(x, y) {
  return this.min__O__O__O(x, y)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.max__O__O__ = (function(x$2, y$2) {
  return this.max__O__O__O(x$2, y$2)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.equiv__O__O__ = (function(x$3, y$3) {
  return ScalaJS.bZ(this.equiv__O__O__Z(x$3, y$3))
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.gt__O__O__ = (function(x$4, y$4) {
  return ScalaJS.bZ(this.gt__O__O__Z(x$4, y$4))
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.lt__O__O__ = (function(x$5, y$5) {
  return ScalaJS.bZ(this.lt__O__O__Z(x$5, y$5))
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.gteq__O__O__ = (function(x$6, y$6) {
  return ScalaJS.bZ(this.gteq__O__O__Z(x$6, y$6))
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.lteq__O__O__ = (function(x$7, y$7) {
  return ScalaJS.bZ(this.lteq__O__O__Z(x$7, y$7))
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.tryCompare__O__O__ = (function(x$8, y$8) {
  return this.tryCompare__O__O__Lscala_Some(x$8, y$8)
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.compare__Lscala_Tuple7__Lscala_Tuple7__ = (function(x$9, y$9) {
  return ScalaJS.bI(this.compare__Lscala_Tuple7__Lscala_Tuple7__I(x$9, y$9))
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.compare__O__O__ = (function(x$10, y$10) {
  return ScalaJS.bI(this.compare__O__O__I(x$10, y$10))
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordering$$anon$16 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordering$$anon$16.prototype = ScalaJS.c.scala_math_Ordering$$anon$16.prototype;
ScalaJS.is.scala_math_Ordering$$anon$16 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordering$$anon$16)))
});
ScalaJS.as.scala_math_Ordering$$anon$16 = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordering$$anon$16(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordering$$anon$16")
  }
});
ScalaJS.isArrayOf.scala_math_Ordering$$anon$16 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordering$$anon$16)))
});
ScalaJS.asArrayOf.scala_math_Ordering$$anon$16 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordering$$anon$16(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordering$$anon$16;", depth)
  }
});
ScalaJS.data.scala_math_Ordering$$anon$16 = new ScalaJS.ClassTypeData({
  scala_math_Ordering$$anon$16: 0
}, false, "scala.math.Ordering$$anon$16", ScalaJS.data.java_lang_Object, {
  scala_math_Ordering$$anon$16: 1,
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordering$$anon$16.prototype.$classData = ScalaJS.data.scala_math_Ordering$$anon$16;
//@ sourceMappingURL=Ordering$$anon$16.js.map
