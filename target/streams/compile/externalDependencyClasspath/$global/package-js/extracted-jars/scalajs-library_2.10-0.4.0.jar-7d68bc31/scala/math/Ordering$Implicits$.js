/** @constructor */
ScalaJS.c.scala_math_Ordering$Implicits$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Ordering$Implicits$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordering$Implicits$.prototype.constructor = ScalaJS.c.scala_math_Ordering$Implicits$;
ScalaJS.c.scala_math_Ordering$Implicits$.prototype.seqDerivedOrdering__Lscala_math_Ordering__Lscala_math_Ordering = (function(ord) {
  return ScalaJS.impls.scala_math_Ordering$ExtraImplicits$class__seqDerivedOrdering__Lscala_math_Ordering$ExtraImplicits__Lscala_math_Ordering__Lscala_math_Ordering(this, ord)
});
ScalaJS.c.scala_math_Ordering$Implicits$.prototype.infixOrderingOps__O__Lscala_math_Ordering__Lscala_math_Ordering$Ops = (function(x, ord) {
  return ScalaJS.impls.scala_math_Ordering$ExtraImplicits$class__infixOrderingOps__Lscala_math_Ordering$ExtraImplicits__O__Lscala_math_Ordering__Lscala_math_Ordering$Ops(this, x, ord)
});
ScalaJS.c.scala_math_Ordering$Implicits$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_Ordering$Implicits = this;
  ScalaJS.impls.scala_math_Ordering$ExtraImplicits$class__$init$__Lscala_math_Ordering$ExtraImplicits__V(this);
  return this
});
ScalaJS.c.scala_math_Ordering$Implicits$.prototype.infixOrderingOps__O__Lscala_math_Ordering__ = (function(x, ord) {
  return this.infixOrderingOps__O__Lscala_math_Ordering__Lscala_math_Ordering$Ops(x, ord)
});
ScalaJS.c.scala_math_Ordering$Implicits$.prototype.seqDerivedOrdering__Lscala_math_Ordering__ = (function(ord$2) {
  return this.seqDerivedOrdering__Lscala_math_Ordering__Lscala_math_Ordering(ord$2)
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordering$Implicits$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordering$Implicits$.prototype = ScalaJS.c.scala_math_Ordering$Implicits$.prototype;
ScalaJS.is.scala_math_Ordering$Implicits$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordering$Implicits$)))
});
ScalaJS.as.scala_math_Ordering$Implicits$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordering$Implicits$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordering$Implicits")
  }
});
ScalaJS.isArrayOf.scala_math_Ordering$Implicits$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordering$Implicits$)))
});
ScalaJS.asArrayOf.scala_math_Ordering$Implicits$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordering$Implicits$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordering$Implicits;", depth)
  }
});
ScalaJS.data.scala_math_Ordering$Implicits$ = new ScalaJS.ClassTypeData({
  scala_math_Ordering$Implicits$: 0
}, false, "scala.math.Ordering$Implicits$", ScalaJS.data.java_lang_Object, {
  scala_math_Ordering$Implicits$: 1,
  scala_math_Ordering$ExtraImplicits: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordering$Implicits$.prototype.$classData = ScalaJS.data.scala_math_Ordering$Implicits$;
ScalaJS.moduleInstances.scala_math_Ordering$Implicits = undefined;
ScalaJS.modules.scala_math_Ordering$Implicits = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Ordering$Implicits)) {
    ScalaJS.moduleInstances.scala_math_Ordering$Implicits = new ScalaJS.c.scala_math_Ordering$Implicits$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Ordering$Implicits
});
//@ sourceMappingURL=Ordering$Implicits$.js.map
