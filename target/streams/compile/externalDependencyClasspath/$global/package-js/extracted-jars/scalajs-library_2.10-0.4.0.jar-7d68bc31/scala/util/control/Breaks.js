/** @constructor */
ScalaJS.c.scala_util_control_Breaks = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$util$control$Breaks$$breakException$1 = null
});
ScalaJS.c.scala_util_control_Breaks.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_Breaks.prototype.constructor = ScalaJS.c.scala_util_control_Breaks;
ScalaJS.c.scala_util_control_Breaks.prototype.scala$util$control$Breaks$$breakException__Lscala_util_control_BreakControl = (function() {
  return this.scala$util$control$Breaks$$breakException$1
});
ScalaJS.c.scala_util_control_Breaks.prototype.breakable__Lscala_Function0__V = (function(op) {
  try {
    op.apply$mcV$sp__V()
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_util_control_BreakControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex !== this.scala$util$control$Breaks$$breakException__Lscala_util_control_BreakControl())) {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_util_control_Breaks.prototype.tryBreakable__Lscala_Function0__Lscala_util_control_Breaks$TryBlock = (function(op) {
  return new ScalaJS.c.scala_util_control_Breaks$$anon$1().init___Lscala_util_control_Breaks__Lscala_Function0(this, op)
});
ScalaJS.c.scala_util_control_Breaks.prototype.$break__Lscala_Nothing = (function() {
  throw this.scala$util$control$Breaks$$breakException__Lscala_util_control_BreakControl()
});
ScalaJS.c.scala_util_control_Breaks.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.scala$util$control$Breaks$$breakException$1 = new ScalaJS.c.scala_util_control_BreakControl().init___();
  return this
});
ScalaJS.c.scala_util_control_Breaks.prototype.$break__ = (function() {
  return this.$break__Lscala_Nothing()
});
ScalaJS.c.scala_util_control_Breaks.prototype.tryBreakable__Lscala_Function0__ = (function(op) {
  return this.tryBreakable__Lscala_Function0__Lscala_util_control_Breaks$TryBlock(op)
});
ScalaJS.c.scala_util_control_Breaks.prototype.breakable__Lscala_Function0__ = (function(op$2) {
  return ScalaJS.bV(this.breakable__Lscala_Function0__V(op$2))
});
ScalaJS.c.scala_util_control_Breaks.prototype.scala$util$control$Breaks$$breakException__ = (function() {
  return this.scala$util$control$Breaks$$breakException__Lscala_util_control_BreakControl()
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_Breaks = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_Breaks.prototype = ScalaJS.c.scala_util_control_Breaks.prototype;
ScalaJS.is.scala_util_control_Breaks = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_Breaks)))
});
ScalaJS.as.scala_util_control_Breaks = (function(obj) {
  if ((ScalaJS.is.scala_util_control_Breaks(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.Breaks")
  }
});
ScalaJS.isArrayOf.scala_util_control_Breaks = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_Breaks)))
});
ScalaJS.asArrayOf.scala_util_control_Breaks = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_Breaks(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.Breaks;", depth)
  }
});
ScalaJS.data.scala_util_control_Breaks = new ScalaJS.ClassTypeData({
  scala_util_control_Breaks: 0
}, false, "scala.util.control.Breaks", ScalaJS.data.java_lang_Object, {
  scala_util_control_Breaks: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_Breaks.prototype.$classData = ScalaJS.data.scala_util_control_Breaks;
//@ sourceMappingURL=Breaks.js.map
