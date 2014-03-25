/** @constructor */
ScalaJS.c.scala_concurrent_duration_package$IntMult$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_package$IntMult$;
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.$$times$extension0__I__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function($$this, d$3) {
  return d$3.$$times__D__Lscala_concurrent_duration_Duration($$this)
});
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.$$times$extension1__I__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration = (function($$this, d) {
  return d.$$times__J__Lscala_concurrent_duration_FiniteDuration(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this))
});
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.hashCode$extension__I__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bI($$this))
});
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.equals$extension__I__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_concurrent_duration_package$IntMult(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var IntMult$1 = ScalaJS.as.scala_concurrent_duration_package$IntMult(x$1).i__I();
    return ($$this === IntMult$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.equals$extension__I__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__I__O__Z($$this, x$1))
});
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.hashCode$extension__I__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__I__I($$this$2))
});
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.$$times$extension1__I__Lscala_concurrent_duration_FiniteDuration__ = (function($$this$3, d) {
  return this.$$times$extension1__I__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration($$this$3, d)
});
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.$$times$extension0__I__Lscala_concurrent_duration_Duration__ = (function($$this$4, d$2) {
  return this.$$times$extension0__I__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration($$this$4, d$2)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_package$IntMult$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_package$IntMult$.prototype = ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype;
ScalaJS.is.scala_concurrent_duration_package$IntMult$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_package$IntMult$)))
});
ScalaJS.as.scala_concurrent_duration_package$IntMult$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_package$IntMult$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.package$IntMult")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_package$IntMult$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_package$IntMult$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_package$IntMult$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_package$IntMult$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.package$IntMult;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_package$IntMult$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_package$IntMult$: 0
}, false, "scala.concurrent.duration.package$IntMult$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_package$IntMult$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_package$IntMult$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_package$IntMult$;
ScalaJS.moduleInstances.scala_concurrent_duration_package$IntMult = undefined;
ScalaJS.modules.scala_concurrent_duration_package$IntMult = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_package$IntMult)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_package$IntMult = new ScalaJS.c.scala_concurrent_duration_package$IntMult$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_package$IntMult
});
//@ sourceMappingURL=package$IntMult$.js.map
