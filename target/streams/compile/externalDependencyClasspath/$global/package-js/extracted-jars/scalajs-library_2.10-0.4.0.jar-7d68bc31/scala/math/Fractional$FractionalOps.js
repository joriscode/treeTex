/** @constructor */
ScalaJS.c.scala_math_Fractional$FractionalOps = (function() {
  ScalaJS.c.scala_math_Numeric$Ops.call(this);
  this.lhs$2 = null
});
ScalaJS.c.scala_math_Fractional$FractionalOps.prototype = new ScalaJS.inheritable.scala_math_Numeric$Ops();
ScalaJS.c.scala_math_Fractional$FractionalOps.prototype.constructor = ScalaJS.c.scala_math_Fractional$FractionalOps;
ScalaJS.c.scala_math_Fractional$FractionalOps.prototype.$$div__O__O = (function(rhs) {
  return this.scala$math$Fractional$FractionalOps$$$outer__Lscala_math_Fractional().div__O__O__O(this.lhs$2, rhs)
});
ScalaJS.c.scala_math_Fractional$FractionalOps.prototype.scala$math$Fractional$FractionalOps$$$outer__Lscala_math_Fractional = (function() {
  return ScalaJS.as.scala_math_Fractional(this.$$outer$f)
});
ScalaJS.c.scala_math_Fractional$FractionalOps.prototype.init___Lscala_math_Fractional__O = (function($$outer, lhs) {
  this.lhs$2 = lhs;
  ScalaJS.c.scala_math_Numeric$Ops.prototype.init___Lscala_math_Numeric__O.call(this, $$outer, lhs);
  return this
});
ScalaJS.c.scala_math_Fractional$FractionalOps.prototype.scala$math$Fractional$FractionalOps$$$outer__ = (function() {
  return this.scala$math$Fractional$FractionalOps$$$outer__Lscala_math_Fractional()
});
ScalaJS.c.scala_math_Fractional$FractionalOps.prototype.$$div__O__ = (function(rhs) {
  return this.$$div__O__O(rhs)
});
/** @constructor */
ScalaJS.inheritable.scala_math_Fractional$FractionalOps = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Fractional$FractionalOps.prototype = ScalaJS.c.scala_math_Fractional$FractionalOps.prototype;
ScalaJS.is.scala_math_Fractional$FractionalOps = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Fractional$FractionalOps)))
});
ScalaJS.as.scala_math_Fractional$FractionalOps = (function(obj) {
  if ((ScalaJS.is.scala_math_Fractional$FractionalOps(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Fractional$FractionalOps")
  }
});
ScalaJS.isArrayOf.scala_math_Fractional$FractionalOps = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Fractional$FractionalOps)))
});
ScalaJS.asArrayOf.scala_math_Fractional$FractionalOps = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Fractional$FractionalOps(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Fractional$FractionalOps;", depth)
  }
});
ScalaJS.data.scala_math_Fractional$FractionalOps = new ScalaJS.ClassTypeData({
  scala_math_Fractional$FractionalOps: 0
}, false, "scala.math.Fractional$FractionalOps", ScalaJS.data.scala_math_Numeric$Ops, {
  scala_math_Fractional$FractionalOps: 1,
  scala_math_Numeric$Ops: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Fractional$FractionalOps.prototype.$classData = ScalaJS.data.scala_math_Fractional$FractionalOps;
//@ sourceMappingURL=Fractional$FractionalOps.js.map
