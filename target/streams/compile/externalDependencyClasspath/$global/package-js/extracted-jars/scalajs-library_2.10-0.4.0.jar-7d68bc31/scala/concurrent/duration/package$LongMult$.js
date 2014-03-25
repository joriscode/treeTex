/** @constructor */
ScalaJS.c.scala_concurrent_duration_package$LongMult$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_package$LongMult$;
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.$$times$extension0__J__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function($$this, d$3) {
  return d$3.$$times__D__Lscala_concurrent_duration_Duration($$this.toDouble__D())
});
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.$$times$extension1__J__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration = (function($$this, d) {
  return d.$$times__J__Lscala_concurrent_duration_FiniteDuration($$this)
});
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.hashCode$extension__J__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bJ($$this))
});
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.equals$extension__J__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_concurrent_duration_package$LongMult(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var LongMult$1 = ScalaJS.as.scala_concurrent_duration_package$LongMult(x$1).i__J();
    return $$this.equals__O__Z(LongMult$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.equals$extension__J__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__J__O__Z($$this, x$1))
});
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.hashCode$extension__J__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__J__I($$this$2))
});
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.$$times$extension1__J__Lscala_concurrent_duration_FiniteDuration__ = (function($$this$3, d) {
  return this.$$times$extension1__J__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_FiniteDuration($$this$3, d)
});
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.$$times$extension0__J__Lscala_concurrent_duration_Duration__ = (function($$this$4, d$2) {
  return this.$$times$extension0__J__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration($$this$4, d$2)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_package$LongMult$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_package$LongMult$.prototype = ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype;
ScalaJS.is.scala_concurrent_duration_package$LongMult$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_package$LongMult$)))
});
ScalaJS.as.scala_concurrent_duration_package$LongMult$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_package$LongMult$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.package$LongMult")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_package$LongMult$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_package$LongMult$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_package$LongMult$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_package$LongMult$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.package$LongMult;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_package$LongMult$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_package$LongMult$: 0
}, false, "scala.concurrent.duration.package$LongMult$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_package$LongMult$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_package$LongMult$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_package$LongMult$;
ScalaJS.moduleInstances.scala_concurrent_duration_package$LongMult = undefined;
ScalaJS.modules.scala_concurrent_duration_package$LongMult = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_package$LongMult)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_package$LongMult = new ScalaJS.c.scala_concurrent_duration_package$LongMult$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_package$LongMult
});
//@ sourceMappingURL=package$LongMult$.js.map
