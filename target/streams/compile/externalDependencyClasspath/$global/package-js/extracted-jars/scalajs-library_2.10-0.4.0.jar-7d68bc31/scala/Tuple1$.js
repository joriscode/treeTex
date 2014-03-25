/** @constructor */
ScalaJS.c.scala_Tuple1$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Tuple1$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Tuple1$.prototype.constructor = ScalaJS.c.scala_Tuple1$;
ScalaJS.c.scala_Tuple1$.prototype.toString__T = (function() {
  return "Tuple1"
});
ScalaJS.c.scala_Tuple1$.prototype.apply__O__Lscala_Tuple1 = (function(_1) {
  return new ScalaJS.c.scala_Tuple1().init___O(_1)
});
ScalaJS.c.scala_Tuple1$.prototype.unapply__Lscala_Tuple1__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.$$und1__O())
  }
});
ScalaJS.c.scala_Tuple1$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Tuple1()
});
ScalaJS.c.scala_Tuple1$.prototype.apply$mDc$sp__D__Lscala_Tuple1 = (function(_1) {
  return new ScalaJS.c.scala_Tuple1$mcD$sp().init___D(_1)
});
ScalaJS.c.scala_Tuple1$.prototype.apply$mIc$sp__I__Lscala_Tuple1 = (function(_1) {
  return new ScalaJS.c.scala_Tuple1$mcI$sp().init___I(_1)
});
ScalaJS.c.scala_Tuple1$.prototype.apply$mJc$sp__J__Lscala_Tuple1 = (function(_1) {
  return new ScalaJS.c.scala_Tuple1$mcJ$sp().init___J(_1)
});
ScalaJS.c.scala_Tuple1$.prototype.unapply$mDc$sp__Lscala_Tuple1__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.bD(x$0.$$und1$mcD$sp__D()))
  }
});
ScalaJS.c.scala_Tuple1$.prototype.unapply$mIc$sp__Lscala_Tuple1__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.bI(x$0.$$und1$mcI$sp__I()))
  }
});
ScalaJS.c.scala_Tuple1$.prototype.unapply$mJc$sp__Lscala_Tuple1__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.bJ(x$0.$$und1$mcJ$sp__J()))
  }
});
ScalaJS.c.scala_Tuple1$.prototype.unapply$mJc$sp__Lscala_Tuple1__ = (function(x$0) {
  return this.unapply$mJc$sp__Lscala_Tuple1__Lscala_Option(x$0)
});
ScalaJS.c.scala_Tuple1$.prototype.unapply$mIc$sp__Lscala_Tuple1__ = (function(x$0$2) {
  return this.unapply$mIc$sp__Lscala_Tuple1__Lscala_Option(x$0$2)
});
ScalaJS.c.scala_Tuple1$.prototype.unapply$mDc$sp__Lscala_Tuple1__ = (function(x$0$3) {
  return this.unapply$mDc$sp__Lscala_Tuple1__Lscala_Option(x$0$3)
});
ScalaJS.c.scala_Tuple1$.prototype.unapply__Lscala_Tuple1__ = (function(x$0$4) {
  return this.unapply__Lscala_Tuple1__Lscala_Option(x$0$4)
});
ScalaJS.c.scala_Tuple1$.prototype.apply$mJc$sp__J__ = (function(_1) {
  return this.apply$mJc$sp__J__Lscala_Tuple1(_1)
});
ScalaJS.c.scala_Tuple1$.prototype.apply$mIc$sp__I__ = (function(_1$2) {
  return this.apply$mIc$sp__I__Lscala_Tuple1(_1$2)
});
ScalaJS.c.scala_Tuple1$.prototype.apply$mDc$sp__D__ = (function(_1$3) {
  return this.apply$mDc$sp__D__Lscala_Tuple1(_1$3)
});
ScalaJS.c.scala_Tuple1$.prototype.apply__O__ = (function(_1$4) {
  return this.apply__O__Lscala_Tuple1(_1$4)
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple1$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple1$.prototype = ScalaJS.c.scala_Tuple1$.prototype;
ScalaJS.is.scala_Tuple1$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple1$)))
});
ScalaJS.as.scala_Tuple1$ = (function(obj) {
  if ((ScalaJS.is.scala_Tuple1$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple1")
  }
});
ScalaJS.isArrayOf.scala_Tuple1$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple1$)))
});
ScalaJS.asArrayOf.scala_Tuple1$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple1$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple1;", depth)
  }
});
ScalaJS.data.scala_Tuple1$ = new ScalaJS.ClassTypeData({
  scala_Tuple1$: 0
}, false, "scala.Tuple1$", ScalaJS.data.java_lang_Object, {
  scala_Tuple1$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple1$.prototype.$classData = ScalaJS.data.scala_Tuple1$;
ScalaJS.moduleInstances.scala_Tuple1 = undefined;
ScalaJS.modules.scala_Tuple1 = (function() {
  if ((!ScalaJS.moduleInstances.scala_Tuple1)) {
    ScalaJS.moduleInstances.scala_Tuple1 = new ScalaJS.c.scala_Tuple1$().init___()
  };
  return ScalaJS.moduleInstances.scala_Tuple1
});
//@ sourceMappingURL=Tuple1$.js.map
