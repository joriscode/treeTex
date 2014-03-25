/** @constructor */
ScalaJS.c.scala_math_Integral$Implicits$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Integral$Implicits$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Integral$Implicits$.prototype.constructor = ScalaJS.c.scala_math_Integral$Implicits$;
ScalaJS.c.scala_math_Integral$Implicits$.prototype.infixIntegralOps__O__Lscala_math_Integral__Lscala_math_Integral$IntegralOps = (function(x, num) {
  return ScalaJS.impls.scala_math_Integral$ExtraImplicits$class__infixIntegralOps__Lscala_math_Integral$ExtraImplicits__O__Lscala_math_Integral__Lscala_math_Integral$IntegralOps(this, x, num)
});
ScalaJS.c.scala_math_Integral$Implicits$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_Integral$Implicits = this;
  ScalaJS.impls.scala_math_Integral$ExtraImplicits$class__$init$__Lscala_math_Integral$ExtraImplicits__V(this);
  return this
});
ScalaJS.c.scala_math_Integral$Implicits$.prototype.infixIntegralOps__O__Lscala_math_Integral__ = (function(x, num) {
  return this.infixIntegralOps__O__Lscala_math_Integral__Lscala_math_Integral$IntegralOps(x, num)
});
/** @constructor */
ScalaJS.inheritable.scala_math_Integral$Implicits$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Integral$Implicits$.prototype = ScalaJS.c.scala_math_Integral$Implicits$.prototype;
ScalaJS.is.scala_math_Integral$Implicits$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Integral$Implicits$)))
});
ScalaJS.as.scala_math_Integral$Implicits$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Integral$Implicits$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Integral$Implicits")
  }
});
ScalaJS.isArrayOf.scala_math_Integral$Implicits$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Integral$Implicits$)))
});
ScalaJS.asArrayOf.scala_math_Integral$Implicits$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Integral$Implicits$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Integral$Implicits;", depth)
  }
});
ScalaJS.data.scala_math_Integral$Implicits$ = new ScalaJS.ClassTypeData({
  scala_math_Integral$Implicits$: 0
}, false, "scala.math.Integral$Implicits$", ScalaJS.data.java_lang_Object, {
  scala_math_Integral$Implicits$: 1,
  scala_math_Integral$ExtraImplicits: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Integral$Implicits$.prototype.$classData = ScalaJS.data.scala_math_Integral$Implicits$;
ScalaJS.moduleInstances.scala_math_Integral$Implicits = undefined;
ScalaJS.modules.scala_math_Integral$Implicits = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Integral$Implicits)) {
    ScalaJS.moduleInstances.scala_math_Integral$Implicits = new ScalaJS.c.scala_math_Integral$Implicits$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Integral$Implicits
});
//@ sourceMappingURL=Integral$Implicits$.js.map
