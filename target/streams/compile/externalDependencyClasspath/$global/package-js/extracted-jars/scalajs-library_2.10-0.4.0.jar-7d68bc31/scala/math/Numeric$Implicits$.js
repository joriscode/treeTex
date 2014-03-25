/** @constructor */
ScalaJS.c.scala_math_Numeric$Implicits$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Numeric$Implicits$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Numeric$Implicits$.prototype.constructor = ScalaJS.c.scala_math_Numeric$Implicits$;
ScalaJS.c.scala_math_Numeric$Implicits$.prototype.infixNumericOps__O__Lscala_math_Numeric__Lscala_math_Numeric$Ops = (function(x, num) {
  return ScalaJS.impls.scala_math_Numeric$ExtraImplicits$class__infixNumericOps__Lscala_math_Numeric$ExtraImplicits__O__Lscala_math_Numeric__Lscala_math_Numeric$Ops(this, x, num)
});
ScalaJS.c.scala_math_Numeric$Implicits$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_Numeric$Implicits = this;
  ScalaJS.impls.scala_math_Numeric$ExtraImplicits$class__$init$__Lscala_math_Numeric$ExtraImplicits__V(this);
  return this
});
ScalaJS.c.scala_math_Numeric$Implicits$.prototype.infixNumericOps__O__Lscala_math_Numeric__ = (function(x, num) {
  return this.infixNumericOps__O__Lscala_math_Numeric__Lscala_math_Numeric$Ops(x, num)
});
/** @constructor */
ScalaJS.inheritable.scala_math_Numeric$Implicits$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Numeric$Implicits$.prototype = ScalaJS.c.scala_math_Numeric$Implicits$.prototype;
ScalaJS.is.scala_math_Numeric$Implicits$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Numeric$Implicits$)))
});
ScalaJS.as.scala_math_Numeric$Implicits$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Numeric$Implicits$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Numeric$Implicits")
  }
});
ScalaJS.isArrayOf.scala_math_Numeric$Implicits$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Numeric$Implicits$)))
});
ScalaJS.asArrayOf.scala_math_Numeric$Implicits$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Numeric$Implicits$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Numeric$Implicits;", depth)
  }
});
ScalaJS.data.scala_math_Numeric$Implicits$ = new ScalaJS.ClassTypeData({
  scala_math_Numeric$Implicits$: 0
}, false, "scala.math.Numeric$Implicits$", ScalaJS.data.java_lang_Object, {
  scala_math_Numeric$Implicits$: 1,
  scala_math_Numeric$ExtraImplicits: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Numeric$Implicits$.prototype.$classData = ScalaJS.data.scala_math_Numeric$Implicits$;
ScalaJS.moduleInstances.scala_math_Numeric$Implicits = undefined;
ScalaJS.modules.scala_math_Numeric$Implicits = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Numeric$Implicits)) {
    ScalaJS.moduleInstances.scala_math_Numeric$Implicits = new ScalaJS.c.scala_math_Numeric$Implicits$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Numeric$Implicits
});
//@ sourceMappingURL=Numeric$Implicits$.js.map
