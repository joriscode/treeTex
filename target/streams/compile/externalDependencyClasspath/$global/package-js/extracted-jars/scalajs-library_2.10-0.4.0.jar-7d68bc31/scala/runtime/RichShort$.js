/** @constructor */
ScalaJS.c.scala_runtime_RichShort$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_RichShort$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichShort$.prototype.constructor = ScalaJS.c.scala_runtime_RichShort$;
ScalaJS.c.scala_runtime_RichShort$.prototype.num$extension__S__Lscala_math_Numeric$ShortIsIntegral$ = (function($$this) {
  return ScalaJS.modules.scala_math_Numeric$ShortIsIntegral()
});
ScalaJS.c.scala_runtime_RichShort$.prototype.ord$extension__S__Lscala_math_Ordering$Short$ = (function($$this) {
  return ScalaJS.modules.scala_math_Ordering$Short()
});
ScalaJS.c.scala_runtime_RichShort$.prototype.hashCode$extension__S__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bS($$this))
});
ScalaJS.c.scala_runtime_RichShort$.prototype.equals$extension__S__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_RichShort(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var RichShort$1 = ScalaJS.as.scala_runtime_RichShort(x$1).self__S();
    return ($$this === RichShort$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_RichShort$.prototype.equals$extension__S__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__S__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_RichShort$.prototype.hashCode$extension__S__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__S__I($$this$2))
});
ScalaJS.c.scala_runtime_RichShort$.prototype.ord$extension__S__ = (function($$this$3) {
  return this.ord$extension__S__Lscala_math_Ordering$Short$($$this$3)
});
ScalaJS.c.scala_runtime_RichShort$.prototype.num$extension__S__ = (function($$this$4) {
  return this.num$extension__S__Lscala_math_Numeric$ShortIsIntegral$($$this$4)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichShort$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichShort$.prototype = ScalaJS.c.scala_runtime_RichShort$.prototype;
ScalaJS.is.scala_runtime_RichShort$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichShort$)))
});
ScalaJS.as.scala_runtime_RichShort$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichShort$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichShort")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichShort$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichShort$)))
});
ScalaJS.asArrayOf.scala_runtime_RichShort$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichShort$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichShort;", depth)
  }
});
ScalaJS.data.scala_runtime_RichShort$ = new ScalaJS.ClassTypeData({
  scala_runtime_RichShort$: 0
}, false, "scala.runtime.RichShort$", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichShort$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichShort$.prototype.$classData = ScalaJS.data.scala_runtime_RichShort$;
ScalaJS.moduleInstances.scala_runtime_RichShort = undefined;
ScalaJS.modules.scala_runtime_RichShort = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_RichShort)) {
    ScalaJS.moduleInstances.scala_runtime_RichShort = new ScalaJS.c.scala_runtime_RichShort$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_RichShort
});
//@ sourceMappingURL=RichShort$.js.map
