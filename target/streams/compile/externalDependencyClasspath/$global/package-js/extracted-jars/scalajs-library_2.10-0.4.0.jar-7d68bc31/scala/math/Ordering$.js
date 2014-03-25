/** @constructor */
ScalaJS.c.scala_math_Ordering$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Ordering$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordering$.prototype.constructor = ScalaJS.c.scala_math_Ordering$;
ScalaJS.c.scala_math_Ordering$.prototype.ordered__Lscala_Function1__Lscala_math_Ordering = (function(evidence$1) {
  return ScalaJS.impls.scala_math_LowPriorityOrderingImplicits$class__ordered__Lscala_math_LowPriorityOrderingImplicits__Lscala_Function1__Lscala_math_Ordering(this, evidence$1)
});
ScalaJS.c.scala_math_Ordering$.prototype.comparatorToOrdering__Ljava_util_Comparator__Lscala_math_Ordering = (function(cmp) {
  return ScalaJS.impls.scala_math_LowPriorityOrderingImplicits$class__comparatorToOrdering__Lscala_math_LowPriorityOrderingImplicits__Ljava_util_Comparator__Lscala_math_Ordering(this, cmp)
});
ScalaJS.c.scala_math_Ordering$.prototype.apply__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord) {
  return ord
});
ScalaJS.c.scala_math_Ordering$.prototype.fromLessThan__Lscala_Function2__Lscala_math_Ordering = (function(cmp) {
  return new ScalaJS.c.scala_math_Ordering$$anon$9().init___Lscala_Function2(cmp)
});
ScalaJS.c.scala_math_Ordering$.prototype.by__Lscala_Function1__Lscala_math_Ordering__Lscala_math_Ordering = (function(f, ord) {
  return this.fromLessThan__Lscala_Function2__Lscala_math_Ordering(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(f$1, ord$3) {
    return (function(x, y) {
      return ScalaJS.bZ(ord$3.lt__O__O__Z(f$1.apply__O__O(x), f$1.apply__O__O(y)))
    })
  })(f, ord)))
});
ScalaJS.c.scala_math_Ordering$.prototype.Option__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord) {
  return new ScalaJS.c.scala_math_Ordering$$anon$3().init___Lscala_math_Ordering(ord)
});
ScalaJS.c.scala_math_Ordering$.prototype.Iterable__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord) {
  return new ScalaJS.c.scala_math_Ordering$$anon$10().init___Lscala_math_Ordering(ord)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple2__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord1, ord2) {
  return new ScalaJS.c.scala_math_Ordering$$anon$11().init___Lscala_math_Ordering__Lscala_math_Ordering(ord1, ord2)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple3__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord1, ord2, ord3) {
  return new ScalaJS.c.scala_math_Ordering$$anon$12().init___Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1, ord2, ord3)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple4__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord1, ord2, ord3, ord4) {
  return new ScalaJS.c.scala_math_Ordering$$anon$13().init___Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1, ord2, ord3, ord4)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple5__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord1, ord2, ord3, ord4, ord5) {
  return new ScalaJS.c.scala_math_Ordering$$anon$14().init___Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1, ord2, ord3, ord4, ord5)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple6__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord1, ord2, ord3, ord4, ord5, ord6) {
  return new ScalaJS.c.scala_math_Ordering$$anon$15().init___Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1, ord2, ord3, ord4, ord5, ord6)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple7__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord1, ord2, ord3, ord4, ord5, ord6, ord7) {
  return new ScalaJS.c.scala_math_Ordering$$anon$16().init___Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1, ord2, ord3, ord4, ord5, ord6, ord7)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple8__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord1, ord2, ord3, ord4, ord5, ord6, ord7, ord8) {
  return new ScalaJS.c.scala_math_Ordering$$anon$17().init___Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1, ord2, ord3, ord4, ord5, ord6, ord7, ord8)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple9__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord1, ord2, ord3, ord4, ord5, ord6, ord7, ord8, ord9) {
  return new ScalaJS.c.scala_math_Ordering$$anon$18().init___Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1, ord2, ord3, ord4, ord5, ord6, ord7, ord8, ord9)
});
ScalaJS.c.scala_math_Ordering$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_Ordering = this;
  ScalaJS.impls.scala_math_LowPriorityOrderingImplicits$class__$init$__Lscala_math_LowPriorityOrderingImplicits__V(this);
  return this
});
ScalaJS.c.scala_math_Ordering$.prototype.comparatorToOrdering__Ljava_util_Comparator__ = (function(cmp) {
  return this.comparatorToOrdering__Ljava_util_Comparator__Lscala_math_Ordering(cmp)
});
ScalaJS.c.scala_math_Ordering$.prototype.ordered__Lscala_Function1__ = (function(evidence$1) {
  return this.ordered__Lscala_Function1__Lscala_math_Ordering(evidence$1)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple9__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__ = (function(ord1, ord2, ord3, ord4, ord5, ord6, ord7, ord8, ord9) {
  return this.Tuple9__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1, ord2, ord3, ord4, ord5, ord6, ord7, ord8, ord9)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple8__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__ = (function(ord1$2, ord2$2, ord3$2, ord4$2, ord5$2, ord6$2, ord7$2, ord8$2) {
  return this.Tuple8__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1$2, ord2$2, ord3$2, ord4$2, ord5$2, ord6$2, ord7$2, ord8$2)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple7__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__ = (function(ord1$3, ord2$3, ord3$3, ord4$3, ord5$3, ord6$3, ord7$3) {
  return this.Tuple7__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1$3, ord2$3, ord3$3, ord4$3, ord5$3, ord6$3, ord7$3)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple6__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__ = (function(ord1$4, ord2$4, ord3$4, ord4$4, ord5$4, ord6$4) {
  return this.Tuple6__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1$4, ord2$4, ord3$4, ord4$4, ord5$4, ord6$4)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple5__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__ = (function(ord1$5, ord2$5, ord3$5, ord4$5, ord5$5) {
  return this.Tuple5__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1$5, ord2$5, ord3$5, ord4$5, ord5$5)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple4__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__ = (function(ord1$6, ord2$6, ord3$6, ord4$6) {
  return this.Tuple4__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1$6, ord2$6, ord3$6, ord4$6)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple3__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__ = (function(ord1$7, ord2$7, ord3$7) {
  return this.Tuple3__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1$7, ord2$7, ord3$7)
});
ScalaJS.c.scala_math_Ordering$.prototype.Tuple2__Lscala_math_Ordering__Lscala_math_Ordering__ = (function(ord1$8, ord2$8) {
  return this.Tuple2__Lscala_math_Ordering__Lscala_math_Ordering__Lscala_math_Ordering(ord1$8, ord2$8)
});
ScalaJS.c.scala_math_Ordering$.prototype.Iterable__Lscala_math_Ordering__ = (function(ord) {
  return this.Iterable__Lscala_math_Ordering__Lscala_math_Ordering(ord)
});
ScalaJS.c.scala_math_Ordering$.prototype.Option__Lscala_math_Ordering__ = (function(ord$2) {
  return this.Option__Lscala_math_Ordering__Lscala_math_Ordering(ord$2)
});
ScalaJS.c.scala_math_Ordering$.prototype.by__Lscala_Function1__Lscala_math_Ordering__ = (function(f, ord$3) {
  return this.by__Lscala_Function1__Lscala_math_Ordering__Lscala_math_Ordering(f, ord$3)
});
ScalaJS.c.scala_math_Ordering$.prototype.fromLessThan__Lscala_Function2__ = (function(cmp$2) {
  return this.fromLessThan__Lscala_Function2__Lscala_math_Ordering(cmp$2)
});
ScalaJS.c.scala_math_Ordering$.prototype.apply__Lscala_math_Ordering__ = (function(ord$4) {
  return this.apply__Lscala_math_Ordering__Lscala_math_Ordering(ord$4)
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordering$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordering$.prototype = ScalaJS.c.scala_math_Ordering$.prototype;
ScalaJS.is.scala_math_Ordering$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordering$)))
});
ScalaJS.as.scala_math_Ordering$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordering$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordering")
  }
});
ScalaJS.isArrayOf.scala_math_Ordering$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordering$)))
});
ScalaJS.asArrayOf.scala_math_Ordering$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordering$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordering;", depth)
  }
});
ScalaJS.data.scala_math_Ordering$ = new ScalaJS.ClassTypeData({
  scala_math_Ordering$: 0
}, false, "scala.math.Ordering$", ScalaJS.data.java_lang_Object, {
  scala_math_Ordering$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_math_LowPriorityOrderingImplicits: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordering$.prototype.$classData = ScalaJS.data.scala_math_Ordering$;
ScalaJS.moduleInstances.scala_math_Ordering = undefined;
ScalaJS.modules.scala_math_Ordering = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Ordering)) {
    ScalaJS.moduleInstances.scala_math_Ordering = new ScalaJS.c.scala_math_Ordering$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Ordering
});
//@ sourceMappingURL=Ordering$.js.map
