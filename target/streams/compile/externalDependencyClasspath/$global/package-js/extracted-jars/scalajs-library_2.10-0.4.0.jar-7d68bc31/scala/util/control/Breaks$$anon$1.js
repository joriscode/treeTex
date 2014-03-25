/** @constructor */
ScalaJS.c.scala_util_control_Breaks$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null;
  this.op$1$1 = null
});
ScalaJS.c.scala_util_control_Breaks$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_Breaks$$anon$1.prototype.constructor = ScalaJS.c.scala_util_control_Breaks$$anon$1;
ScalaJS.c.scala_util_control_Breaks$$anon$1.prototype.catchBreak__Lscala_Function0__O = (function(onBreak) {
  try {
    return this.op$1$1.apply__O()
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_util_control_BreakControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex !== this.$$outer$1.scala$util$control$Breaks$$breakException__Lscala_util_control_BreakControl())) {
        throw ex
      };
      return onBreak.apply__O()
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_util_control_Breaks$$anon$1.prototype.init___Lscala_util_control_Breaks__Lscala_Function0 = (function($$outer, op$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  this.op$1$1 = op$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_control_Breaks$$anon$1.prototype.catchBreak__Lscala_Function0__ = (function(onBreak) {
  return this.catchBreak__Lscala_Function0__O(onBreak)
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_Breaks$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_Breaks$$anon$1.prototype = ScalaJS.c.scala_util_control_Breaks$$anon$1.prototype;
ScalaJS.is.scala_util_control_Breaks$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_Breaks$$anon$1)))
});
ScalaJS.as.scala_util_control_Breaks$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_util_control_Breaks$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.Breaks$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_util_control_Breaks$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_Breaks$$anon$1)))
});
ScalaJS.asArrayOf.scala_util_control_Breaks$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_Breaks$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.Breaks$$anon$1;", depth)
  }
});
ScalaJS.data.scala_util_control_Breaks$$anon$1 = new ScalaJS.ClassTypeData({
  scala_util_control_Breaks$$anon$1: 0
}, false, "scala.util.control.Breaks$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_util_control_Breaks$$anon$1: 1,
  scala_util_control_Breaks$TryBlock: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_Breaks$$anon$1.prototype.$classData = ScalaJS.data.scala_util_control_Breaks$$anon$1;
//@ sourceMappingURL=Breaks$$anon$1.js.map
