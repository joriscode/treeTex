/** @constructor */
ScalaJS.c.scala_runtime_RichBoolean$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_RichBoolean$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichBoolean$.prototype.constructor = ScalaJS.c.scala_runtime_RichBoolean$;
ScalaJS.c.scala_runtime_RichBoolean$.prototype.ord$extension__Z__Lscala_math_Ordering$Boolean$ = (function($$this) {
  return ScalaJS.modules.scala_math_Ordering$Boolean()
});
ScalaJS.c.scala_runtime_RichBoolean$.prototype.hashCode$extension__Z__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bZ($$this))
});
ScalaJS.c.scala_runtime_RichBoolean$.prototype.equals$extension__Z__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_RichBoolean(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var RichBoolean$1 = ScalaJS.as.scala_runtime_RichBoolean(x$1).self__Z();
    return ($$this === RichBoolean$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_RichBoolean$.prototype.equals$extension__Z__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__Z__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_RichBoolean$.prototype.hashCode$extension__Z__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__Z__I($$this$2))
});
ScalaJS.c.scala_runtime_RichBoolean$.prototype.ord$extension__Z__ = (function($$this$3) {
  return this.ord$extension__Z__Lscala_math_Ordering$Boolean$($$this$3)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichBoolean$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichBoolean$.prototype = ScalaJS.c.scala_runtime_RichBoolean$.prototype;
ScalaJS.is.scala_runtime_RichBoolean$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichBoolean$)))
});
ScalaJS.as.scala_runtime_RichBoolean$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichBoolean$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichBoolean")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichBoolean$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichBoolean$)))
});
ScalaJS.asArrayOf.scala_runtime_RichBoolean$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichBoolean$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichBoolean;", depth)
  }
});
ScalaJS.data.scala_runtime_RichBoolean$ = new ScalaJS.ClassTypeData({
  scala_runtime_RichBoolean$: 0
}, false, "scala.runtime.RichBoolean$", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichBoolean$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichBoolean$.prototype.$classData = ScalaJS.data.scala_runtime_RichBoolean$;
ScalaJS.moduleInstances.scala_runtime_RichBoolean = undefined;
ScalaJS.modules.scala_runtime_RichBoolean = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_RichBoolean)) {
    ScalaJS.moduleInstances.scala_runtime_RichBoolean = new ScalaJS.c.scala_runtime_RichBoolean$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_RichBoolean
});
//@ sourceMappingURL=RichBoolean$.js.map
