/** @constructor */
ScalaJS.c.scala_runtime_RichByte$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_RichByte$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichByte$.prototype.constructor = ScalaJS.c.scala_runtime_RichByte$;
ScalaJS.c.scala_runtime_RichByte$.prototype.num$extension__B__Lscala_math_Numeric$ByteIsIntegral$ = (function($$this) {
  return ScalaJS.modules.scala_math_Numeric$ByteIsIntegral()
});
ScalaJS.c.scala_runtime_RichByte$.prototype.ord$extension__B__Lscala_math_Ordering$Byte$ = (function($$this) {
  return ScalaJS.modules.scala_math_Ordering$Byte()
});
ScalaJS.c.scala_runtime_RichByte$.prototype.hashCode$extension__B__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bB($$this))
});
ScalaJS.c.scala_runtime_RichByte$.prototype.equals$extension__B__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_RichByte(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var RichByte$1 = ScalaJS.as.scala_runtime_RichByte(x$1).self__B();
    return ($$this === RichByte$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_RichByte$.prototype.equals$extension__B__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__B__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_RichByte$.prototype.hashCode$extension__B__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__B__I($$this$2))
});
ScalaJS.c.scala_runtime_RichByte$.prototype.ord$extension__B__ = (function($$this$3) {
  return this.ord$extension__B__Lscala_math_Ordering$Byte$($$this$3)
});
ScalaJS.c.scala_runtime_RichByte$.prototype.num$extension__B__ = (function($$this$4) {
  return this.num$extension__B__Lscala_math_Numeric$ByteIsIntegral$($$this$4)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichByte$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichByte$.prototype = ScalaJS.c.scala_runtime_RichByte$.prototype;
ScalaJS.is.scala_runtime_RichByte$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichByte$)))
});
ScalaJS.as.scala_runtime_RichByte$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichByte$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichByte")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichByte$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichByte$)))
});
ScalaJS.asArrayOf.scala_runtime_RichByte$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichByte$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichByte;", depth)
  }
});
ScalaJS.data.scala_runtime_RichByte$ = new ScalaJS.ClassTypeData({
  scala_runtime_RichByte$: 0
}, false, "scala.runtime.RichByte$", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichByte$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichByte$.prototype.$classData = ScalaJS.data.scala_runtime_RichByte$;
ScalaJS.moduleInstances.scala_runtime_RichByte = undefined;
ScalaJS.modules.scala_runtime_RichByte = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_RichByte)) {
    ScalaJS.moduleInstances.scala_runtime_RichByte = new ScalaJS.c.scala_runtime_RichByte$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_RichByte
});
//@ sourceMappingURL=RichByte$.js.map
