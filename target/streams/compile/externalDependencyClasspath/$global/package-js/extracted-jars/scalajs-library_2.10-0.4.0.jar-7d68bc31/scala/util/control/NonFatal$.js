/** @constructor */
ScalaJS.c.scala_util_control_NonFatal$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_control_NonFatal$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_NonFatal$.prototype.constructor = ScalaJS.c.scala_util_control_NonFatal$;
ScalaJS.c.scala_util_control_NonFatal$.prototype.apply__Ljava_lang_Throwable__Z = (function(t) {
  var x1$3 = t;
  if (ScalaJS.is.java_lang_StackOverflowError(x1$3)) {
    return true
  };
  matchEnd14: {
    if (ScalaJS.is.java_lang_VirtualMachineError(x1$3)) {
      var jsx$1 = true;
      break matchEnd14
    };
    if (ScalaJS.is.java_lang_ThreadDeath(x1$3)) {
      var jsx$1 = true;
      break matchEnd14
    };
    if (ScalaJS.is.java_lang_InterruptedException(x1$3)) {
      var jsx$1 = true;
      break matchEnd14
    };
    if (ScalaJS.is.java_lang_LinkageError(x1$3)) {
      var jsx$1 = true;
      break matchEnd14
    };
    if (ScalaJS.is.scala_util_control_ControlThrowable(x1$3)) {
      var jsx$1 = true;
      break matchEnd14
    };
    if (ScalaJS.is.scala_NotImplementedError(x1$3)) {
      var jsx$1 = true;
      break matchEnd14
    };
    var jsx$1 = false;
    break matchEnd14
  };
  if (jsx$1) {
    return false
  };
  return true
});
ScalaJS.c.scala_util_control_NonFatal$.prototype.unapply__Ljava_lang_Throwable__Lscala_Option = (function(t) {
  if (this.apply__Ljava_lang_Throwable__Z(t)) {
    return new ScalaJS.c.scala_Some().init___O(t)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_util_control_NonFatal$.prototype.unapply__Ljava_lang_Throwable__ = (function(t) {
  return this.unapply__Ljava_lang_Throwable__Lscala_Option(t)
});
ScalaJS.c.scala_util_control_NonFatal$.prototype.apply__Ljava_lang_Throwable__ = (function(t$2) {
  return ScalaJS.bZ(this.apply__Ljava_lang_Throwable__Z(t$2))
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_NonFatal$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_NonFatal$.prototype = ScalaJS.c.scala_util_control_NonFatal$.prototype;
ScalaJS.is.scala_util_control_NonFatal$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_NonFatal$)))
});
ScalaJS.as.scala_util_control_NonFatal$ = (function(obj) {
  if ((ScalaJS.is.scala_util_control_NonFatal$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.NonFatal")
  }
});
ScalaJS.isArrayOf.scala_util_control_NonFatal$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_NonFatal$)))
});
ScalaJS.asArrayOf.scala_util_control_NonFatal$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_NonFatal$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.NonFatal;", depth)
  }
});
ScalaJS.data.scala_util_control_NonFatal$ = new ScalaJS.ClassTypeData({
  scala_util_control_NonFatal$: 0
}, false, "scala.util.control.NonFatal$", ScalaJS.data.java_lang_Object, {
  scala_util_control_NonFatal$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_NonFatal$.prototype.$classData = ScalaJS.data.scala_util_control_NonFatal$;
ScalaJS.moduleInstances.scala_util_control_NonFatal = undefined;
ScalaJS.modules.scala_util_control_NonFatal = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_control_NonFatal)) {
    ScalaJS.moduleInstances.scala_util_control_NonFatal = new ScalaJS.c.scala_util_control_NonFatal$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_control_NonFatal
});
//@ sourceMappingURL=NonFatal$.js.map
