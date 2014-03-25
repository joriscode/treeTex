/** @constructor */
ScalaJS.c.scala_math_Fractional$Implicits$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_math_Fractional$Implicits$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Fractional$Implicits$.prototype.constructor = ScalaJS.c.scala_math_Fractional$Implicits$;
ScalaJS.c.scala_math_Fractional$Implicits$.prototype.infixFractionalOps__O__Lscala_math_Fractional__Lscala_math_Fractional$FractionalOps = (function(x, num) {
  return ScalaJS.impls.scala_math_Fractional$ExtraImplicits$class__infixFractionalOps__Lscala_math_Fractional$ExtraImplicits__O__Lscala_math_Fractional__Lscala_math_Fractional$FractionalOps(this, x, num)
});
ScalaJS.c.scala_math_Fractional$Implicits$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_math_Fractional$Implicits = this;
  ScalaJS.impls.scala_math_Fractional$ExtraImplicits$class__$init$__Lscala_math_Fractional$ExtraImplicits__V(this);
  return this
});
ScalaJS.c.scala_math_Fractional$Implicits$.prototype.infixFractionalOps__O__Lscala_math_Fractional__ = (function(x, num) {
  return this.infixFractionalOps__O__Lscala_math_Fractional__Lscala_math_Fractional$FractionalOps(x, num)
});
/** @constructor */
ScalaJS.inheritable.scala_math_Fractional$Implicits$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Fractional$Implicits$.prototype = ScalaJS.c.scala_math_Fractional$Implicits$.prototype;
ScalaJS.is.scala_math_Fractional$Implicits$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Fractional$Implicits$)))
});
ScalaJS.as.scala_math_Fractional$Implicits$ = (function(obj) {
  if ((ScalaJS.is.scala_math_Fractional$Implicits$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Fractional$Implicits")
  }
});
ScalaJS.isArrayOf.scala_math_Fractional$Implicits$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Fractional$Implicits$)))
});
ScalaJS.asArrayOf.scala_math_Fractional$Implicits$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Fractional$Implicits$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Fractional$Implicits;", depth)
  }
});
ScalaJS.data.scala_math_Fractional$Implicits$ = new ScalaJS.ClassTypeData({
  scala_math_Fractional$Implicits$: 0
}, false, "scala.math.Fractional$Implicits$", ScalaJS.data.java_lang_Object, {
  scala_math_Fractional$Implicits$: 1,
  scala_math_Fractional$ExtraImplicits: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Fractional$Implicits$.prototype.$classData = ScalaJS.data.scala_math_Fractional$Implicits$;
ScalaJS.moduleInstances.scala_math_Fractional$Implicits = undefined;
ScalaJS.modules.scala_math_Fractional$Implicits = (function() {
  if ((!ScalaJS.moduleInstances.scala_math_Fractional$Implicits)) {
    ScalaJS.moduleInstances.scala_math_Fractional$Implicits = new ScalaJS.c.scala_math_Fractional$Implicits$().init___()
  };
  return ScalaJS.moduleInstances.scala_math_Fractional$Implicits
});
//@ sourceMappingURL=Fractional$Implicits$.js.map
