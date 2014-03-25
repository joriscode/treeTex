/** @constructor */
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_package$DoubleMult$;
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype.$$times$extension__D__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function($$this, d$2) {
  return d$2.$$times__D__Lscala_concurrent_duration_Duration($$this)
});
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype.hashCode$extension__D__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bD($$this))
});
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype.equals$extension__D__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_concurrent_duration_package$DoubleMult(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var DoubleMult$1 = ScalaJS.as.scala_concurrent_duration_package$DoubleMult(x$1).f__D();
    return ($$this === DoubleMult$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype.equals$extension__D__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__D__O__Z($$this, x$1))
});
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype.hashCode$extension__D__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__D__I($$this$2))
});
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype.$$times$extension__D__Lscala_concurrent_duration_Duration__ = (function($$this$3, d) {
  return this.$$times$extension__D__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration($$this$3, d)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_package$DoubleMult$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_package$DoubleMult$.prototype = ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype;
ScalaJS.is.scala_concurrent_duration_package$DoubleMult$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_package$DoubleMult$)))
});
ScalaJS.as.scala_concurrent_duration_package$DoubleMult$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_package$DoubleMult$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.package$DoubleMult")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_package$DoubleMult$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_package$DoubleMult$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_package$DoubleMult$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_package$DoubleMult$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.package$DoubleMult;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_package$DoubleMult$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_package$DoubleMult$: 0
}, false, "scala.concurrent.duration.package$DoubleMult$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_package$DoubleMult$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_package$DoubleMult$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_package$DoubleMult$;
ScalaJS.moduleInstances.scala_concurrent_duration_package$DoubleMult = undefined;
ScalaJS.modules.scala_concurrent_duration_package$DoubleMult = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_package$DoubleMult)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_package$DoubleMult = new ScalaJS.c.scala_concurrent_duration_package$DoubleMult$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_package$DoubleMult
});
//@ sourceMappingURL=package$DoubleMult$.js.map
