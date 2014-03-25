/** @constructor */
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.constructor = ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$;
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.re$extension0__T__Lscala_scalajs_js_RegExp = (function($$this) {
  return new ScalaJS.g["RegExp"]($$this)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.re$extension1__T__T__Lscala_scalajs_js_RegExp = (function($$this, mods) {
  return new ScalaJS.g["RegExp"]($$this, mods)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.hashCode$extension__T__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.equals$extension__T__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_scalajs_runtime_StackTrace$StringRE(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var StringRE$1 = null
    } else {
      var StringRE$1 = ScalaJS.as.scala_scalajs_runtime_StackTrace$StringRE(x$1).s__T()
    };
    return ScalaJS.anyRefEqEq($$this, StringRE$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.equals$extension__T__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__T__O__Z($$this, x$1))
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.hashCode$extension__T__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__T__I($$this$2))
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.re$extension1__T__T__ = (function($$this$3, mods) {
  return this.re$extension1__T__T__Lscala_scalajs_js_RegExp($$this$3, mods)
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.re$extension0__T__ = (function($$this$4) {
  return this.re$extension0__T__Lscala_scalajs_js_RegExp($$this$4)
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_runtime_StackTrace$StringRE$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_runtime_StackTrace$StringRE$.prototype = ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype;
ScalaJS.is.scala_scalajs_runtime_StackTrace$StringRE$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_runtime_StackTrace$StringRE$)))
});
ScalaJS.as.scala_scalajs_runtime_StackTrace$StringRE$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_runtime_StackTrace$StringRE$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.runtime.StackTrace$StringRE")
  }
});
ScalaJS.isArrayOf.scala_scalajs_runtime_StackTrace$StringRE$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_runtime_StackTrace$StringRE$)))
});
ScalaJS.asArrayOf.scala_scalajs_runtime_StackTrace$StringRE$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_runtime_StackTrace$StringRE$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.runtime.StackTrace$StringRE;", depth)
  }
});
ScalaJS.data.scala_scalajs_runtime_StackTrace$StringRE$ = new ScalaJS.ClassTypeData({
  scala_scalajs_runtime_StackTrace$StringRE$: 0
}, false, "scala.scalajs.runtime.StackTrace$StringRE$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_runtime_StackTrace$StringRE$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$.prototype.$classData = ScalaJS.data.scala_scalajs_runtime_StackTrace$StringRE$;
ScalaJS.moduleInstances.scala_scalajs_runtime_StackTrace$StringRE = undefined;
ScalaJS.modules.scala_scalajs_runtime_StackTrace$StringRE = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_runtime_StackTrace$StringRE)) {
    ScalaJS.moduleInstances.scala_scalajs_runtime_StackTrace$StringRE = new ScalaJS.c.scala_scalajs_runtime_StackTrace$StringRE$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_runtime_StackTrace$StringRE
});
//@ sourceMappingURL=StackTrace$StringRE$.js.map
